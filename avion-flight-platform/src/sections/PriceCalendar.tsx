import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { calendarFares } from "../lib/fares";
import { inr } from "../lib/api";
import type { SearchQuery } from "../lib/types";

export default function PriceCalendar({ query }: { query: SearchQuery | null }) {
  const from = query?.from ?? "NAG";
  const to = query?.to ?? "BLR";
  const baseMonth = (query?.depart ?? new Date().toISOString().slice(0, 10)).slice(0, 7);
  const [month, setMonth] = useState(baseMonth);

  const fares = useMemo(() => calendarFares(from, to, month, query?.cabin ?? "Economy"), [from, to, month, query?.cabin]);
  const min = Math.min(...fares.map((f) => f.price));
  const max = Math.max(...fares.map((f) => f.price));
  const firstDow = new Date(`${month}-01T00:00:00`).getDay();

  const shiftMonth = (n: number) => {
    const [y, m] = month.split("-").map(Number);
    const d = new Date(y, m - 1 + n, 1);
    setMonth(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`);
  };

  const tone = (p: number) => {
    const t = (p - min) / Math.max(1, max - min);
    if (t < 0.25) return "bg-emer-soft text-emer-deep border-emer-mid/40";
    if (t < 0.6) return "bg-gold-soft text-gold-deep border-gold-mid/40";
    return "bg-white text-mist border-line";
  };

  return (
    <section id="calendar" className="scroll-mt-24 bg-gradient-to-b from-white via-gold-soft/60 to-white py-14 sm:py-20">
      <div className="container-x">
        <p className="eyebrow mb-3 text-gold-deep">04 — Fare calendar</p>
        <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
          The cheapest day, at a glance.
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          {from} → {to} lowest fares for every day of the month. Green is your friend.
        </p>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-8 rounded-panel p-4 shadow-float sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <button onClick={() => shiftMonth(-1)} className="tap rounded-pill border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-gold-mid" aria-label="Previous month">←</button>
            <p className="font-data text-sm font-bold uppercase tracking-[0.18em] text-ink">
              {new Date(`${month}-01T00:00:00`).toLocaleString("en-IN", { month: "long", year: "numeric" })}
            </p>
            <button onClick={() => shiftMonth(1)} className="tap rounded-pill border border-line bg-white px-4 py-2 text-sm font-semibold hover:border-gold-mid" aria-label="Next month">→</button>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center sm:gap-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i} className="eyebrow py-1">{d}</span>
            ))}
            {Array.from({ length: firstDow }).map((_, i) => <span key={`x${i}`} />)}
            {fares.map((f) => (
              <div key={f.date}
                className={`flex min-w-0 flex-col items-center rounded-xl border px-0.5 py-1.5 sm:rounded-2xl sm:py-2.5 ${tone(f.price)} ${f.price === min ? "ring-2 ring-emer-deep" : ""}`}>
                <span className="text-[11px] font-bold sm:text-sm">{Number(f.date.slice(-2))}</span>
                <span className="font-data text-[8px] leading-tight sm:text-[10px]">₹{(f.price / 1000).toFixed(1)}k</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs text-mist sm:text-sm">
            Best fare this month: <strong className="font-data text-emer-deep">{inr(min)}</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
