import { motion } from "framer-motion";
import { FiNavigation, FiSun, FiFileText, FiCompass, FiCloudRain, FiWind } from "react-icons/fi";
import { stagger, rise, viewportOnce } from "../lib/motion";

function TrackerCard() {
  return (
    <motion.div variants={rise} className="rounded-panel border border-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-soft text-sky-deep"><FiNavigation size={18} /></span>
        <div>
          <p className="font-semibold text-ink">Flight tracker</p>
          <p className="text-xs text-mist">Live status, gate to gate</p>
        </div>
        <span className="ml-auto flex items-center gap-1.5 rounded-pill bg-emer-soft px-3 py-1 text-[11px] font-bold text-emer-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-emer-deep pulse-dot" /> LIVE
        </span>
      </div>
      <div className="mt-4 rounded-2xl bg-gradient-to-br from-sky-soft to-white p-4">
        <div className="flex items-baseline justify-between font-data">
          <span className="text-sm font-bold text-ink">6E 412</span>
          <span className="text-[11px] text-mist">A320neo · FL360</span>
        </div>
        <div className="relative mt-3 h-[3px] rounded-full bg-line">
          <motion.span initial={{ width: "0%" }} whileInView={{ width: "64%" }} viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-sky-mid to-sky-deep" />
          <span className="absolute -top-[5px] left-[64%] h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white bg-sky-deep shadow-card" />
        </div>
        <div className="mt-2.5 flex justify-between font-data text-[11px] text-mist">
          <span>NAG 06:10</span><span className="font-bold text-sky-deep">64% · on time</span><span>BLR 07:55</span>
        </div>
      </div>
    </motion.div>
  );
}

function WeatherCard() {
  return (
    <motion.div variants={rise} className="rounded-panel border border-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-soft text-gold-deep"><FiSun size={18} /></span>
        <div>
          <p className="font-semibold text-ink">Destination weather</p>
          <p className="text-xs text-mist">Bengaluru · next 3 days</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {[
          { d: "Thu", t: "27°", icon: <FiSun /> },
          { d: "Fri", t: "24°", icon: <FiCloudRain /> },
          { d: "Sat", t: "26°", icon: <FiWind /> },
        ].map((w) => (
          <div key={w.d} className="rounded-2xl bg-gradient-to-b from-gold-soft/60 to-white p-3 text-center">
            <p className="eyebrow">{w.d}</p>
            <p className="mx-auto my-1.5 w-fit text-gold-deep">{w.icon}</p>
            <p className="font-data text-lg font-bold text-ink">{w.t}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function VisaCard() {
  return (
    <motion.div variants={rise} className="rounded-panel border border-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-royal-soft text-royal-deep"><FiFileText size={18} /></span>
        <div>
          <p className="font-semibold text-ink">Visa & entry rules</p>
          <p className="text-xs text-mist">For Indian passport holders</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2.5">
        {[
          ["Dubai · UAE", "Visa on arrival / e-visa, 14–60 days"],
          ["Singapore", "e-Visa required, ~3 working days"],
          ["Doha · Qatar", "Visa free, up to 30 days"],
        ].map(([place, rule]) => (
          <li key={place} className="flex items-start justify-between gap-3 rounded-2xl bg-royal-soft/50 px-3.5 py-2.5">
            <span className="text-sm font-semibold text-ink">{place}</span>
            <span className="text-right text-xs text-mist">{rule}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-mist">Indicative only — always confirm with the embassy before travel.</p>
    </motion.div>
  );
}

function GuideCard() {
  return (
    <motion.div variants={rise} className="rounded-panel border border-line bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emer-soft text-emer-deep"><FiCompass size={18} /></span>
        <div>
          <p className="font-semibold text-ink">Travel guides</p>
          <p className="text-xs text-mist">48 hours, done right</p>
        </div>
      </div>
      <div className="mt-4 space-y-2.5">
        {[
          ["Bengaluru in 48 hours", "Cubbon Park mornings, MTR dosas, Church Street nights"],
          ["Goa beyond the beaches", "Fontainhas walks, Divar island ferries, spice farms"],
          ["Dubai on a budget", "Old Souk abras, Al Fahidi, Kite Beach sunsets"],
        ].map(([t, d]) => (
          <a key={t} href="#search" className="block rounded-2xl border border-line p-3.5 transition hover:border-emer-mid hover:bg-emer-soft/40">
            <p className="text-sm font-semibold text-ink">{t}</p>
            <p className="mt-0.5 text-xs text-mist">{d}</p>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default function Intelligence() {
  return (
    <section id="intel" className="scroll-mt-24 bg-white py-14 sm:py-20">
      <div className="container-x">
        <p className="eyebrow mb-3 text-sky-deep">06 — Travel intelligence</p>
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tightest text-ink sm:text-4xl">
          An operating system, not a booking form.
        </h2>
        <p className="mt-3 max-w-xl text-mist">
          Tracking, weather, entry rules and ground intel — the things you'd normally open six tabs for, in one console.
        </p>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          <TrackerCard />
          <WeatherCard />
          <VisaCard />
          <GuideCard />
        </motion.div>
      </div>
    </section>
  );
}
