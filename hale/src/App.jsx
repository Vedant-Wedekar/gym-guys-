import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import WordMarquee from './components/WordMarquee'
import Hero from './sections/Hero'

const Programs = lazy(() => import('./sections/Programs'))
const Services = lazy(() => import('./sections/Services'))
const Breathing = lazy(() => import('./sections/Breathing'))
const Gallery = lazy(() => import('./sections/Gallery'))
const Experts = lazy(() => import('./sections/Experts'))
const Stories = lazy(() => import('./sections/Stories'))
const Blog = lazy(() => import('./sections/Blog'))
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
          <Programs />
          <Services />
          <WordMarquee />
          <Breathing />
          <Gallery />
          <Experts />
          <Stories />
          <WordMarquee reverse />
          <Blog />
          <Faq />
          <Newsletter />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
