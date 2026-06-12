import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiPlus } from 'react-icons/hi'
import { FAQ } from '../data/content'
import { Eyebrow, FadeUp } from '../components/ui/motion'

export default function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative bg-ivory pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow className="text-ink/65">Nº 09 — Questions</Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              Asked before
              <br />
              <span className="italic grad-text-gold">every first booking.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-sm leading-relaxed text-stone">
              Anything else — our support team is human, local and awake:{' '}
              <a
                href="mailto:hello@foyer.homes"
                className="border-b border-champagne text-ink transition-colors hover:text-champagne-deep"
              >
                hello@foyer.homes
              </a>
              .
            </p>
          </FadeUp>
        </div>

        <div className="divide-y divide-ink/8">
          {FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <FadeUp key={item.q} delay={i * 0.05}>
                <div className="py-2">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl md:text-2xl">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors ${
                        isOpen
                          ? 'border-champagne bg-champagne text-ivory'
                          : 'border-ink/12 text-ink'
                      }`}
                    >
                      <HiPlus />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-5 leading-relaxed text-stone">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
