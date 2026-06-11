import { useRef, useEffect, useState } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  useMotionValue,
} from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/* ——— fade-up reveal on scroll ——— */
export function FadeUp({ children, delay = 0, y = 36, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* ——— staggered children container ——— */
export function Stagger({ children, className = '', gap = 0.09 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
}

/* ——— masked line-by-line text reveal ——— */
export function TextMask({ lines, className = '', lineClassName = '', delay = 0 }) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + i * 0.12, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* ——— parallax image (translates within an overflow-hidden frame) ——— */
export function ParallaxImage({ src, alt, className = '', imgClassName = '', strength = 14 }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1 + strength / 45 }}
        className={`h-full w-full object-cover will-change-transform ${imgClassName}`}
      />
    </div>
  )
}

/* ——— magnetic button ——— */
export function Magnetic({ children, className = '', strength = 0.3 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 180, damping: 14 })
  const sy = useSpring(y, { stiffness: 180, damping: 14 })

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}

/* ——— infinite marquee ——— */
export function Marquee({ children, speed = 28, className = '', reverse = false }) {
  return (
    <div className={`flex overflow-hidden whitespace-nowrap ${className}`}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className="flex shrink-0 items-center"
          initial={{ x: reverse ? '-100%' : '0%' }}
          animate={{ x: reverse ? '0%' : '-100%' }}
          transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
          aria-hidden={i === 1}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}

/* ——— animated counter ——— */
export function Counter({ value, suffix = '', className = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = null
    let rafId
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) rafId = requestAnimationFrame(step)
    }
    rafId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafId)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  )
}

/* ——— section eyebrow label ——— */
export function Eyebrow({ children, className = '' }) {
  return (
    <FadeUp y={16}>
      <span
        className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-widest2 ${className}`}
      >
        <span className="h-px w-8 bg-current opacity-65" />
        {children}
      </span>
    </FadeUp>
  )
}
