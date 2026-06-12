import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'
import { HiArrowUpRight, HiPlay } from 'react-icons/hi2'
import { HERO, HERO_VIDEO } from '../data/content'
import { Magnetic } from '../components/ui/motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const typeY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-paper pb-10 pt-24 md:pt-28">
      {/* morphing background shape */}
      <div className="pointer-events-none absolute -right-32 top-10 h-[28rem] w-[28rem] animate-morph bg-crimson-tint md:-right-20" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 animate-morph bg-royal-tint" style={{ animationDelay: '-7s' }} />

      <div className="relative mx-auto max-w-[90rem] px-5 md:px-10 lg:pl-28">
        {/* kicker */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke"
        >
          {HERO.kicker}
        </motion.p>

        {/* giant type — overlaps the video panel below */}
        <motion.h1
          style={{ y: typeY }}
          className="relative z-20 mt-4 font-display display-tight font-extrabold"
        >
          {[HERO.line1, HERO.line2, HERO.line3].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className={`block text-[13.5vw] leading-[0.92] md:text-[9.5vw] ${
                  i === 1 ? 'grad-text-crimson pl-[6vw]' : i === 2 ? 'text-stroke pl-[2vw]' : ''
                }`}
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{ delay: 2.5 + i * 0.13, duration: 1, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* video panel — type hangs over its top edge */}
        <div className="relative z-10 mt-[-3vw] grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <motion.div
            style={{ y: videoY }}
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ delay: 2.9, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="grain relative aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl shadow-ink/20 md:aspect-[21/10] md:rounded-3xl"
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={HERO_VIDEO.poster}
              preload="metadata"
            >
              {HERO_VIDEO.sources.map((src) => (
                <source key={src} src={src} type="video/mp4" />
              ))}
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

            {/* floating stat chips on the film */}
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3 md:inset-x-6 md:bottom-6">
              <div className="flex flex-wrap gap-2.5">
                {HERO.stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 + i * 0.12, duration: 0.6 }}
                    className="rounded-xl bg-paper/90 px-4 py-2.5 backdrop-blur"
                  >
                    <p className="font-display text-xl font-bold leading-none md:text-2xl">{s.value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest2 text-smoke">{s.label}</p>
                  </motion.div>
                ))}
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 3.9, duration: 0.5 }}
                className="group hidden h-14 w-14 place-items-center rounded-full bg-paper text-ink transition-transform hover:scale-110 md:grid"
                aria-label="Watch the showreel"
              >
                <HiPlay size={18} className="translate-x-0.5" />
              </motion.button>
            </div>

            {/* REC badge */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
              className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-paper backdrop-blur md:left-6 md:top-6"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-crimson-hi" /> Now filming
            </motion.span>
          </motion.div>

          {/* sub + CTAs */}
          <div className="lg:pb-4">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8 }}
              className="max-w-md text-base leading-relaxed text-smoke md:text-lg"
            >
              {HERO.sub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.35, duration: 0.8 }}
              className="mt-7 flex flex-wrap gap-4"
            >
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors hover:bg-crimson-hi"
                >
                  {HERO.cta} <HiArrowUpRight size={14} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-7 py-4 text-sm font-medium transition-colors hover:border-ink"
                >
                  {HERO.cta2}
                </a>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#services"
        aria-label="Scroll"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-smoke lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
