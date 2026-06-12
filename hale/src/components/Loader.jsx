import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
    >
      {/* breathing ring */}
      <motion.div
        className="grid h-28 w-28 place-items-center rounded-full border border-emerald-mid/30"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <motion.div
          className="h-16 w-16 rounded-full bg-gradient-to-br from-mint-mid via-sky-tone to-lavender-mid"
          animate={{ scale: [1, 0.82, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="mt-8 overflow-hidden">
        <motion.h1
          className="font-display text-3xl tracking-[0.3em] text-ink md:text-4xl"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          HALE
        </motion.h1>
      </div>
      <motion.p
        className="mt-2 text-[11px] uppercase tracking-widest2 text-stone"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Breathe in. You're here.
      </motion.p>
    </motion.div>
  )
}
