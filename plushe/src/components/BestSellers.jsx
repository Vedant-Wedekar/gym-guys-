import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiEye, FiArrowRight } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import { SectionHeading, Reveal } from './Reveal'
import PlushieArt from './PlushieArt'
import { products } from '../data/content'
import { useReducedMotion } from '../hooks/useUtils'

export default function BestSellers({ onQuickView }) {
  const best = products.filter((p) => p.tag === 'best')
  const hero = best[0]
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [reduced ? 0 : 50, reduced ? 0 : -50])

  return (
    <section id="bestsellers" ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col gap-3">
          <SectionHeading
            align="left"
            eyebrow="Most-loved"
            title="The ones everyone takes home"
            lead="Crowd favorites, restocked often, gone fast. These are the plushies our community can’t stop gifting."
            accent="#FF8FBE"
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Hero bestseller */}
          <Reveal variant="left" className="lg:col-span-5">
            <motion.div style={{ y }} className="relative overflow-hidden rounded-5xl glass-card p-7">
              <div
                className="absolute inset-0 -z-10"
                style={{ background: `radial-gradient(110% 90% at 30% 20%, ${hero.art.accent}, ${hero.art.main}55)` }}
              />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-ink shadow-soft backdrop-blur dark:bg-night-card/80 dark:text-white">
                <FaStar className="text-butter" size={12} /> #1 Bestseller
              </span>
              <motion.div
                animate={reduced ? {} : { y: [0, -14, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto my-6 h-48 w-48 sm:h-56 sm:w-56"
              >
                <PlushieArt {...hero.art} className="h-full w-full drop-shadow-[0_24px_36px_rgba(120,90,180,0.28)]" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold">{hero.name}</h3>
              <p className="mt-2 text-sm text-ink-soft dark:text-white/60">{hero.blurb}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold">${hero.price}</span>
                <button
                  onClick={() => onQuickView?.(hero)}
                  data-cursor="hover"
                  className="btn bg-ink px-5 py-2.5 text-sm text-white dark:bg-white dark:text-ink"
                >
                  <FiEye size={15} /> Quick view
                </button>
              </div>
            </motion.div>
          </Reveal>

          {/* Rail of others */}
          <div className="lg:col-span-7">
            <div className="flex h-full flex-col gap-4">
              {best.slice(1).map((p, i) => (
                <Reveal key={p.id} variant="right" delay={i * 0.08}>
                  <button
                    onClick={() => onQuickView?.(p)}
                    data-cursor="hover"
                    className="group flex w-full items-center gap-5 rounded-4xl glass-card p-4 text-left transition-transform hover:translate-x-1"
                  >
                    <div
                      className="grid h-24 w-24 shrink-0 place-items-center rounded-3xl"
                      style={{ background: `radial-gradient(120% 120% at 50% 30%, ${p.art.accent}, ${p.art.main}55)` }}
                    >
                      <PlushieArt {...p.art} className="h-20 w-20" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 text-xs font-semibold text-ink-soft dark:text-white/50">
                        <FaStar className="text-butter" size={11} /> {p.rating} · {p.reviews} reviews
                      </div>
                      <h4 className="mt-0.5 truncate font-display text-lg font-semibold">{p.name}</h4>
                      <p className="mt-0.5 truncate text-sm text-ink-mute dark:text-white/40">{p.blurb}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-2">
                      <span className="text-lg font-bold">${p.price}</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/5 text-ink transition-colors group-hover:bg-blush group-hover:text-white dark:bg-white/10 dark:text-white">
                        <FiArrowRight size={16} />
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
