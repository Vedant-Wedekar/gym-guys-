import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { EXPERTS } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'

const ACCENT = {
  lavender: 'text-lavender-deep bg-lavender-soft',
  emerald: 'text-emerald-deep bg-emerald-soft',
  sunset: 'text-sunset-deep bg-sunset-soft',
  sky: 'text-ocean-mid bg-sky-wash',
}

function TiltCard({ children, className = '' }) {
  const ref = useRef(null)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const srx = useSpring(rx, { stiffness: 160, damping: 18 })
  const sry = useSpring(ry, { stiffness: 160, damping: 18 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10)
    rx.set(((e.clientY - r.top) / r.height - 0.5) * -10)
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

export default function Experts() {
  return (
    <section id="experts" className="wash-ocean relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-ocean-deep">Nº 05 — The People</Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
              Guided by hands you can{' '}
              <span className="italic grad-text-ocean">trust.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">
              Thirty-eight certified specialists — clinicians, coaches and teachers — who know
              your name by the second visit.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
          {EXPERTS.map((e, i) => (
            <motion.div key={e.name} variants={staggerItem} className={i % 2 === 1 ? 'lg:mt-10' : ''}>
              <TiltCard className="group h-full overflow-hidden rounded-[2rem] bg-ivory shadow-xl shadow-ocean-deep/8">
                <div className="overflow-hidden">
                  <img
                    src={e.img}
                    alt={`${e.name}, ${e.role}`}
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 ${ACCENT[e.tone]}`}
                  >
                    {e.role}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium">{e.name}</h3>
                  <p className="mt-2 font-display text-sm italic leading-snug text-stone">
                    “{e.note}”
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
