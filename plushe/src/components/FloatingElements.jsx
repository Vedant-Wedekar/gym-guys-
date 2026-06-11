import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaStar } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'
import { useReducedMotion } from '../hooks/useUtils'

const ICONS = [FaHeart, FaStar, HiSparkles]
const COLORS = ['#FFB8D4', '#C9B6FF', '#A8D8FF', '#9FEFCE', '#FFE08A', '#FFC4A3']

/**
 * Decorative floating hearts / stars / sparkles.
 * `count` controls density; positions are memoized so they stay put across renders.
 */
export default function FloatingElements({ count = 14, className = '' }) {
  const reduced = useReducedMotion()
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        Icon: ICONS[i % ICONS.length],
        color: COLORS[i % COLORS.length],
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 12 + Math.random() * 26,
        delay: Math.random() * 4,
        dur: 5 + Math.random() * 6,
        drift: 12 + Math.random() * 26,
      })),
    [count],
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {items.map((it, i) => {
        const { Icon } = it
        return (
          <motion.span
            key={i}
            className="absolute"
            style={{ left: `${it.left}%`, top: `${it.top}%`, color: it.color }}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={
              reduced
                ? { opacity: 0.4, scale: 1 }
                : { opacity: [0, 0.7, 0.5, 0.7], y: [-it.drift, it.drift, -it.drift], scale: [0.8, 1, 0.85] }
            }
            transition={{ duration: it.dur, delay: it.delay, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Icon size={it.size} style={{ filter: 'drop-shadow(0 4px 8px rgba(120,90,180,0.18))' }} />
          </motion.span>
        )
      })}
    </div>
  )
}
