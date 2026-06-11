import { useEffect, useState } from 'react'

/** Returns true when the user has requested reduced motion. */
export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return reduced
}

/** Smoothly scroll to an element by id, using Lenis if available. */
export function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  if (window.lenis) {
    window.lenis.scrollTo(el, { offset: -80, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
