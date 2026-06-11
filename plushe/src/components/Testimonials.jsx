import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { SectionHeading } from './Reveal'
import { testimonials } from '../data/content'
import { useReducedMotion } from '../hooks/useUtils'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [dir, setDir] = useState(1)
  const reduced = useReducedMotion()
  const n = testimonials.length

  const go = useCallback((next) => {
    setDir(next > i || (i === n - 1 && next === 0) ? 1 : -1)
    setI((next + n) % n)
  }, [i, n])

  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => { setDir(1); setI((p) => (p + 1) % n) }, 5000)
    return () => clearInterval(id)
  }, [n, reduced])

  const t = testimonials[i]

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Love letters"
          title="From homes that hug back"
          lead="12,000+ companions adopted and counting. Here’s what their people say."
          accent="#A8D8FF"
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div className="relative min-h-[280px] sm:min-h-[240px]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.figure
                key={t.id}
                custom={dir}
                initial={{ opacity: 0, x: dir * 40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: dir * -40, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-5xl glass-card p-8 text-center sm:p-12"
              >
                <FaQuoteLeft className="mx-auto text-3xl" style={{ color: t.accent }} />
                <blockquote className="mt-5 font-display text-xl font-medium leading-relaxed text-balance sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center justify-center gap-0.5 text-butter">
                  {[...Array(5)].map((_, k) => <FaStar key={k} size={14} />)}
                </div>
                <figcaption className="mt-5 flex items-center justify-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full font-display text-lg font-bold text-white shadow-soft"
                    style={{ background: `linear-gradient(135deg, ${t.accent}, #C9B6FF)` }}
                  >
                    {t.name.charAt(0)}
                  </span>
                  <span className="text-left">
                    <span className="block font-semibold">{t.name}</span>
                    <span className="block text-sm text-ink-mute dark:text-white/40">{t.role}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-7 flex items-center justify-center gap-4">
            <button onClick={() => go(i - 1)} aria-label="Previous" data-cursor="hover" className="grid h-11 w-11 place-items-center rounded-full glass-card transition-transform hover:scale-110">
              <FiChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, k) => (
                <button
                  key={k}
                  onClick={() => go(k)}
                  aria-label={`Go to testimonial ${k + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${k === i ? 'w-7 bg-blush' : 'w-2 bg-ink/15 dark:bg-white/20'}`}
                />
              ))}
            </div>
            <button onClick={() => go(i + 1)} aria-label="Next" data-cursor="hover" className="grid h-11 w-11 place-items-center rounded-full glass-card transition-transform hover:scale-110">
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
