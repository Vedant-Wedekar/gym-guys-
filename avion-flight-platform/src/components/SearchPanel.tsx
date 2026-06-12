import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiRepeat } from "react-icons/fi";
import { AIRPORTS } from "../lib/airports";
import type { CabinClass, SearchQuery, TripType } from "../lib/types";

const CABINS: CabinClass[] = ["Economy", "Premium Economy", "Business", "First"];
const todayISO = () => new Date().toISOString().slice(0, 10);
const plusDays = (d: number) => new Date(Date.now() + d * 864e5).toISOString().slice(0, 10);

export default function SearchPanel({ onSearch, busy }: { onSearch: (q: SearchQuery) => void; busy: boolean }) {
  const [from, setFrom] = useState("NAG");
  const [to, setTo] = useState("BLR");
  const [trip, setTrip] = useState<TripType>("oneway");
  const [depart, setDepart] = useState(plusDays(14));
  const [ret, setRet] = useState(plusDays(18));
  const [pax, setPax] = useState(2);
  const [cabin, setCabin] = useState<CabinClass>("Economy");
  const [err, setErr] = useState("");

  const swap = () => { setFrom(to); setTo(from); };

  const submit = () => {
    if (from === to) { setErr("Choose two different airports to compare fares."); return; }
    setErr("");
    onSearch({ from, to, depart, ret: trip === "round" ? ret : undefined, trip, pax, cabin });
  };

  const selectCls = "tap w-full rounded-2xl border border-line bg-white/80 px-3.5 py-3 text-sm font-medium text-ink outline-none transition focus:border-sky-mid focus:ring-2 focus:ring-sky-soft";

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="glass relative rounded-panel p-4 shadow-float sm:p-6"
      id="search"
    >
      {/* trip type */}
      <div className="mb-4 inline-flex rounded-pill border border-line bg-white p-1" role="tablist" aria-label="Trip type">
        {(["oneway", "round"] as TripType[]).map((t) => (
          <button
            key={t} role="tab" aria-selected={trip === t}
            onClick={() => setTrip(t)}
            className={`tap rounded-pill px-4 py-2 text-xs font-semibold transition sm:text-sm ${trip === t ? "bg-ink text-white" : "text-mist hover:text-ink"}`}
          >
            {t === "oneway" ? "One way" : "Round trip"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-3">
          <label className="field-label" htmlFor="from">From</label>
          <select id="from" className={selectCls} value={from} onChange={(e) => setFrom(e.target.value)}>
            {AIRPORTS.map((a) => <option key={a.code} value={a.code}>{a.city} · {a.code}</option>)}
          </select>
        </div>

        <div className="relative min-w-0 lg:col-span-3">
          <label className="field-label" htmlFor="to">Destination</label>
          <select id="to" className={selectCls} value={to} onChange={(e) => setTo(e.target.value)}>
            {AIRPORTS.map((a) => <option key={a.code} value={a.code}>{a.city} · {a.code}</option>)}
          </select>
          <button
            onClick={swap} aria-label="Swap origin and destination"
            className="absolute -left-1.5 top-1/2 hidden h-9 w-9 -translate-x-full items-center justify-center rounded-full border border-line bg-white text-mist shadow-card transition hover:rotate-180 hover:text-ink lg:flex"
            style={{ transitionDuration: "400ms" }}
          >
            <FiRepeat size={14} />
          </button>
        </div>

        <div className="min-w-0 lg:col-span-2">
          <label className="field-label" htmlFor="depart">Departure</label>
          <input id="depart" type="date" min={todayISO()} className={selectCls} value={depart} onChange={(e) => setDepart(e.target.value)} />
        </div>

        {trip === "round" && (
          <div className="min-w-0 lg:col-span-2">
            <label className="field-label" htmlFor="ret">Return</label>
            <input id="ret" type="date" min={depart} className={selectCls} value={ret} onChange={(e) => setRet(e.target.value)} />
          </div>
        )}

        <div className={`min-w-0 ${trip === "round" ? "lg:col-span-1" : "lg:col-span-2"}`}>
          <label className="field-label" htmlFor="pax">Passengers</label>
          <select id="pax" className={selectCls} value={pax} onChange={(e) => setPax(Number(e.target.value))}>
            {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} {n === 1 ? "adult" : "adults"}</option>)}
          </select>
        </div>

        <div className={`min-w-0 ${trip === "round" ? "lg:col-span-1" : "lg:col-span-2"}`}>
          <label className="field-label" htmlFor="cabin">Class</label>
          <select id="cabin" className={selectCls} value={cabin} onChange={(e) => setCabin(e.target.value as CabinClass)}>
            {CABINS.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
      </div>

      {err && <p className="mt-3 text-sm font-medium text-flame-deep">{err}</p>}

      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={submit}
        disabled={busy}
        className="tap mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-deep to-sky-mid px-6 py-4 text-base font-semibold text-white shadow-glow transition hover:brightness-105 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        <FiSearch size={18} />
        {busy ? "Scanning providers…" : "Search flights"}
      </motion.button>
    </motion.div>
  );
}
