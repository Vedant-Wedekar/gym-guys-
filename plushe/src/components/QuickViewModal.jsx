import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiHeart, FiShoppingBag, FiMinus, FiPlus, FiTruck, FiGift, FiRefreshCcw } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'
import PlushieArt from './PlushieArt'

const swatches = [
  { name: 'Blush', main: '#FFC4D8', accent: '#FFE0EC', cheek: '#FF8FBE' },
  { name: 'Lavender', main: '#E7DCFF', accent: '#F4EEFF', cheek: '#C9B6FF' },
  { name: 'Mint', main: '#D4F7E8', accent: '#EBFBF4', cheek: '#9FEFCE' },
  { name: 'Sky', main: '#D9EDFF', accent: '#EEF7FF', cheek: '#A8D8FF' },
  { name: 'Butter', main: '#FFF3C9', accent: '#FFE08A', cheek: '#FFC4A3' },
]

export default function QuickViewModal({ product, wished, onWish, onClose }) {
  const [qty, setQty] = useState(1)
  const [colorIdx, setColorIdx] = useState(0)

  useEffect(() => {
    if (!product) return
    setQty(1)
    setColorIdx(0)
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [product, onClose])

  const shownArt = product ? { type: product.art.type, ...swatches[colorIdx] } : null

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-md" onClick={onClose} />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} details`}
            className="relative z-10 max-h-[92svh] w-full max-w-4xl overflow-y-auto rounded-t-4xl glass-card p-5 sm:rounded-5xl sm:p-7"
            initial={{ y: 60, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 40, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white/80 text-ink shadow-soft backdrop-blur transition-transform hover:scale-110 dark:bg-night-card/80 dark:text-white"
            >
              <FiX size={18} />
            </button>

            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              {/* Visual */}
              <div
                className="relative grid aspect-square place-items-center overflow-hidden rounded-4xl"
                style={{ background: `radial-gradient(120% 120% at 50% 25%, ${shownArt.accent}, ${shownArt.main}66)` }}
              >
                <motion.div
                  key={colorIdx}
                  initial={{ scale: 0.85, opacity: 0, rotate: -4 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 180, damping: 14 }}
                  className="h-3/4 w-3/4"
                >
                  <PlushieArt {...shownArt} className="h-full w-full drop-shadow-[0_24px_36px_rgba(120,90,180,0.25)]" />
                </motion.div>
                {product.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold text-ink shadow-soft backdrop-blur">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-mute dark:text-white/40">
                  {product.category}
                </span>
                <h3 className="mt-1.5 font-display text-3xl font-semibold leading-tight">{product.name}</h3>

                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="flex items-center gap-0.5 text-butter">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={13} className={i < Math.round(product.rating) ? '' : 'opacity-30'} />
                    ))}
                  </span>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-ink-mute dark:text-white/40">· {product.reviews} reviews</span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-ink-soft dark:text-white/60">{product.blurb}</p>

                {/* Swatches */}
                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-mute dark:text-white/40">
                    Colorway · {swatches[colorIdx].name}
                  </p>
                  <div className="mt-2 flex gap-2.5">
                    {swatches.map((s, i) => (
                      <button
                        key={s.name}
                        onClick={() => setColorIdx(i)}
                        aria-label={s.name}
                        className={`h-9 w-9 rounded-full ring-2 ring-offset-2 ring-offset-transparent transition-transform hover:scale-110 ${
                          i === colorIdx ? 'ring-ink dark:ring-white' : 'ring-transparent'
                        }`}
                        style={{ background: `linear-gradient(135deg, ${s.main}, ${s.cheek})` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Qty + price */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-full border border-ink/12 p-1 dark:border-white/15">
                    <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease" className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5 dark:hover:bg-white/10">
                      <FiMinus size={15} />
                    </button>
                    <span className="w-8 text-center font-semibold tabular-nums">{qty}</span>
                    <button onClick={() => setQty((q) => q + 1)} aria-label="Increase" className="grid h-9 w-9 place-items-center rounded-full hover:bg-ink/5 dark:hover:bg-white/10">
                      <FiPlus size={15} />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold">${product.price * qty}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-sm text-ink-mute line-through dark:text-white/30">
                        ${product.oldPrice * qty}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-5 flex gap-3">
                  <button className="btn flex-1 bg-gradient-to-r from-blush via-lavender to-sky py-3.5 text-white shadow-card">
                    <FiShoppingBag size={17} /> Add to bag
                  </button>
                  <button
                    onClick={() => onWish?.(product.id)}
                    aria-label="Wishlist"
                    aria-pressed={wished}
                    className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-ink/12 transition-colors hover:bg-ink/5 dark:border-white/15 dark:hover:bg-white/10"
                  >
                    <FiHeart size={19} className={wished ? 'fill-blush text-blush' : ''} />
                  </button>
                </div>

                {/* Reassurance */}
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-ink/8 pt-4 text-center dark:border-white/10">
                  {[
                    { Icon: FiGift, t: 'Free gift wrap' },
                    { Icon: FiTruck, t: 'Carbon-neutral' },
                    { Icon: FiRefreshCcw, t: '30-day returns' },
                  ].map(({ Icon, t }) => (
                    <div key={t} className="flex flex-col items-center gap-1.5 text-xs text-ink-soft dark:text-white/50">
                      <Icon size={17} className="text-lavender" /> {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
