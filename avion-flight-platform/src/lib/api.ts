// API client — tries the aggregation backend first (/api/search aggregates
// Amadeus / Skyscanner / Kiwi / TravelPayouts / AviationStack adapters),
// then falls back to the in-browser fare engine so the UI never dead-ends.
import type { FlightOffer, SearchQuery } from "./types";
import { generateOffers } from "./fares";

export async function searchFlights(q: SearchQuery): Promise<{ offers: FlightOffer[]; source: string }> {
  try {
    const params = new URLSearchParams({
      from: q.from, to: q.to, depart: q.depart, trip: q.trip,
      pax: String(q.pax), cabin: q.cabin, ...(q.ret ? { ret: q.ret } : {}),
    });
    const res = await fetch(`/api/search?${params}`, { signal: AbortSignal.timeout(6000) });
    if (!res.ok) throw new Error(String(res.status));
    const data = await res.json();
    if (Array.isArray(data.offers) && data.offers.length) {
      return { offers: data.offers, source: data.source ?? "aggregator" };
    }
    throw new Error("empty");
  } catch {
    // simulate network latency so skeletons render meaningfully
    await new Promise((r) => setTimeout(r, 900));
    return { offers: generateOffers(q), source: "simulated" };
  }
}

export const inr = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);

export const fmtDur = (m: number) => `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, "0")}m`;
