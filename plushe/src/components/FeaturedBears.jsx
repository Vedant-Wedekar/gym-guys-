import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProductGrid from './ProductGrid'
import { SectionHeading } from './Reveal'
import { products } from '../data/content'

const filters = ['All', 'Teddy Bears', 'Plushies']

export default function FeaturedBears({ wishlist, onWish, onQuickView }) {
  const [active, setActive] = useState('All')
  const shown = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.category === active)),
    [active],
  )

  return (
    <section id="featured" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            eyebrow="Featured companions"
            title="Meet the family"
            lead="Eight little characters, each hand-finished and waiting for a name. Hover to fall in love; tap quick view to get acquainted."
          />

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                data-cursor="hover"
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active === f ? 'text-white' : 'text-ink/70 hover:text-ink dark:text-white/60 dark:hover:text-white'
                }`}
              >
                {active === f && (
                  <motion.span
                    layoutId="featured-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blush via-lavender to-sky shadow-soft"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <ProductGrid
                products={shown}
                wishlist={wishlist}
                onWish={onWish}
                onQuickView={onQuickView}
                columns={4}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
