import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { PROCESS, ESTIMATOR } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, Magnetic } from '../components/ui/motion'

const CHIP = {
  sky: 'border-sky-tone bg-sky-wash text-royal-mid',
  sunset: 'border-sunset-mid bg-sunset-soft text-sunset-deep',
  sage: 'border-sage-mid bg-sage-soft text-sage-deep',
  emerald: 'border-emerald-mid bg-emerald-soft text-emerald-deep',
  sand: 'border-sand-mid bg-sand-soft text-sand-deep',
}

function Estimator() {
  const [service, setService] = useState(ESTIMATOR.services[0])
  const [hours, setHours] = useState(3)
  const total = service.rate * hours

  return (
    <div className="glass rounded-[2rem] p-6 md:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-widest2 text-sage-deep">
        Try it — build a booking
      </p>

      {/* service chips */}
      <div className="mt-5 flex flex-wrap gap-2">
        {ESTIMATOR.services.map((s) => (
          <button
            key={s.name}
            onClick={() => setService(s)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
              service.name === s.name
                ? CHIP[s.tone]
                : 'border-ink/10 bg-ivory text-stone hover:border-ink/25'
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* hours slider */}
      <div className="mt-7">
        <div className="flex items-baseline justify-between">
          <label htmlFor="hours" className="text-sm font-medium">
            Hours of help
          </label>
          <span className="font-display text-2xl">
            {hours} {hours === 1 ? 'hour' : 'hours'}
          </span>
        </div>
        <input
          id="hours"
          type="range"
          min={ESTIMATOR.minHours}
          max={ESTIMATOR.maxHours}
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-ink/10 accent-emerald-mid"
          aria-label="Hours of help"
        />
        <div className="mt-1.5 flex justify-between text-[11px] text-stone">
          <span>{ESTIMATOR.minHours} hr</span>
          <span>{ESTIMATOR.maxHours} hrs</span>
        </div>
      </div>

      {/* live total */}
      <div className="mt-7 flex flex-wrap items-end justify-between gap-4 rounded-2xl bg-ivory/80 p-5">
        <div>
          <p className="text-[10px] uppercase tracking-widest2 text-stone">Estimated total</p>
          <motion.p
            key={total}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-4xl md:text-5xl"
          >
            ₹{total.toLocaleString('en-IN')}
          </motion.p>
          <p className="mt-1 text-xs text-stone">
            {service.name} · ₹{service.rate}/hr · all supplies included
          </p>
        </div>
        <Magnetic>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep"
          >
            Continue booking
            <HiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </Magnetic>
      </div>
    </div>
  )
}

export default function Process() {
  return (
    <section id="process" className="wash-sage relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-sage-deep">Nº 04 — How It Works</Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              Ninety seconds to book.
              <br />
              <span className="italic text-sage-deep">A lifetime of Saturdays back.</span>
            </h2>
          </FadeUp>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* timeline */}
          <Stagger className="relative" gap={0.15}>
            <span className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-sage-deep/20" />
            {PROCESS.map((p) => (
              <motion.div key={p.step} variants={staggerItem} className="relative flex gap-6 pb-10 last:pb-0">
                <span className="relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-sage-deep/20 bg-ivory font-display text-sm italic text-sage-deep">
                  {p.step}
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-stone">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>

          {/* interactive estimator */}
          <FadeUp delay={0.2}>
            <Estimator />
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
