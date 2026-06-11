import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { HiArrowDown, HiArrowRight } from 'react-icons/hi'
import { HERO, IMAGES, STATS } from '../data/content'
import { TextMask, Magnetic, FadeUp, Counter } from '../components/ui/motion'

function RotatingStamp() {
  return (
    <div className="relative h-24 w-24 md:h-28 md:w-28">
      <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-ink text-[9.5px] uppercase" style={{ letterSpacing: '2.6px' }}>
          <textPath href="#circ">· Depuis 1987 · Paris 7ème · Café — Pâtisserie</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-2xl italic text-champagne-deep">
        L
      </span>
    </div>
  )
}

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  // mouse parallax depth
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })
  const layerA = { x: useTransform(sx, (v) => v * 18), y: useTransform(sy, (v) => v * 18) }
  const layerB = { x: useTransform(sx, (v) => v * -26), y: useTransform(sy, (v) => v * -26) }

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
      className="relative min-h-[100svh] overflow-hidden grad-animated"
    >
      {/* soft color blobs */}
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-emerald-soft blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-royal-soft blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-6 lg:pb-24">
        {/* ——— copy ——— */}
        <motion.div style={{ y: textY }} className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.7 }}
            className="mb-6 text-[11px] font-semibold uppercase tracking-widest2 text-emerald-deep md:text-xs"
          >
            {HERO.eyebrow}
          </motion.p>

          <h1 className="font-display display-tight text-[15vw] leading-[0.95] sm:text-6xl md:text-7xl xl:text-[6.2rem]">
            <TextMask lines={[HERO.titleTop]} delay={2.5} />
            <span className="block overflow-hidden">
              <motion.span
                className="block italic grad-text-gold pr-2"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ delay: 2.62, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                {HERO.titleAccent}
              </motion.span>
            </span>
            <TextMask lines={[HERO.titleBottom]} delay={2.74} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-6 max-w-md text-base leading-relaxed text-stone md:text-lg"
          >
            {HERO.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.15, duration: 0.8 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <a
                href="#visit"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep"
              >
                {HERO.ctaPrimary}
                <HiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#coffee"
                className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory/60 px-7 py-4 text-sm font-medium backdrop-blur transition-colors hover:border-champagne hover:text-champagne-deep"
              >
                {HERO.ctaSecondary}
              </a>
            </Magnetic>
          </motion.div>

          {/* glass info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 0.8 }}
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
            initial={{ clipPath: 'inset(100% 0 0 0)' }}
            animate={{ clipPath: 'inset(0% 0 0 0)' }}
            transition={{ delay: 2.45, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="grain relative aspect-[3/4] overflow-hidden rounded-t-full rounded-b-[2rem] shadow-2xl shadow-ink/15"
          >
            <img
              src={IMAGES.heroParis}
              alt="A Paris street with the Eiffel Tower at golden hour"
              className="h-full w-full object-cover"
              fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <div className="glass-dark absolute bottom-5 left-5 right-5 rounded-2xl p-4 text-ivory">
              <p className="text-[10px] uppercase tracking-widest2 opacity-85">This morning</p>
              <p className="mt-1 font-display text-lg italic">
                240 croissants, laminated before sunrise.
              </p>
            </div>
          </motion.div>

          {/* floating depth elements */}
          <motion.div
            style={layerA}
            className="absolute -left-8 top-10 hidden animate-float-a sm:block lg:-left-16"
          >
            <img
              src={IMAGES.heroCroissant}
              alt="Fresh croissants"
              loading="lazy"
              className="h-24 w-24 rounded-3xl object-cover shadow-xl shadow-ink/15 md:h-28 md:w-28"
            />
          </motion.div>
          <motion.div
            style={layerB}
            className="absolute -right-4 bottom-24 hidden animate-float-b sm:block lg:-right-10"
          >
            <img
              src={IMAGES.heroLatte}
              alt="Latte art"
              loading="lazy"
              className="h-28 w-28 rounded-full object-cover shadow-xl shadow-ink/15 md:h-32 md:w-32"
            />
          </motion.div>
          <motion.div
            style={layerA}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3.4, duration: 0.7 }}
            className="absolute -top-8 right-2 lg:right-10"
          >
            <RotatingStamp />
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
        href="#coffee"
        aria-label="Scroll down"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-stone md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <HiArrowDown size={20} />
      </motion.a>
    </section>
  )
}
