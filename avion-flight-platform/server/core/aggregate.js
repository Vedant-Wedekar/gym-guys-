// Aggregator — fans the search out to every enabled provider adapter,
// merges + dedupes results, and falls back to the simulated fare engine
// when no provider keys are configured (or all providers fail).
import { amadeusAdapter } from "../providers/amadeus.js";
import { kiwiAdapter } from "../providers/kiwi.js";
import { travelpayoutsAdapter } from "../providers/travelpayouts.js";
import { skyscannerAdapter } from "../providers/skyscanner.js";
import { aviationstackAdapter } from "../providers/aviationstack.js";
import { generateOffers } from "./fares.js";

const ADAPTERS = [amadeusAdapter, kiwiAdapter, travelpayoutsAdapter, skyscannerAdapter, aviationstackAdapter];

export function parseQuery(qs) {
  const q = {
    from: String(qs.from ?? "NAG").toUpperCase().slice(0, 3),
    to: String(qs.to ?? "BLR").toUpperCase().slice(0, 3),
    depart: String(qs.depart ?? new Date().toISOString().slice(0, 10)),
    ret: qs.ret ? String(qs.ret) : undefined,
    trip: qs.trip === "round" ? "round" : "oneway",
    pax: Math.min(9, Math.max(1, Number(qs.pax) || 1)),
    cabin: ["Economy", "Premium Economy", "Business", "First"].includes(qs.cabin) ? qs.cabin : "Economy",
  };
  if (!/^[A-Z]{3}$/.test(q.from) || !/^[A-Z]{3}$/.test(q.to)) throw new Error("Invalid airport code");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(q.depart)) throw new Error("Invalid date");
  return q;
}

export async function aggregateSearch(q) {
  const live = ADAPTERS.filter((a) => a.enabled());
  if (live.length === 0) {
    return { offers: generateOffers(q), source: "simulated", providers: [] };
  }
  const settled = await Promise.allSettled(
    live.map((a) => Promise.race([
      a.search(q),
      new Promise((_, rej) => setTimeout(() => rej(new Error(`${a.name} timeout`)), 8000)),
    ]))
  );
  const offers = settled.flatMap((s) => (s.status === "fulfilled" ? s.value : []));
  const ok = settled.filter((s) => s.status === "fulfilled").length;
  if (offers.length === 0) {
    return { offers: generateOffers(q), source: "simulated (providers unavailable)", providers: [] };
  }
  // dedupe by airline + flight number + price bucket
  const seen = new Set();
  const deduped = offers.filter((o) => {
    const k = `${o.flightNo}-${Math.round(o.price / 100)}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  return {
    offers: deduped.sort((a, b) => a.price - b.price),
    source: `live · ${ok} provider${ok > 1 ? "s" : ""}`,
    providers: live.map((a) => a.name),
  };
}
