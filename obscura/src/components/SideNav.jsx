import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { HiArrowUpRight } from 'react-icons/hi2'

import { NAV_LINKS } from '../data/content'
import { Magnetic } from './ui/motion'

export default function SideNav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#top')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    ids.forEach((id) => {
      const el = document.querySelector(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* top hairline progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-ink"
        style={{ scaleX: progress }}
      />

      {/* brand — top left */}
      <motion.a
        href="#top"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.7 }}
        className="fixed left-5 top-5 z-[60] font-display text-lg font-bold tracking-tight md:left-8 md:top-7"
      >
        OBSCURA<span className="align-super text-[10px]">®</span>
      </motion.a>

      {/* desktop side rail */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-6 top-1/2 z-[60] hidden -translate-y-1/2 flex-col gap-1 lg:flex"
        aria-label="Section navigation"
      >
        {NAV_LINKS.map((l) => {
          const isActive = active === l.href
          return (
            <a key={l.href} href={l.href} className="group flex items-center gap-3 py-1.5">
              <span
                className={`font-display text-[11px] font-bold transition-all duration-300 ${
                  isActive ? 'text-ink' : 'text-smoke/50 group-hover:text-smoke'
                }`}
              >
                {l.short}
              </span>
              <span
                className={`h-px bg-ink transition-all duration-300 ${
                  isActive ? 'w-8' : 'w-3 opacity-25 group-hover:w-6 group-hover:opacity-60'
                }`}
              />
              <span
                className={`text-[11px] uppercase tracking-widest2 transition-all duration-300 ${
                  isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                }`}
              >
                {l.label}
              </span>
            </a>
          )
        })}
      </motion.nav>

      {/* CTA + burger — top right */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.7 }}
        className="fixed right-5 top-4 z-[60] flex items-center gap-3 md:right-8 md:top-5"
      >
        <Magnetic>
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-crimson-hi sm:inline-flex"
          >
            Start a project <HiArrowUpRight size={13} />
          </a>
        </Magnetic>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 bg-paper lg:hidden"
        >
          <HiMenuAlt4 size={17} />
        </button>
      </motion.div>

      {/* mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-paper"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-lg font-bold">OBSCURA®</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full bg-ink text-paper"
              >
                <HiX size={17} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center px-8">
              {NAV_LINKS.map((l, i) => (
                <div key={l.href} className="overflow-hidden border-b border-line">
                  <motion.a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-4 font-display text-4xl font-bold"
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {l.label}
                    <HiArrowUpRight className="opacity-25 transition-opacity group-hover:opacity-100" />
                  </motion.a>
                </div>
              ))}
            </nav>
            <p className="p-8 text-xs uppercase tracking-widest2 text-smoke">
              Transform attention into customers
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
