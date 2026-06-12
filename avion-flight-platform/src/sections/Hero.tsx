import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchPanel from "../components/SearchPanel";
import type { SearchQuery } from "../lib/types";

const STATS = [
  { k: "providers scanned", v: "10+" },
  { k: "routes indexed", v: "48,210" },
  { k: "avg. fare saving", v: "23%" },
  { k: "live fare checks / min", v: "1,142" },
];

/** Ambient route-map backdrop: drifting great-circle arcs + waypoint dots. */
function MapField() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 700" aria-hidden>
      <defs>
        <linearGradient id="arcSky" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#38BDF8" stopOpacity="0" />
          <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.55" />
          <stop offset="1" stopColor="#0284C7" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="heroWash" cx="0.5" cy="0.1" r="0.9">
          <stop offset="0" stopColor="#E6F4FD" />
          <stop offset="1" stopColor="#FFFFFF" />
        </radialGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#heroWash)" />
      {[
        "M -50 520 Q 300 240 700 380 T 1280 300",
        "M -50 320 Q 420 80 860 260 T 1280 180",
        "M -50 640 Q 500 460 900 560 T 1280 480",
      ].map((d, i) => (
        <g key={i}>
          <path d={d} stroke="#0284C7" strokeOpacity="0.07" strokeWidth="1.5" fill="none" />
          <path d={d} stroke="url(#arcSky)" strokeWidth="1.5" fill="none" strokeDasharray="6 10" className="route-dash" style={{ animationDuration: `${2 + i * 0.7}s` }} />
        </g>
      ))}
      {[[180, 470], [640, 350], [980, 250], [420, 180], [820, 560]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#0284C7" opacity="0.5" className="pulse-dot" style={{ animationDelay: `${i * 0.45}s` }} />
      ))}
    </svg>
  );
}

function FlapStat({ v, k, delay }: { v: string; k: string; delay: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className="min-w-0">
      <div className="flap font-data text-xl font-bold text-ink sm:text-2xl">
        {show && v.split("").map((c, i) => (
          <span key={i} style={{ animationDelay: `${i * 55}ms` }}>{c}</span>
        ))}
        {!show && <span className="opacity-0">{v}</span>}
      </div>
      <div className="eyebrow mt-1">{k}</div>
    </div>
  );
}

export default function Hero({ onSearch, busy }: { onSearch: (q: SearchQuery) => void; busy: boolean }) {
  return (
    <section id="top" className="relative overflow-x-clip pb-16 pt-[104px] sm:pt-[128px]">
      <MapField />
      <div className="container-x relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="eyebrow mb-4 flex items-center gap-2"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emer-mid pulse-dot" />
          Live · scanning Amadeus, Skyscanner, Kiwi, TravelPayouts
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl font-display text-[2.6rem] font-bold leading-[1.02] tracking-tightest text-ink sm:text-6xl lg:text-7xl"
        >
          Every airline.
          <br />
          One departure board.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg"
        >
          AVION compares live fares across IndiGo, Air India, Akasa, Vistara, Emirates, Qatar Airways and more —
          then tells you when to book, not just where.
        </motion.p>

        <div className="mt-9">
          <SearchPanel onSearch={onSearch} busy={busy} />
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((s, i) => <FlapStat key={s.k} v={s.v} k={s.k} delay={900 + i * 220} />)}
        </div>
      </div>
    </section>
  );
}
