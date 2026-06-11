import { useCallback, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import useLenis from './hooks/useLenis'

import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import FeaturedBears from './components/FeaturedBears'
import Categories from './components/Categories'
import BestSellers from './components/BestSellers'
import NewArrivals from './components/NewArrivals'
import PersonalizedGifts from './components/PersonalizedGifts'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import About from './components/About'
import FAQ from './components/FAQ'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import QuickViewModal from './components/QuickViewModal'

const RIBBON = [
  'Free gift wrapping',
  'Handmade with love',
  'Worldwide shipping',
  'Adopt-a-plushie program',
  'Personalised embroidery',
  '100% huggable guarantee',
]

export default function App() {
  // Smooth scrolling (auto-disabled for reduced-motion inside the hook)
  useLenis()

  const [loading, setLoading] = useState(true)
  const [wishlist, setWishlist] = useState(() => new Set())
  const [quickView, setQuickView] = useState(null)

  const toggleWish = useCallback((id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const openQuickView = useCallback((product) => setQuickView(product), [])
  const closeQuickView = useCallback(() => setQuickView(null), [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <CustomCursor />
      <ScrollProgress />
      <Navbar wishlistCount={wishlist.size} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Hero />

        <Marquee items={RIBBON} variant="solid" speed={28} />

        <FeaturedBears
          wishlist={wishlist}
          onWish={toggleWish}
          onQuickView={openQuickView}
        />

        <Categories />

        <BestSellers onQuickView={openQuickView} />

        <NewArrivals
          wishlist={wishlist}
          onWish={toggleWish}
          onQuickView={openQuickView}
        />

        <Marquee items={RIBBON} variant="plain" reverse speed={34} />

        <PersonalizedGifts />

        <Testimonials />

        <Gallery />

        <About />

        <FAQ />

        <Newsletter />
      </motion.main>

      <Footer />
      <BackToTop />

      <QuickViewModal
        product={quickView}
        wished={quickView ? wishlist.has(quickView.id) : false}
        onWish={toggleWish}
        onClose={closeQuickView}
      />
    </>
  )
}
