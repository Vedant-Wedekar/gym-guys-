import { FiArrowRight } from 'react-icons/fi'
import ProductGrid from './ProductGrid'
import { SectionHeading, Reveal } from './Reveal'
import MagneticButton from './MagneticButton'
import { products } from '../data/content'
import { scrollToId } from '../hooks/useUtils'

export default function NewArrivals({ wishlist, onWish, onQuickView }) {
  const fresh = products.filter((p) => p.tag === 'new')

  return (
    <section id="new" className="relative py-20 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="Just landed"
            title="New this season"
            lead="Fresh from the atelier — limited first runs, often in single-digit quantities."
            accent="#9FEFCE"
          />
          <Reveal delay={0.1}>
            <MagneticButton variant="ghost" onClick={() => scrollToId('featured')}>
              View all <FiArrowRight />
            </MagneticButton>
          </Reveal>
        </div>

        <div className="mt-12">
          <ProductGrid
            products={fresh}
            wishlist={wishlist}
            onWish={onWish}
            onQuickView={onQuickView}
            columns={4}
          />
        </div>
      </div>
    </section>
  )
}
