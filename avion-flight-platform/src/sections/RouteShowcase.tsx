import { motion } from "framer-motion";
import RouteArc from "../components/RouteArc";
import { rise, viewportOnce } from "../lib/motion";

const WAYPOINTS = [
  { t: "06:10", label: "Wheels up, Nagpur", d: "Dr. Babasaheb Ambedkar Intl · Gate 4" },
  { t: "06:48", label: "Cruise, FL360", d: "Overhead Hyderabad corridor · 840 km/h" },
  { t: "07:55", label: "Touchdown, Bengaluru", d: "Kempegowda Intl · Terminal 2" },
];

export default function RouteShowcase() {
  return (
    <section id="routes" className="scroll-mt-24 bg-gradient-to-b from-white via-royal-soft/50 to-white py-14 sm:py-20">
      <div className="container-x">
        <p className="eyebrow mb-3 text-royal-deep">03 — Route intelligence</p>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
          Watch your route, before you fly it.
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          Every search renders the live corridor — distance, typical cruise time, and the airports worth switching to.
        </p>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <motion.div variants={rise} initial="hidden" whileInView="show" viewport={viewportOnce}
            className="glass rounded-panel p-6 shadow-float sm:p-8">
            <div className="flex items-baseline justify-between">
              <p className="font-data text-sm font-bold text-ink">NAG <span className="text-royal-deep">✈</span> BLR</p>
              <p className="font-data text-[11px] text-mist">812 km · 1h 45m typical</p>
            </div>
            <RouteArc from="NAG" to="BLR" tone="#1D4ED8" className="mt-2" />
            <div className="mt-2 grid grid-cols-3 gap-3 border-t border-line pt-4 text-center">
              {[["38", "flights / day"], ["₹3,210", "lowest this month"], ["92%", "on-time rate"]].map(([v, k]) => (
                <div key={k} className="min-w-0">
                  <p className="font-data text-base font-bold text-ink sm:text-lg">{v}</p>
                  <p className="text-[10px] uppercase tracking-wider text-mist">{k}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <ol className="relative space-y-0 border-l-2 border-royal-mid/30 pl-6">
            {WAYPOINTS.map((w, i) => (
              <motion.li key={w.t} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewportOnce}
                className="relative pb-8 last:pb-0">
                <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-white bg-royal-deep shadow-card" />
                <p className="font-data text-sm font-bold text-royal-deep">{w.t}</p>
                <p className="mt-0.5 font-semibold text-ink">{w.label}</p>
                <p className="text-sm text-mist">{w.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
