import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { rise, viewportOnce } from "../lib/motion";

// Unsplash CDN imagery — swap with licensed/owned photography before launch.
const ROUTES = [
  { from: "Nagpur", to: "Bengaluru", code: "NAG → BLR", price: "₹3,210", img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=70", tag: "Trending" },
  { from: "Mumbai", to: "Dubai", code: "BOM → DXB", price: "₹13,940", img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=70", tag: "International" },
  { from: "Delhi", to: "Singapore", code: "DEL → SIN", price: "₹16,420", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=70", tag: "Long haul" },
  { from: "Bengaluru", to: "Goa", code: "BLR → GOI", price: "₹2,780", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=70", tag: "Weekend" },
  { from: "Delhi", to: "London", code: "DEL → LHR", price: "₹37,900", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=70", tag: "Premium" },
  { from: "Hyderabad", to: "Doha", code: "HYD → DOH", price: "₹15,360", img: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=70", tag: "Gulf" },
];

export default function PopularRoutes() {
  return (
    <section className="overflow-x-clip bg-gradient-to-b from-white via-flame-soft/50 to-white py-14 sm:py-20">
      <div className="container-x">
        <p className="eyebrow mb-3 text-flame-deep">05 — Departures board</p>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">Where everyone's flying.</h2>
          <p className="hidden font-data text-xs text-mist sm:block">drag / scroll →</p>
        </div>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:px-[max(2rem,calc((100vw-72rem)/2))] [scrollbar-width:none]">
        {ROUTES.map((r, i) => (
          <motion.a
            key={r.code} href="#search"
            variants={rise} custom={Math.min(i, 4)} initial="hidden" whileInView="show" viewport={viewportOnce}
            whileHover={{ y: -6 }}
            className="group relative w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-panel shadow-card sm:w-[300px]"
          >
            <img src={r.img} alt={`${r.from} to ${r.to}`} loading="lazy" decoding="async"
              className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <span className="absolute left-4 top-4 rounded-pill bg-white/90 px-3 py-1 font-data text-[10px] font-bold uppercase tracking-[0.15em] text-ink">{r.tag}</span>
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <p className="font-data text-[11px] uppercase tracking-[0.2em] text-white/70">{r.code}</p>
              <p className="mt-1 font-display text-xl font-bold">{r.from} → {r.to}</p>
              <div className="mt-2 flex items-center justify-between">
                <p className="font-data text-sm">from <span className="text-base font-bold">{r.price}</span></p>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-transform group-hover:rotate-45">
                  <FiArrowUpRight size={16} />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
