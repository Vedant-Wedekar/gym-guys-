import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useUtils'

/**
 * A soft glowing cursor: a small dot that tracks instantly and a larger
 * ring that lags with easing and expands over [data-cursor="hover"] targets.
 * Rendered only on devices with a fine pointer; falls back to the native cursor otherwise.
 */
export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const reduced = useReducedMotion()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!fine || reduced) return
    setEnabled(true)
    document.documentElement.classList.add('cursor-none-fine')

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: pos.x, y: pos.y }
    let raf

    function onMove(e) {
      pos.x = e.clientX
      pos.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
      }
    }
    function onOver(e) {
      const hot = e.target.closest('[data-cursor="hover"], a, button')
      ringRef.current?.classList.toggle('cursor-grow', !!hot)
    }
    function loop() {
      ring.x += (pos.x - ring.x) * 0.18
      ring.y += (pos.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.classList.remove('cursor-none-fine')
    }
  }, [reduced])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[120] -ml-1 -mt-1 h-2 w-2 rounded-full bg-blush mix-blend-multiply dark:mix-blend-screen"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[119] -ml-5 -mt-5 h-10 w-10 rounded-full border border-lavender/70 transition-[width,height,margin,background] duration-200"
        style={{ willChange: 'transform' }}
      />
      <style>{`
        .cursor-ring { backdrop-filter: blur(0.5px); }
        .cursor-ring.cursor-grow {
          width: 4rem; height: 4rem; margin-left: -2rem; margin-top: -2rem;
          background: radial-gradient(circle, rgba(201,182,255,0.25), transparent 70%);
          border-color: rgba(255,143,190,0.7);
        }
      `}</style>
    </>
  )
}
