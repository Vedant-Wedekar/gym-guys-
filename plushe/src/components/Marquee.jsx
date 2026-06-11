import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

/**
 * Infinite marquee ribbon. Duplicates content twice and animates -50% for a seamless loop.
 * variant 'solid' uses the gradient ribbon; 'plain' is text-on-transparent.
 */
export default function Marquee({
  items = [],
  speed = 26,
  reverse = false,
  variant = 'solid',
  className = '',
}) {
  const loop = [...items, ...items]

  const wrap =
    variant === 'solid'
      ? 'bg-gradient-to-r from-blush via-lavender to-sky text-white'
      : 'text-ink dark:text-white/80'

  return (
    <div className={`relative w-full overflow-hidden py-4 ${wrap} ${className}`} aria-hidden="true">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: speed, ease: 'linear', repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <span key={i} className="flex items-center gap-8 text-base font-semibold tracking-wide sm:text-lg">
            {it}
            <FaHeart className="shrink-0 opacity-80" size={14} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
