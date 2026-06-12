import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ivory"
      initial={{ y: 0 }}
      exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
    >
      {/* sparkle */}
      <motion.span
        className="font-display text-4xl text-champagne"
        animate={{ rotate: [0, 180], scale: [1, 1.25, 1] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        ✦
      </motion.span>
      <div className="mt-5 overflow-hidden">
        <motion.h1
          className="font-display text-4xl tracking-[0.2em] text-ink md:text-5xl"
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          FOYER
        </motion.h1>
      </div>
      <motion.p
        className="mt-3 text-[11px] uppercase tracking-widest2 text-stone"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Home, beautifully kept
      </motion.p>
      <motion.div
        className="mt-8 h-px w-40 origin-left bg-champagne"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
      />
    </motion.div>
  )
}
