import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'
import { HERO, IMAGES, STATS } from '../data/content'
import { TextMask, Magnetic, FadeUp, Counter } from '../components/ui/motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '16%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])

  // gentle mouse parallax
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 50, damping: 20 })
  const sy = useSpring(my, { stiffness: 50, damping: 20 })
  const layerA = { x: useTransform(sx, (v) => v * 14), y: useTransform(sy, (v) => v * 14) }
  const layerB = { x: useTransform(sx, (v) => v * -22), y: useTransform(sy, (v) => v * -22) }

  const onMouse = (e) => {
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouse}
      className="wash-mint relative min-h-[100svh] overflow-hidden"
    >
      {/* organic floating blobs */}
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 animate-blob bg-mint-soft blur-2xl" />
      <div
        className="pointer-events-none absolute -right-20 top-1/2 h-80 w-80 animate-blob bg-lavender-soft blur-2xl"
        style={{ animationDelay: '-6s' }}
      />
      <div
        className="pointer-events-none absolute bottom-10 left-1/3 h-64 w-64 animate-blob bg-sky-wash blur-2xl"
        style={{ animationDelay: '-11s' }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:pb-24">
        {/* ——— copy ——— */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-mid/20 bg-ivory/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest2 text-emerald-deep backdrop-blur md:text-xs"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-mid" />
            {HERO.eyebrow}
          </motion.p>

          <h1 className="font-display display-tight text-[14vw] font-medium sm:text-6xl md:text-7xl xl:text-[6rem]">
            <TextMask lines={[HERO.titleTop]} delay={2.4} />
            <span className="block overflow-hidden">
              <motion.span
                className="block italic grad-text-emerald pr-2"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 2.52, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {HERO.titleAccent}
              </motion.span>
            </span>
            <TextMask lines={[HERO.titleBottom]} delay={2.64} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9, duration: 0.8 }}
            className="mt-6 max-w-md text-base leading-relaxed text-stone md:text-lg"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.05, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep"
              >
                {HERO.ctaPrimary}
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-ivory/65 px-7 py-4 text-sm font-medium backdrop-blur transition-colors hover:border-emerald-mid hover:text-emerald-deep"
              >
                {HERO.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>

          {/* glass info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {HERO.cards.map((c) => (
              <div key={c.label} className="glass rounded-2xl px-5 py-3.5">
                <p className="text-[10px] uppercase tracking-widest2 text-stone">{c.label}</p>
                <p className="mt-0.5 font-display text-lg">{c.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ——— imagery ——— */}
        <div className="relative z-0 mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            style={{ y: imgY }}
            initial={{ clipPath: 'inset(0 0 100% 0 round 3rem)' }}
            animate={{ clipPath: 'inset(0 0 0% 0 round 3rem)' }}
            transition={{ delay: 2.35, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="grain relative aspect-[3/4] overflow-hidden rounded-[3rem] shadow-2xl shadow-emerald-deep/12"
          >
            <img
              src={IMAGES.heroYoga}
              alt="Meditation at sunrise overlooking calm hills"
              className="h-full w-full object-cover"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <div className="glass-dark absolute bottom-5 left-5 right-5 rounded-2xl p-4 text-ivory">
              <p className="text-[10px] uppercase tracking-widest2 opacity-85">Today, 7:00</p>
              <p className="mt-1 font-display text-lg italic">
                Sunrise flow — 12 mats left on the lawn.
              </p>
            </div>
          </motion.div>

          {/* floating depth elements */}
          <motion.div
            style={layerA}
            className="absolute -left-8 top-12 hidden animate-float-a sm:block lg:-left-14"
          >
            <img
              src={IMAGES.heroNature}
              alt="Forest light"
              loading="lazy"
              className="h-24 w-24 animate-blob object-cover shadow-xl shadow-ink/12 md:h-28 md:w-28"
            />
          </motion.div>
          <motion.div
            style={layerB}
            className="absolute -right-4 bottom-24 hidden animate-float-b sm:block lg:-right-10"
          >
            <img
              src={IMAGES.heroSmoothie}
              alt="Smoothie bowls"
              loading="lazy"
              className="h-28 w-28 rounded-full object-cover shadow-xl shadow-ink/12 md:h-32 md:w-32"
            />
          </motion.div>

          {/* breathing badge */}
          <motion.div
            style={layerA}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.3, duration: 0.7 }}
            className="glass absolute -top-6 right-4 flex items-center gap-3 rounded-full py-2 pl-2 pr-5 lg:right-10"
          >
            <motion.span
              className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-mint-mid to-sky-tone"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="h-3 w-3 rounded-full bg-ivory/85" />
            </motion.span>
            <span className="text-xs font-medium text-ink">Breathe with us</span>
          </motion.div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 md:px-8">
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-2 gap-y-8 rounded-3xl border border-ink/6 bg-ivory/70 px-6 py-8 backdrop-blur md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1.5 text-[11px] uppercase tracking-widest2 text-stone">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      <motion.a
        href="#programs"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-stone md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity }}
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
