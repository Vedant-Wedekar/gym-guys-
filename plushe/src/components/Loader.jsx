import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PlushieArt from './PlushieArt'

/**
 * Branded loading screen. Counts to 100, then lifts away like a curtain.
 * Calls onDone when finished so the page can run its entrance animations.
 */
export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    let v = 0
    const id = setInterval(() => {
      v += Math.random() * 16 + 6
      if (v >= 100) {
        v = 100
        clearInterval(id)
        setTimeout(() => {
          setShow(false)
          onDone?.()
        }, 450)
      }
      setProgress(Math.floor(v))
    }, 180)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream dark:bg-night"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', borderBottomLeftRadius: '40%', borderBottomRightRadius: '40%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [-3, 3, -3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="h-32 w-32 sm:h-40 sm:w-40"
          >
            <PlushieArt type="bear" main="#FFC4D8" accent="#FFE0EC" cheek="#FF8FBE" className="h-full w-full" />
          </motion.div>

          <p className="mt-8 font-display text-3xl font-semibold tracking-tight">
            Plush<span className="gradient-text">é</span>
          </p>
          <p className="mt-1 text-sm text-ink-mute dark:text-white/40">A little luxury you can hug</p>

          <div className="mt-7 h-1.5 w-48 overflow-hidden rounded-full bg-ink/10 dark:bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-blush via-lavender to-sky"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs font-semibold tabular-nums text-ink-mute dark:text-white/40">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
