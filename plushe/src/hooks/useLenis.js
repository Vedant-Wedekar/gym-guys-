import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Initializes Lenis smooth scrolling.
 * Automatically disabled when the user prefers reduced motion.
 * Exposes window.lenis so the back-to-top button and nav links can call scrollTo.
 */
export default function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })

    window.lenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete window.lenis
    }
  }, [])
}
