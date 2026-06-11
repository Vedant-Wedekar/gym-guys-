import { motion } from 'framer-motion'
import ProductCard from './ProductCard'

/** Responsive, staggered grid of product cards. Reused across Featured / Best / New sections. */
export default function ProductGrid({ products, wishlist, onWish, onQuickView, columns = 4 }) {
  const cols = {
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns]

  return (
    <motion.div
      className={`grid grid-cols-1 gap-5 ${cols}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          wished={wishlist?.has(p.id)}
          onWish={onWish}
          onQuickView={onQuickView}
        />
      ))}
    </motion.div>
  )
}
