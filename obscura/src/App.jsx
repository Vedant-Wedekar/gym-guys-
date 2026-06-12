import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence } from 'framer-motion'
import useLenis from './hooks/useLenis'
import Loader from './components/Loader'
import SideNav from './components/SideNav'
import Band from './components/Band'
import Hero from './sections/Hero'

const Services = lazy(() => import('./sections/Services'))
const Manifesto = lazy(() => import('./sections/Manifesto'))
const Work = lazy(() => import('./sections/Work'))
const Numbers = lazy(() => import('./sections/Numbers'))
const Quote = lazy(() => import('./sections/Quote'))
const Footer = lazy(() => import('./sections/Footer'))

export default function App() {
  const [loading, setLoading] = useState(true)
  useLenis()

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2300)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      <SideNav />
      <main>
        <Hero />
        <Band grad="grad-crimson" />
        <Suspense fallback={null}>
          <Services />
          <Manifesto />
          <Band grad="grad-royal" reverse />
          <Work />
          <Numbers />
          <Quote />
          <Band grad="grad-emerald" />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
