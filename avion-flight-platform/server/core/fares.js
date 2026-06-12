// Server-side mirror of src/lib/fares.ts — deterministic simulated fares used
// whenever no real provider keys are configured.
const AIRLINES = [
  { code: "6E", name: "IndiGo", rating: 4.3 },
  { code: "AI", name: "Air India", rating: 4.1 },
  { code: "QP", name: "Akasa Air", rating: 4.4 },
  { code: "SG", name: "SpiceJet", rating: 3.8 },
  { code: "UK", name: "Vistara", rating: 4.6 },
  { code: "EK", name: "Emirates", rating: 4.8, intl: true },
  { code: "QR", name: "Qatar Airways", rating: 4.9, intl: true },
  { code: "SQ", name: "Singapore Airlines", rating: 4.9, intl: true },
  { code: "EY", name: "Etihad Airways", rating: 4.5, intl: true },
  { code: "LH", name: "Lufthansa", rating: 4.4, intl: true },
];
const PROVIDERS = ["Amadeus", "Skyscanner", "Kiwi.com", "TravelPayouts", "AviationStack"];
const AIRCRAFT = ["A320neo", "A321neo", "B737 MAX 8", "A350-900", "B787-9", "A220-300"];
const CABIN_MULT = { Economy: 1, "Premium Economy": 1.7, Business: 3.4, First: 5.6 };
const ROUTE_BASE = {
  "NAG-BLR": { base: 3450, dur: 105 }, "NAG-BOM": { base: 2900, dur: 85 },
  "NAG-DEL": { base: 3800, dur: 110 }, "NAG-HYD": { base: 2750, dur: 75 },
  "BLR-DEL": { base: 4600, dur: 165 }, "BOM-DEL": { base: 4200, dur: 130 },
  "DEL-DXB": { base: 14500, dur: 225, intl: true },
  "BOM-SIN": { base: 16800, dur: 330, intl: true },
  "DEL-LHR": { base: 38500, dur: 560, intl: true },
  "BLR-DOH": { base: 17200, dur: 280, intl: true },
};

const hash = (s) => [...s].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7);
function rng(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const pad = (n) => String(n).padStart(2, "0");
const toHM = (m) => `${pad(Math.floor(m / 60) % 24)}:${pad(m % 60)}`;

export function generateOffers(q) {
  const info = ROUTE_BASE[`${q.from}-${q.to}`] ?? ROUTE_BASE[`${q.to}-${q.from}`] ??
    { base: 3600 + (Math.abs(hash(q.from + q.to)) % 2400), dur: 95 + (Math.abs(hash(q.to + q.from)) % 160) };
  const rand = rng(hash(`${q.from}${q.to}${q.depart}${q.cabin}`));
  const pool = AIRLINES.filter((a) => (info.intl ? true : !a.intl));
  const dayShift = 0.85 + (Math.abs(hash(q.depart)) % 40) / 100;
  const offers = [];
  const count = 9 + Math.floor(rand() * 4);
  for (let i = 0; i < count; i++) {
    const al = pool[Math.floor(rand() * pool.length)];
    const stops = rand() < (info.intl ? 0.45 : 0.72) ? 0 : rand() < 0.85 ? 1 : 2;
    const depart = 5 * 60 + Math.floor(rand() * 17 * 60);
    const dur = Math.round(info.dur * (1 + stops * (0.42 + rand() * 0.3)));
    const price = Math.round((info.base * (0.86 + rand() * 0.55) * dayShift * (CABIN_MULT[q.cabin] ?? 1) * (stops === 0 ? 1.08 : 1)) / 10) * 10;
    offers.push({
      id: `${al.code}${100 + Math.floor(rand() * 900)}-${i}`,
      airline: al.name, airlineCode: al.code,
      flightNo: `${al.code} ${100 + Math.floor(rand() * 900)}`,
      from: q.from, to: q.to,
      departTime: toHM(depart), arriveTime: toHM(depart + dur),
      durationMin: dur, stops,
      via: stops > 0 ? ["HYD", "BOM", "DEL", "MAA"][Math.floor(rand() * 4)] : undefined,
      cabin: q.cabin, price,
      provider: PROVIDERS[Math.floor(rand() * PROVIDERS.length)],
      rating: Math.round((al.rating - 0.2 + rand() * 0.4) * 10) / 10,
      baggage: q.cabin === "Economy" ? "15 kg + 7 kg cabin" : "30 kg + 10 kg cabin",
      aircraft: AIRCRAFT[Math.floor(rand() * AIRCRAFT.length)],
      greener: rand() < 0.25,
    });
  }
  return offers.sort((a, b) => a.price - b.price);
}
