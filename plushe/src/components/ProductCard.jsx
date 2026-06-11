import { motion } from 'framer-motion'
import { FiHeart, FiEye, FiPlus } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import PlushieArt from './PlushieArt'

const badgeColor = {
  Bestseller: 'bg-blush text-white',
  New: 'bg-mint text-ink',
  Loved: 'bg-lavender text-white',
}

export default function ProductCard({ product, wished, onWish, onQuickView }) {
  const { name, category, price, oldPrice, rating, reviews, badge, art } = product

  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-4xl glass-card p-3.5"
      data-cursor="hover"
    >
      {/* Art / image area */}
      <div className="relative aspect-square overflow-hidden rounded-3xl">
        {/* color flood backdrop */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ background: `radial-gradient(120% 120% at 50% 30%, ${art.accent}, ${art.main}55)` }}
        />
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(80% 80% at 50% 110%, ${art.cheek}66, transparent)` }}
        />

        {/* Badge */}
        {badge && (
          <span className={`absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold shadow-soft ${badgeColor[badge] || 'bg-white text-ink'}`}>
            {badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); onWish?.(product.id) }}
          aria-label={wished ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={wished}
          className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink shadow-soft backdrop-blur transition-transform hover:scale-110 active:scale-90 dark:bg-night-card/80 dark:text-white"
        >
          <motion.span animate={wished ? { scale: [1, 1.4, 1] } : {}} transition={{ duration: 0.3 }}>
            <FiHeart size={17} className={wished ? 'fill-blush text-blush' : ''} />
          </motion.span>
        </button>

        {/* Plushie */}
        <motion.div
          className="absolute inset-0 grid place-items-center p-6"
          whileHover={{ scale: 1.06, rotate: -2 }}
          transition={{ type: 'spring', stiffness: 200, damping: 14 }}
        >
          <PlushieArt {...art} className="h-full w-full drop-shadow-[0_18px_28px_rgba(120,90,180,0.22)]" />
        </motion.div>

        {/* Quick view (reveals on hover / always tappable on touch) */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 max-md:translate-y-0 max-md:opacity-100">
          <button
            onClick={(e) => { e.stopPropagation(); onQuickView?.(product) }}
            className="btn w-full bg-white/85 py-2.5 text-sm text-ink shadow-soft backdrop-blur hover:bg-white dark:bg-night-card/85 dark:text-white"
          >
            <FiEye size={15} /> Quick view
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col px-1.5 pb-1.5 pt-4">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute dark:text-white/40">
            {category}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold text-ink-soft dark:text-white/60">
            <FaStar className="text-butter" size={12} /> {rating}
            <span className="text-ink-mute dark:text-white/30">({reviews})</span>
          </span>
        </div>

        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug">{name}</h3>

        <div className="mt-auto flex items-center justify-between pt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold">${price}</span>
            {oldPrice && (
              <span className="text-sm text-ink-mute line-through dark:text-white/30">${oldPrice}</span>
            )}
          </div>
          <button
            aria-label={`Add ${name} to bag`}
            className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform hover:scale-110 active:scale-90 dark:bg-white dark:text-ink"
          >
            <FiPlus size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}
