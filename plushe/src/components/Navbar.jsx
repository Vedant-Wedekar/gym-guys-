import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiShoppingBag, FiHeart } from 'react-icons/fi'
import { LuMoon, LuSun } from 'react-icons/lu'
import { useTheme } from '../context/ThemeContext'
import { scrollToId } from '../hooks/useUtils'

const LINKS = [
  { label: 'Bears', id: 'featured' },
  { label: 'Shop', id: 'categories' },
  { label: 'Bestsellers', id: 'bestsellers' },
  { label: 'Gifts', id: 'gifts' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'About', id: 'about' },
]

export default function Navbar({ wishlistCount = 0 }) {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function go(id) {
    setOpen(false)
    setTimeout(() => scrollToId(id), open ? 250 : 0)
  }

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed inset-x-0 top-0 z-[100] flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={`flex w-full max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? 'glass shadow-soft' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <button onClick={() => go('top')} data-cursor="hover" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blush via-lavender to-sky text-white shadow-soft">
              <FaPaw />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Plush<span className="gradient-text">é</span>
            </span>
          </button>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  data-cursor="hover"
                  className="rounded-full px-4 py-2 text-sm font-semibold text-ink/80 transition-colors hover:bg-white/60 hover:text-ink dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle dark mode"
              data-cursor="hover"
              className="grid h-10 w-10 place-items-center rounded-full text-ink/80 transition-colors hover:bg-white/60 dark:text-white/80 dark:hover:bg-white/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? <LuSun size={18} /> : <LuMoon size={18} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              aria-label="Wishlist"
              data-cursor="hover"
              className="relative hidden h-10 w-10 place-items-center rounded-full text-ink/80 transition-colors hover:bg-white/60 dark:text-white/80 dark:hover:bg-white/10 sm:grid"
            >
              <FiHeart size={18} />
              {wishlistCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-blush px-1 text-[10px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            <button
              data-cursor="hover"
              className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] dark:bg-white dark:text-ink sm:flex"
            >
              <FiShoppingBag size={16} /> Bag
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              data-cursor="hover"
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-white/60 dark:text-white dark:hover:bg-white/10 lg:hidden"
            >
              {open ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[98] bg-ink/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed inset-x-3 top-20 z-[99] origin-top rounded-4xl glass-card p-5 lg:hidden"
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ul className="flex flex-col">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.05 }}
                  >
                    <button
                      onClick={() => go(l.id)}
                      className="w-full border-b border-ink/5 py-3.5 text-left font-display text-2xl font-medium dark:border-white/10"
                    >
                      {l.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <button
                onClick={() => go('newsletter')}
                className="btn mt-5 w-full bg-gradient-to-r from-blush via-lavender to-sky py-3.5 text-white shadow-card"
              >
                <FiShoppingBag /> Shop the collection
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

/* Inline paw icon to avoid an extra icon import path */
function FaPaw() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="7" cy="8" r="2.1" />
      <circle cx="12" cy="6.4" r="2.1" />
      <circle cx="17" cy="8" r="2.1" />
      <circle cx="19" cy="13" r="1.8" />
      <path d="M12 11c-3 0-5.5 2-5.5 4.4 0 1.9 1.7 2.6 3 2.6 1 0 1.7-.5 2.5-.5s1.5.5 2.5.5c1.3 0 3-.7 3-2.6C17.5 13 15 11 12 11z" />
    </svg>
  )
}
