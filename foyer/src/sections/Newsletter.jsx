import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineMail, HiCheck } from 'react-icons/hi'
import { NEWSLETTER } from '../data/content'
import { FadeUp, Magnetic } from '../components/ui/motion'

const PARTICLES = Array.from({ length: 9 }, (_, i) => ({
  left: `${8 + i * 10.5}%`,
  delay: i * 0.8,
  dur: 7 + (i % 4) * 1.7,
  size: 4 + (i % 3) * 3,
  tone: ['#C9A86A', '#7FB4DD', '#8BA888'][i % 3],
}))

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return
    setSent(true)
  }

  return (
    <section className="relative bg-ivory px-5 pb-20 md:px-8 md:pb-28">
      <FadeUp>
        <div className="grad-animated relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:rounded-[3.5rem] md:px-12 md:py-24">
          {PARTICLES.map((p, i) => (
            <motion.span
              key={i}
              className="pointer-events-none absolute bottom-0 rounded-full"
              style={{ left: p.left, width: p.size, height: p.size, background: p.tone }}
              animate={{ y: [0, -340], opacity: [0, 0.6, 0] }}
              transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeOut' }}
            />
          ))}

          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-champagne-deep">
            Nº 10 — The Letter
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display display-tight text-4xl sm:text-5xl md:text-6xl">
            The Well-Kept <span className="italic grad-text-gold">Home</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-stone">{NEWSLETTER.sub}</p>

          <div className="mx-auto mt-9 max-w-md">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 text-emerald-deep"
                >
                  <HiCheck className="text-emerald-mid" size={20} />
                  Lovely — your first letter is on its way.
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  exit={{ opacity: 0, y: -12 }}
                  className="glass flex items-center gap-2 rounded-full p-2 pl-5"
                >
                  <HiOutlineMail className="shrink-0 text-stone" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && submit()}
                    placeholder={NEWSLETTER.placeholder}
                    aria-label="Email address"
                    className="w-full min-w-0 bg-transparent py-2 text-sm outline-none placeholder:text-stone/60"
                  />
                  <Magnetic strength={0.2}>
                    <button
                      onClick={submit}
                      className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep"
                    >
                      {NEWSLETTER.button}
                    </button>
                  </Magnetic>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </FadeUp>
    </section>
  )
}
