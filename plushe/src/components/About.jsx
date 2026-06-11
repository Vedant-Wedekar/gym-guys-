import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiHeart, FiFeather, FiGlobe } from 'react-icons/fi'
import { SectionHeading, Reveal } from './Reveal'
import PlushieArt from './PlushieArt'
import { useReducedMotion } from '../hooks/useUtils'

function Counter({ to, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduced = useReducedMotion()
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) { setVal(to); return }
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, duration, reduced])

  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>
}

const stats = [
  { to: 12000, suffix: '+', label: 'Happy homes' },
  { to: 48, suffix: '', label: 'Signature characters' },
  { to: 100, suffix: '%', label: 'Recycled fill' },
  { to: 30, suffix: '-day', label: 'Easy returns' },
]

const values = [
  { Icon: FiFeather, title: 'Heirloom-soft', desc: 'Triple-brushed microfiber, weighted to hug back.' },
  { Icon: FiGlobe, title: 'Kind to Earth', desc: 'Recycled fill, OEKO-TEX fabrics, carbon-neutral delivery.' },
  { Icon: FiHeart, title: 'Made with care', desc: 'Small workshops, living wages, no shortcuts.' },
]

export default function About() {
  const reduced = useReducedMotion()
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Visual */}
          <Reveal variant="left" className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-5xl glass-card p-8">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blush-soft via-lavender-soft to-mint-soft dark:from-blush/10 dark:via-lavender/10 dark:to-mint/10" />
              <div className="grid h-full grid-cols-2 gap-4">
                {[
                  { type: 'bear', main: '#FFC4D8', accent: '#FFE0EC', cheek: '#FF8FBE' },
                  { type: 'bunny', main: '#E7DCFF', accent: '#F4EEFF', cheek: '#C9B6FF' },
                  { type: 'duck', main: '#FFF3C9', accent: '#FFE08A', cheek: '#FFC4A3' },
                  { type: 'cat', main: '#D4F7E8', accent: '#EBFBF4', cheek: '#9FEFCE' },
                ].map((a, i) => (
                  <motion.div
                    key={i}
                    animate={reduced ? {} : { y: [0, i % 2 ? 10 : -10, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
                    className="grid place-items-center rounded-3xl bg-white/55 p-4 backdrop-blur dark:bg-white/5"
                  >
                    <PlushieArt {...a} className="h-full w-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Story */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Softness, taken seriously"
              lead="Plushé began with one stubborn idea: a soft toy can be a genuine object of beauty. We obsess over the weight of a paw, the curve of an ear, the exact pink of a cheek — then wrap it like the gift it is."
              accent="#C9B6FF"
            />

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((s) => (
                <Reveal key={s.label} variant="up" className="rounded-3xl glass-card p-4 text-center sm:text-left">
                  <div className="font-display text-3xl font-bold gradient-text">
                    <Counter to={s.to} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-xs font-semibold text-ink-mute dark:text-white/40">{s.label}</div>
                </Reveal>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {values.map((v, i) => (
                <Reveal key={v.title} variant="right" delay={i * 0.08} className="flex items-start gap-4 rounded-3xl glass-card p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blush to-lavender text-white">
                    <v.Icon size={18} />
                  </span>
                  <div>
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-sm text-ink-soft dark:text-white/55">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
