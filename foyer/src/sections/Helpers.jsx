import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { HELPERS } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'

const ACCENT = {
  sky: 'bg-sky-wash text-royal-mid',
  sunset: 'bg-sunset-soft text-sunset-deep',
  sage: 'bg-sage-soft text-sage-deep',
  royal: 'bg-royal-soft text-royal-deep',
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 160, damping: 18 })
  const sry = useSpring(ry, { stiffness: 160, damping: 18 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 9)
    rx.set(((e.clientY - r.top) / r.height - 0.5) * -9)
  }
  const reset = () => {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Helpers() {
  return (
    <section id="helpers" className="wash-royal relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-royal-deep">Nº 06 — The Professionals</Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              The people behind the
              <span className="italic grad-text-royal"> shine.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">
              Background-checked, trained to the FOYER standard, and proud of their craft. Meet
              four of our 320.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {HELPERS.map((h, i) => (
            <motion.div key={h.name} variants={staggerItem} className={i % 2 === 1 ? 'lg:mt-10' : ''}>
              <TiltCard className="group h-full overflow-hidden rounded-[2rem] bg-ivory shadow-xl shadow-royal-deep/8">
                <div className="relative overflow-hidden">
                  <img
                    src={h.img}
                    alt={`${h.name}, ${h.role}`}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="glass absolute right-3 top-3 inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold">
                    <HiStar className="text-champagne" /> {h.rating}
                  </span>
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 ${ACCENT[h.tone]}`}
                  >
                    {h.role} · {h.exp}
                  </span>
                  <h3 className="mt-3 font-display text-2xl">{h.name}</h3>
                  <p className="mt-2 font-display text-sm italic leading-snug text-stone">
                    “{h.note}”
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
