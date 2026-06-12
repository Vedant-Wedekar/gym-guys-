import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiSliders, FiTrendingUp, FiTrendingDown, FiMinus, FiBell } from "react-icons/fi";
import FlightCard from "../components/FlightCard";
import SkeletonCard from "../components/Skeleton";
import { AIRLINES } from "../lib/airlines";
import { findAirport, NEARBY } from "../lib/airports";
import { predictTrend } from "../lib/fares";
import { inr } from "../lib/api";
import type { Filters, FlightOffer, SearchQuery, SortKey } from "../lib/types";

const SORTS: { key: SortKey; label: string }[] = [
  { key: "cheapest", label: "Cheapest" },
  { key: "fastest", label: "Fastest" },
  { key: "recommended", label: "Recommended" },
  { key: "stops", label: "Fewest stops" },
  { key: "rating", label: "Best rated" },
];

const DEFAULT_FILTERS: Filters = { timeOfDay: "any", nonStopOnly: false, airlines: [], maxPrice: 999999, maxDurationMin: 9999 };

function applyAll(offers: FlightOffer[], sort: SortKey, f: Filters) {
  let out = offers.filter((o) => {
    const h = Number(o.departTime.slice(0, 2));
    if (f.timeOfDay === "morning" && !(h >= 5 && h < 12)) return false;
    if (f.timeOfDay === "evening" && !(h >= 17 && h <= 23)) return false;
    if (f.nonStopOnly && o.stops !== 0) return false;
    if (f.airlines.length && !f.airlines.includes(o.airlineCode)) return false;
    if (o.price > f.maxPrice || o.durationMin > f.maxDurationMin) return false;
    return true;
  });
  const score = (o: FlightOffer) => o.price / 1000 + o.durationMin / 30 + o.stops * 3 - o.rating * 2;
  switch (sort) {
    case "cheapest": out = out.sort((a, b) => a.price - b.price); break;
    case "fastest": out = out.sort((a, b) => a.durationMin - b.durationMin); break;
    case "stops": out = out.sort((a, b) => a.stops - b.stops || a.price - b.price); break;
    case "rating": out = out.sort((a, b) => b.rating - a.rating); break;
    default: out = out.sort((a, b) => score(a) - score(b));
  }
  return out;
}

interface Props { query: SearchQuery | null; offers: FlightOffer[]; loading: boolean; source: string; }

export default function Results({ query, offers, loading, source }: Props) {
  const [sort, setSort] = useState<SortKey>("cheapest");
  const [filters, setFilters] = useState<Filters>(DEFAULT_FILTERS);
  const [showFilters, setShowFilters] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  const [email, setEmail] = useState("");

  const visible = useMemo(() => applyAll(offers, sort, filters), [offers, sort, filters]);
  const minPrice = offers.length ? Math.min(...offers.map((o) => o.price)) : 0;
  const trend = query ? predictTrend(query) : null;

  if (!query && !loading) return null;
  const fromA = query ? findAirport(query.from) : null;
  const toA = query ? findAirport(query.to) : null;
  const nearby = query ? (NEARBY[query.to] ?? []) : [];

  const toggleAirline = (code: string) =>
    setFilters((f) => ({ ...f, airlines: f.airlines.includes(code) ? f.airlines.filter((c) => c !== code) : [...f.airlines, code] }));

  const chip = (active: boolean) =>
    `tap rounded-pill border px-3.5 py-2 text-xs font-semibold transition sm:text-sm ${active ? "border-emer-deep bg-emer-deep text-white" : "border-line bg-white text-mist hover:text-ink"}`;

  return (
    <section id="results" className="relative scroll-mt-24 bg-gradient-to-b from-white via-emer-soft/40 to-white py-14 sm:py-20">
      <div className="container-x">
        <p className="eyebrow mb-3 text-emer-deep">02 — Compare</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
            {fromA?.city ?? "—"} <span className="text-emer-deep">→</span> {toA?.city ?? "—"}
          </h2>
          {query && (
            <p className="font-data text-xs text-mist sm:text-sm">
              {query.depart}{query.ret ? ` · return ${query.ret}` : ""} · {query.pax} pax · {query.cabin}
              <span className="ml-2 rounded-pill bg-white px-2 py-0.5 text-[10px] uppercase tracking-wider text-emer-deep border border-emer-mid/30">{source}</span>
            </p>
          )}
        </div>

        {/* price prediction strip */}
        {trend && !loading && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            className="glass mt-6 flex flex-col gap-3 rounded-panel p-4 shadow-card sm:flex-row sm:items-center sm:gap-5 sm:p-5">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white ${trend.dir === "rising" ? "bg-flame-deep" : trend.dir === "falling" ? "bg-emer-deep" : "bg-royal-deep"}`}>
              {trend.dir === "rising" ? <FiTrendingUp size={20} /> : trend.dir === "falling" ? <FiTrendingDown size={20} /> : <FiMinus size={20} />}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">
                Price prediction: {trend.dir === "rising" ? `likely to rise ~${trend.pct}%` : trend.dir === "falling" ? `may drop ~${trend.pct}%` : "stable"}
              </p>
              <p className="text-[13px] text-mist">{trend.note}</p>
            </div>
            {!alertOn ? (
              <div className="flex w-full gap-2 sm:w-auto">
                <input
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com" aria-label="Email for fare alerts"
                  className="tap min-w-0 flex-1 rounded-pill border border-line bg-white px-4 text-sm outline-none focus:border-emer-mid sm:w-52"
                />
                <button onClick={() => email.includes("@") && setAlertOn(true)}
                  className="tap flex shrink-0 items-center gap-1.5 rounded-pill bg-ink px-4 py-2.5 text-sm font-semibold text-white">
                  <FiBell size={14} /> Alert me
                </button>
              </div>
            ) : (
              <p className="rounded-pill bg-emer-soft px-4 py-2.5 text-sm font-semibold text-emer-deep">Fare alert active ✓</p>
            )}
          </motion.div>
        )}

        {/* sort + filter bar */}
        <div className="sticky top-[70px] z-30 -mx-4 mt-6 px-4 sm:mx-0 sm:px-0">
          <div className="glass flex items-center gap-2 overflow-x-auto rounded-pill p-1.5 shadow-card [scrollbar-width:none]">
            {SORTS.map((s) => (
              <button key={s.key} onClick={() => setSort(s.key)}
                className={`tap shrink-0 rounded-pill px-4 py-2 text-xs font-semibold transition sm:text-sm ${sort === s.key ? "bg-ink text-white" : "text-mist hover:text-ink"}`}>
                {s.label}
              </button>
            ))}
            <button onClick={() => setShowFilters((v) => !v)} aria-expanded={showFilters}
              className={`tap ml-auto flex shrink-0 items-center gap-1.5 rounded-pill px-4 py-2 text-xs font-semibold sm:text-sm ${showFilters ? "bg-emer-deep text-white" : "text-mist hover:text-ink"}`}>
              <FiSliders size={14} /> Filters
            </button>
          </div>
        </div>

        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden">
              <div className="mt-4 rounded-panel border border-line bg-white p-4 shadow-card sm:p-5">
                <div className="flex flex-wrap gap-2">
                  <button className={chip(filters.timeOfDay === "morning")} onClick={() => setFilters((f) => ({ ...f, timeOfDay: f.timeOfDay === "morning" ? "any" : "morning" }))}>Morning</button>
                  <button className={chip(filters.timeOfDay === "evening")} onClick={() => setFilters((f) => ({ ...f, timeOfDay: f.timeOfDay === "evening" ? "any" : "evening" }))}>Evening</button>
                  <button className={chip(filters.nonStopOnly)} onClick={() => setFilters((f) => ({ ...f, nonStopOnly: !f.nonStopOnly }))}>Non-stop only</button>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {AIRLINES.map((a) => (
                    <button key={a.code} className={chip(filters.airlines.includes(a.code))} onClick={() => toggleAirline(a.code)}>{a.name}</button>
                  ))}
                </div>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="field-label" htmlFor="maxPrice">Max price — {filters.maxPrice > 90000 ? "any" : inr(filters.maxPrice)}</label>
                    <input id="maxPrice" type="range" min={1500} max={100000} step={500}
                      value={Math.min(filters.maxPrice, 100000)}
                      onChange={(e) => setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))}
                      className="w-full accent-emer-deep" />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="maxDur">Max duration — {filters.maxDurationMin > 1400 ? "any" : `${Math.round(filters.maxDurationMin / 60)}h`}</label>
                    <input id="maxDur" type="range" min={60} max={1440} step={30}
                      value={Math.min(filters.maxDurationMin, 1440)}
                      onChange={(e) => setFilters((f) => ({ ...f, maxDurationMin: Number(e.target.value) }))}
                      className="w-full accent-emer-deep" />
                  </div>
                </div>
                <button onClick={() => setFilters(DEFAULT_FILTERS)} className="tap mt-4 text-sm font-semibold text-emer-deep underline-offset-4 hover:underline">
                  Reset all filters
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* cards */}
        <div className="mt-6 grid grid-cols-1 gap-4">
          {loading && Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)}
          {!loading && visible.map((o, i) => (
            <FlightCard key={o.id} offer={o} index={Math.min(i, 6)} cheapest={o.price === minPrice} pax={query?.pax ?? 1} />
          ))}
          {!loading && query && visible.length === 0 && (
            <div className="rounded-panel border border-line bg-white p-10 text-center shadow-card">
              <p className="font-display text-xl font-bold text-ink">No flights match these filters</p>
              <p className="mt-2 text-sm text-mist">Widen the price or duration range, or reset filters to see all {offers.length} results.</p>
              <button onClick={() => setFilters(DEFAULT_FILTERS)} className="tap mt-5 rounded-pill bg-ink px-6 py-3 text-sm font-semibold text-white">Reset filters</button>
            </div>
          )}
        </div>

        {/* nearby airports */}
        {!loading && nearby.length > 0 && (
          <div className="mt-8">
            <p className="eyebrow mb-3">Nearby alternatives to {toA?.city}</p>
            <div className="flex flex-wrap gap-2">
              {nearby.map((c) => {
                const a = findAirport(c);
                return (
                  <span key={c} className="rounded-pill border border-line bg-white px-4 py-2 text-sm text-ink shadow-card">
                    {a.city} <span className="font-data text-mist">· {c}</span>
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
