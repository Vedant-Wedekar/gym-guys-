import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCheck, FiMail } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { Reveal } from './Reveal'
import FloatingElements from './FloatingElements'
import PlushieArt from './PlushieArt'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | done

  function submit() {
    if (!EMAIL_RE.test(email)) {
      setStatus('error')
      return
    }
    setStatus('done')
  }

  return (
    <section id="newsletter" className="relative py-20 sm:py-28">
      <div className="container-px">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-blush via-lavender to-sky p-8 text-white sm:p-14 lg:p-20">
            <FloatingElements count={12} />
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />

            <motion.div
              className="pointer-events-none absolute -bottom-4 right-4 hidden h-32 w-32 sm:block"
              animate={{ y: [0, -14, 0], rotate: [-5, 5, -5] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <PlushieArt type="duck" main="#FFF3C9" accent="#FFE08A" cheek="#FFC4A3" className="h-full w-full" />
            </motion.div>

            <div className="relative z-10 mx-auto max-w-xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/25 px-4 py-2 text-xs font-semibold backdrop-blur">
                <HiSparkles /> Join the cuddle club
              </span>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-balance sm:text-5xl">
                Get 10% off your first hug
              </h2>
              <p className="mt-3 text-white/80 text-balance">
                Early access to new drops, restock alerts, and the occasional very cute surprise. No spam, only softness.
              </p>

              <div className="mx-auto mt-8 max-w-md">
                <AnimatePresence mode="wait">
                  {status === 'done' ? (
                    <motion.div
                      key="done"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 font-semibold text-ink"
                    >
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-mint text-ink">
                        <FiCheck size={16} />
                      </span>
                      You’re in! Check your inbox for the code.
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="flex flex-col gap-3 rounded-3xl bg-white/20 p-2 backdrop-blur sm:flex-row sm:rounded-full">
                        <div className="flex flex-1 items-center gap-2 rounded-full bg-white px-5 py-3 text-ink">
                          <FiMail className="shrink-0 text-ink-mute" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                            onKeyDown={(e) => e.key === 'Enter' && submit()}
                            placeholder="you@example.com"
                            aria-label="Email address"
                            className="w-full bg-transparent text-sm outline-none placeholder:text-ink-mute"
                          />
                        </div>
                        <button
                          onClick={submit}
                          data-cursor="hover"
                          className="btn shrink-0 bg-ink px-6 py-3.5 text-white transition-transform hover:scale-[1.03]"
                        >
                          Get my code <FiArrowRight />
                        </button>
                      </div>
                      <AnimatePresence>
                        {status === 'error' && (
                          <motion.p
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-3 text-sm font-medium text-white"
                          >
                            Please enter a valid email so we can send your code.
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
