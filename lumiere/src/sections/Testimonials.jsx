import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { TESTIMONIALS } from '../data/content'
import { Eyebrow, FadeUp, Magnetic, Marquee } from '../components/ui/motion'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(1)
  const t = TESTIMONIALS[index]

  const go = (d) => {
    setDir(d)
    setIndex((i) => (i + d + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <section className="wash-sky relative overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <Eyebrow className="justify-center text-royal-mid">Nº 07 — Mots Doux</Eyebrow>
        <FadeUp delay={0.1}>
          <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
            What the regulars <span className="italic grad-text-royal">whisper.</span>
          </h2>
        </FadeUp>

        <div className="relative mt-12 min-h-[16rem] md:min-h-[14rem]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60) go(1)
                else if (info.offset.x > 60) go(-1)
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              <p className="font-display text-2xl italic leading-snug md:text-3xl">
                “{t.text}”
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs uppercase tracking-widest2 text-stone">{t.place}</p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Magnetic>
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/12 bg-ivory transition-colors hover:bg-royal-mid hover:text-ivory"
            >
              <HiArrowLeft />
            </button>
          </Magnetic>
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDir(i > index ? 1 : -1)
                  setIndex(i)
                }}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-7 bg-royal-mid' : 'w-1.5 bg-ink/15'
                }`}
              />
            ))}
          </div>
          <Magnetic>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-ink/12 bg-ivory transition-colors hover:bg-royal-mid hover:text-ivory"
            >
              <HiArrowRight />
            </button>
          </Magnetic>
        </div>
      </div>

      {/* gentle infinite strip of places */}
      <div className="mt-16 opacity-65">
        <Marquee speed={40}>
          {TESTIMONIALS.map((x) => (
            <span
              key={x.name}
              className="mx-8 text-xs uppercase tracking-widest2 text-royal-deep"
            >
              ★★★★★ &nbsp; {x.name} · {x.place}
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
