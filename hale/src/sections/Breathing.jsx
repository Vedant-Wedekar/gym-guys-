import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { BREATHING } from '../data/content'
import { Eyebrow, FadeUp } from '../components/ui/motion'

export default function Breathing() {
  const ref = useRef(null)
  const inView = useInView(ref, { margin: '-25%' })
  const [phase, setPhase] = useState(0)
  const [round, setRound] = useState(1)
  const current = BREATHING.phases[phase]

  // cycle phases only while in view
  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => {
      setPhase((p) => {
        const next = (p + 1) % BREATHING.phases.length
        if (next === 0) setRound((r) => (r % 3) + 1)
        return next
      })
    }, current.secs * 1000)
    return () => clearTimeout(t)
  }, [phase, inView, current.secs])

  // circle scale per phase: in → grow, hold → stay, out → shrink
  const scaleTarget = phase === 0 ? 1.35 : phase === 1 ? 1.35 : 1

  return (
    <section ref={ref} className="wash-lavender relative overflow-hidden pb-24 pt-20 md:pb-32 md:pt-28">
      {/* drifting blobs */}
      <div className="pointer-events-none absolute left-10 top-16 h-56 w-56 animate-blob bg-lavender-soft blur-2xl" />
      <div
        className="pointer-events-none absolute bottom-10 right-8 h-64 w-64 animate-blob bg-sky-wash blur-2xl"
        style={{ animationDelay: '-8s' }}
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <Eyebrow className="justify-center text-lavender-deep">{BREATHING.eyebrow}</Eyebrow>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
            Breathe with <span className="italic grad-text-lavender">this page.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">{BREATHING.sub}</p>
        </FadeUp>

        {/* the breathing circle */}
        <FadeUp delay={0.3}>
          <div className="relative mx-auto mt-14 grid h-64 w-64 place-items-center md:h-72 md:w-72">
            {/* ripple rings */}
            {[0, 1].map((i) => (
              <motion.span
                key={i}
                className="absolute inset-0 rounded-full border border-lavender-mid/35"
                animate={{ scale: [1, 1.45], opacity: [0.5, 0] }}
                transition={{
                  duration: 4,
                  delay: i * 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}

            <motion.div
              className="grid h-44 w-44 place-items-center rounded-full bg-gradient-to-br from-lavender-mid via-sky-tone to-mint-mid shadow-2xl shadow-lavender-deep/20 md:h-52 md:w-52"
              animate={{ scale: scaleTarget }}
              transition={{ duration: current.secs, ease: 'easeInOut' }}
            >
              <div className="grid h-[88%] w-[88%] place-items-center rounded-full bg-ivory/85 backdrop-blur">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={phase}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                  >
                    <p className="font-display text-2xl italic text-lavender-deep md:text-3xl">
                      {current.label}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest2 text-stone">
                      {current.secs} counts · round {round} of 3
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-12 font-display text-lg italic text-stone">
            That's it. That's the whole trick — and it's free, forever.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
