import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { NAV_LINKS } from '../data/content'
import { Magnetic } from './ui/motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* scroll progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-emerald-mid via-champagne to-royal-mid"
        style={{ scaleX: progress }}
      />

      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.3, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-[60] px-3 md:top-5 md:px-6"
      >
        <nav
          className={`glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-shadow duration-500 md:px-7 ${
            scrolled ? 'shadow-xl shadow-ink/8' : ''
          }`}
        >
          <a href="#top" className="font-display text-lg tracking-[0.16em] md:text-xl">
            LUMIÈRE
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm text-stone transition-colors hover:text-ink"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Magnetic>
              <a
                href="#visit"
                className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep sm:inline-block"
              >
                Reserve
              </a>
            </Magnetic>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-ink text-ivory lg:hidden"
            >
              <HiMenuAlt4 size={18} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-ivory"
            initial={{ clipPath: 'circle(0% at 92% 6%)' }}
            animate={{ clipPath: 'circle(140% at 92% 6%)' }}
            exit={{ clipPath: 'circle(0% at 92% 6%)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="font-display text-lg tracking-[0.16em]">LUMIÈRE</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-ivory"
              >
                <HiX size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-1 px-8">
              {NAV_LINKS.map((l, i) => (
                <div key={l.href} className="overflow-hidden">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 font-display text-4xl text-ink"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {l.label}
                  </motion.a>
                </div>
              ))}
              <motion.a
                href="#visit"
                onClick={() => setOpen(false)}
                className="mt-8 inline-block w-fit rounded-full bg-ink px-7 py-3.5 text-ivory"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                Reserve a table
              </motion.a>
            </nav>
            <p className="px-8 pb-8 text-xs uppercase tracking-widest2 text-stone">
              38 Rue Cler · Paris 7ème
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
