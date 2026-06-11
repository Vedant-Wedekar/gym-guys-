import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import WordMarquee from './components/WordMarquee'
import Hero from './sections/Hero'

const SignatureCoffee = lazy(() => import('./sections/SignatureCoffee'))
const Pastries = lazy(() => import('./sections/Pastries'))
const Seasonal = lazy(() => import('./sections/Seasonal'))
const ParisStory = lazy(() => import('./sections/ParisStory'))
const ChefRecs = lazy(() => import('./sections/ChefRecs'))
const Gallery = lazy(() => import('./sections/Gallery'))
const Testimonials = lazy(() => import('./sections/Testimonials'))
const Faq = lazy(() => import('./sections/Faq'))
const Newsletter = lazy(() => import('./sections/Newsletter'))
const Footer = lazy(() => import('./sections/Footer'))

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <SignatureCoffee />
          <WordMarquee />
          <Pastries />
          <Seasonal />
          <WordMarquee reverse />
          <ParisStory />
          <ChefRecs />
          <Gallery />
          <Testimonials />
          <Faq />
          <Newsletter />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
