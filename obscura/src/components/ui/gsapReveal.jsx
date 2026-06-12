import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* GSAP split-word reveal — words rise out of their own mask on scroll */
export function SplitReveal({ text, className = '', wordClassName = '', stagger = 0.04, as: Tag = 'p' }) {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll('.sr-word'),
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 0.9,
          stagger,
          ease: 'power4.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [stagger])

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(' ').map((w, i) => (
        <span key={i} aria-hidden className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span className={`sr-word inline-block will-change-transform ${wordClassName}`}>
            {w}&nbsp;
          </span>
        </span>
      ))}
    </Tag>
  )
}

/* GSAP line draw / fade-up for arbitrary children */
export function GsapRise({ children, className = '', y = 48, delay = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [y, delay])
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
