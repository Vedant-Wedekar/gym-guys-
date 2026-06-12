import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { STORIES } from '../data/content'
import { Eyebrow, FadeUp, Magnetic } from '../components/ui/motion'

const CARD_TONE = {
  sky: 'bg-sky-wash text-royal-deep',
  sage: 'bg-sage-soft text-sage-deep',
  sunset: 'bg-sunset-soft text-sunset-deep',
  coral: 'bg-coral-soft text-coral-deep',
}

export default function Stories() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const s = STORIES[index]

  const go = (d) => {
    setDir(d)
    setIndex((i) => (i + d + STORIES.length) % STORIES.length)
  }

  return (
    <section id="stories" className="wash-coral relative overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Eyebrow className="justify-center text-coral-deep">Nº 07 — Customer Stories</Eyebrow>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
            Homes that became <span className="italic grad-text-sunset">easier to love.</span>
          </h2>
        </FadeUp>

        <div className="relative mt-12">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 70, rotate: dir * 1.5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: dir * -70, rotate: dir * -1.5 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1)
                else if (info.offset.x > 60) go(-1)
              }}
              className={`mx-auto max-w-2xl cursor-grab rounded-[2.5rem] p-8 shadow-xl shadow-ink/6 active:cursor-grabbing md:p-12 ${CARD_TONE[s.tone]}`}
            >
              <p className="font-display text-2xl italic leading-snug md:text-3xl">“{s.text}”</p>
              <footer className="mt-7">
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-widest2 opacity-70">{s.detail}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Magnetic>
            <button
              onClick={() => go(-1)}
              aria-label="Previous story"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/12 bg-ivory transition-colors hover:bg-coral-mid hover:text-ivory"
            >
              <HiArrowLeft />
            </button>
          </Magnetic>
          <div className="flex gap-2">
            {STORIES.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Story ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-coral-mid' : 'w-1.5 bg-ink/15'
                }`}
              />
            ))}
          </div>
          <Magnetic>
            <button
              onClick={() => go(1)}
              aria-label="Next story"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/12 bg-ivory transition-colors hover:bg-coral-mid hover:text-ivory"
            >
              <HiArrowRight />
            </button>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}
