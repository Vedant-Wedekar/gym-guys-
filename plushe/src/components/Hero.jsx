import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import MagneticButton from './MagneticButton'
import FloatingElements from './FloatingElements'
import PlushieArt from './PlushieArt'
import { scrollToId, useReducedMotion } from '../hooks/useUtils'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 + i * 0.12 },
  }),
}

// Floating plushie companions positioned around the headline
const floaters = [
  { type: 'bear', main: '#FFC4D8', accent: '#FFE0EC', cheek: '#FF8FBE', cls: 'left-[4%] top-[20%] w-24 sm:w-32', d: 0, depth: 26 },
  { type: 'bunny', main: '#E7DCFF', accent: '#F4EEFF', cheek: '#C9B6FF', cls: 'right-[5%] top-[16%] w-24 sm:w-36', d: 0.6, depth: -34 },
  { type: 'cat', main: '#D4F7E8', accent: '#EBFBF4', cheek: '#9FEFCE', cls: 'left-[8%] bottom-[14%] w-20 sm:w-28', d: 1.1, depth: 40 },
  { type: 'duck', main: '#FFF3C9', accent: '#FFE08A', cheek: '#FFC4A3', cls: 'right-[8%] bottom-[16%] w-20 sm:w-28', d: 0.3, depth: -22 },
]

export default function Hero() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yText = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 140])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Aurora gradient background */}
      <motion.div style={{ scale: scaleBg }} className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-cream dark:bg-night" />
        <div className="absolute -left-[10%] top-[6%] h-[42vw] w-[42vw] rounded-full bg-blush/60 blur-[90px] animate-aurora dark:bg-blush/20" />
        <div className="absolute right-[2%] top-[2%] h-[38vw] w-[38vw] rounded-full bg-lavender/55 blur-[90px] animate-aurora [animation-delay:-6s] dark:bg-lavender/20" />
        <div className="absolute bottom-[2%] left-[28%] h-[40vw] w-[40vw] rounded-full bg-sky/55 blur-[90px] animate-aurora [animation-delay:-3s] dark:bg-sky/20" />
        <div className="absolute -bottom-[8%] right-[18%] h-[30vw] w-[30vw] rounded-full bg-mint/55 blur-[90px] animate-aurora [animation-delay:-9s] dark:bg-mint/20" />
      </motion.div>

      <FloatingElements count={16} />

      {/* Floating plushies */}
      {floaters.map((f, i) => (
        <Floater key={i} f={f} i={i} progress={scrollYProgress} reduced={reduced} />
      ))}

      {/* Headline block */}
      <motion.div style={{ y: yText, opacity }} className="container-px relative z-10 text-center">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-ink/80 dark:text-white/80">
            <HiSparkles className="text-blush" /> Handmade · Heirloom-soft · Gift-ready
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          A little <span className="gradient-text">luxury</span>
          <br className="hidden sm:block" /> you can hug.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mx-auto mt-6 max-w-xl text-base text-ink-soft text-balance dark:text-white/60 sm:text-lg"
        >
          Hand-finished teddy bears, plushies and aesthetic gifts — designed to be
          treasured, ribbon-wrapped, and impossible to put down.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <MagneticButton onClick={() => scrollToId('featured')} className="w-full sm:w-auto">
            Shop the collection <FiArrowRight />
          </MagneticButton>
          <MagneticButton variant="glass" onClick={() => scrollToId('gifts')} className="w-full sm:w-auto">
            Personalize a gift
          </MagneticButton>
        </motion.div>

        {/* Trust row */}
        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-mute dark:text-white/40"
        >
          {['12,000+ happy homes', '4.9 ★ average rating', 'Carbon-neutral shipping'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blush" /> {t}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-7 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        aria-hidden="true"
      >
        <div className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-ink/20 p-1.5 dark:border-white/20">
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-ink/40 dark:bg-white/40"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function Floater({ f, i, progress, reduced }) {
  const y = useTransform(progress, [0, 1], [0, f.depth])
  return (
    <motion.div
      className={`pointer-events-none absolute ${f.cls}`}
      style={{ y }}
      initial={{ opacity: 0, scale: 0.4, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 + i * 0.15 }}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -18, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: f.d }}
        className="drop-shadow-[0_24px_40px_rgba(120,90,180,0.28)]"
      >
        <PlushieArt type={f.type} main={f.main} accent={f.accent} cheek={f.cheek} className="h-full w-full" />
      </motion.div>
    </motion.div>
  )
}
