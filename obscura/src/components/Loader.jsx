import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const WORDS = ['ATTENTION', 'CONTENT', 'CINEMA', 'CUSTOMERS']

export default function Loader() {
  const [count, setCount] = useState(0)
  const [word, setWord] = useState(0)

  useEffect(() => {
    const c = setInterval(() => setCount((n) => Math.min(100, n + 2)), 36)
    const w = setInterval(() => setWord((n) => (n + 1) % WORDS.length), 480)
    return () => {
      clearInterval(c)
      clearInterval(w)
    }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-paper p-6 md:p-10"
      exit={{ clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
      initial={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
        <span>OBSCURA®</span>
        <span>Social Growth Studio</span>
      </div>

      <div className="overflow-hidden">
        <motion.p
          key={word}
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-display display-tight text-[14vw] font-extrabold md:text-[9vw]"
        >
          {WORDS[word]}
        </motion.p>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-[11px] uppercase tracking-widest2 text-smoke">Loading the reel</span>
        <span className="font-display text-6xl font-bold tabular-nums md:text-8xl">{count}%</span>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-ink"
        animate={{ width: `${count}%` }}
        transition={{ ease: 'linear', duration: 0.05 }}
      />
    </motion.div>
  )
}
