// Deterministic fare engine — identical logic ships in /server/core/fares.js.
// The UI uses this as an instant fallback so the experience works even before
// the API layer (or real provider keys) is wired up.
import type { CabinClass, FlightOffer, SearchQuery } from "./types";
import { AIRLINES } from "./airlines";

const PROVIDERS = ["Amadeus", "Skyscanner", "Kiwi.com", "TravelPayouts", "AviationStack"];
const AIRCRAFT = ["A320neo", "A321neo", "B737 MAX 8", "A350-900", "B787-9", "A220-300"];

// Mulberry32 — seeded PRNG so the same search always returns the same fares.
function rng(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const hash = (s: string) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);

const CABIN_MULT: Record<CabinClass, number> = {
  Economy: 1, "Premium Economy": 1.7, Business: 3.4, First: 5.6,
};

const pad = (n: number) => String(n).padStart(2, "0");
const toHM = (mins: number) => `${pad(Math.floor(mins / 60) % 24)}:${pad(mins % 60)}`;

const ROUTE_BASE: Record<string, { base: number; dur: number; intl?: boolean }> = {
  "NAG-BLR": { base: 3450, dur: 105 }, "NAG-BOM": { base: 2900, dur: 85 },
  "NAG-DEL": { base: 3800, dur: 110 }, "NAG-HYD": { base: 2750, dur: 75 },
  "BLR-DEL": { base: 4600, dur: 165 }, "BOM-DEL": { base: 4200, dur: 130 },
  "DEL-DXB": { base: 14500, dur: 225, intl: true },
  "BOM-SIN": { base: 16800, dur: 330, intl: true },
  "DEL-LHR": { base: 38500, dur: 560, intl: true },
  "BLR-DOH": { base: 17200, dur: 280, intl: true },
};

function routeInfo(from: string, to: string) {
  return (
    ROUTE_BASE[`${from}-${to}`] ??
    ROUTE_BASE[`${to}-${from}`] ?? { base: 3600 + (Math.abs(hash(from + to)) % 2400), dur: 95 + (Math.abs(hash(to + from)) % 160) }
  );
}

export function generateOffers(q: SearchQuery): FlightOffer[] {
  const info = routeInfo(q.from, q.to);
  const seedKey = `${q.from}${q.to}${q.depart}${q.cabin}`;
  const rand = rng(hash(seedKey));
  const pool = AIRLINES.filter((a) => (info.intl ? true : !a.intl));
  const dayShift = 0.85 + (Math.abs(hash(q.depart)) % 40) / 100; // day-of-travel demand

  const offers: FlightOffer[] = [];
  const count = 9 + Math.floor(rand() * 4);

  for (let i = 0; i < count; i++) {
    const al = pool[Math.floor(rand() * pool.length)];
    const stops = (rand() < (info.intl ? 0.45 : 0.72) ? 0 : rand() < 0.85 ? 1 : 2) as 0 | 1 | 2;
    const depart = 5 * 60 + Math.floor(rand() * 17 * 60);
    const dur = Math.round(info.dur * (1 + stops * (0.42 + rand() * 0.3)));
    const demand = 0.86 + rand() * 0.55;
    const price = Math.round(
      (info.base * demand * dayShift * CABIN_MULT[q.cabin] * (stops === 0 ? 1.08 : 1)) / 10
    ) * 10;

    offers.push({
      id: `${al.code}${100 + Math.floor(rand() * 900)}-${i}`,
      airline: al.name,
      airlineCode: al.code,
      flightNo: `${al.code} ${100 + Math.floor(rand() * 900)}`,
      from: q.from,
      to: q.to,
      departTime: toHM(depart),
      arriveTime: toHM(depart + dur),
      durationMin: dur,
      stops,
      via: stops > 0 ? ["HYD", "BOM", "DEL", "MAA"][Math.floor(rand() * 4)] : undefined,
      cabin: q.cabin,
      price,
      provider: PROVIDERS[Math.floor(rand() * PROVIDERS.length)],
      rating: Math.round((al.rating - 0.2 + rand() * 0.4) * 10) / 10,
      baggage: q.cabin === "Economy" ? "15 kg + 7 kg cabin" : "30 kg + 10 kg cabin",
      aircraft: AIRCRAFT[Math.floor(rand() * AIRCRAFT.length)],
      greener: rand() < 0.25,
    });
  }
  return offers.sort((a, b) => a.price - b.price);
}

export function calendarFares(from: string, to: string, monthISO: string, cabin: CabinClass) {
  const [y, m] = monthISO.split("-").map(Number);
  const days = new Date(y, m, 0).getDate();
  const out: { date: string; price: number }[] = [];
  for (let d = 1; d <= days; d++) {
    const date = `${y}-${pad(m)}-${pad(d)}`;
    const offers = generateOffers({ from, to, depart: date, trip: "oneway", pax: 1, cabin });
    out.push({ date, price: offers[0]?.price ?? 0 });
  }
  return out;
}

export function predictTrend(q: SearchQuery) {
  const r = rng(hash(`${q.from}${q.to}${q.depart}trend`))();
  if (r < 0.4) return { dir: "rising" as const, pct: Math.round(4 + r * 18), note: "Fares on this route usually climb inside 14 days of departure." };
  if (r < 0.7) return { dir: "stable" as const, pct: Math.round(r * 4), note: "Fares are holding steady. Booking this week carries low risk." };
  return { dir: "falling" as const, pct: Math.round(3 + (1 - r) * 12), note: "A fare dip is likely — set an alert and wait 2–3 days." };
}
