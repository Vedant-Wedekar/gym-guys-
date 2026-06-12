import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import WordMarquee from './components/WordMarquee'
import Hero from './sections/Hero'

const Featured = lazy(() => import('./sections/Featured'))
const Why = lazy(() => import('./sections/Why'))
const Categories = lazy(() => import('./sections/Categories'))
const Helpers = lazy(() => import('./sections/Helpers'))
const Process = lazy(() => import('./sections/Process'))
const Gallery = lazy(() => import('./sections/Gallery'))
const Stories = lazy(() => import('./sections/Stories'))
const Plans = lazy(() => import('./sections/Plans'))
const Faq = lazy(() => import('./sections/Faq'))
const Newsletter = lazy(() => import('./sections/Newsletter'))
const Footer = lazy(() => import('./sections/Footer'))

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Featured />
          <Why />
          <WordMarquee />
          <Categories />
          <Process />
          <Helpers />
          <Gallery />
          <WordMarquee reverse />
          <Stories />
          <Plans />
          <Faq />
          <Newsletter />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
