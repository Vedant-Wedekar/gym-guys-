import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotion } from '../hooks/useUtils'

/**
 * A pill button that gently pulls toward the cursor (magnetic effect).
 * variant: 'solid' | 'glass' | 'ghost'
 */
export default function MagneticButton({
  children,
  variant = 'solid',
  className = '',
  as = 'button',
  ...props
}) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  function onMove(e) {
    if (reduced || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const mx = e.clientX - (r.left + r.width / 2)
    const my = e.clientY - (r.top + r.height / 2)
    x.set(mx * 0.32)
    y.set(my * 0.32)
  }
  function onLeave() {
    x.set(0)
    y.set(0)
  }

  const variants = {
    solid:
      'text-white shadow-card bg-gradient-to-r from-blush via-lavender to-sky hover:shadow-glow',
    glass:
      'glass-card text-ink dark:text-white hover:bg-white/80',
    ghost:
      'text-ink dark:text-white/90 border border-ink/15 dark:border-white/15 hover:border-ink/30',
  }

  const MotionTag = motion[as] || motion.button

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={`btn px-7 py-3.5 text-sm sm:text-base ${variants[variant]} ${className}`}
      data-cursor="hover"
      whileTap={{ scale: 0.96 }}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
