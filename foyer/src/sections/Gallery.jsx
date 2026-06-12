import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { BEFORE_AFTER, GALLERY } from '../data/content'
import { Eyebrow, FadeUp } from '../components/ui/motion'

function BeforeAfter() {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const r = ref.current.getBoundingClientRect()
    const pct = ((clientX - r.left) / r.width) * 100
    setPos(Math.min(96, Math.max(4, pct)))
  }, [])

  const start = (e) => {
    dragging.current = true
    update(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const move = (e) => {
    if (!dragging.current) return
    update(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const end = () => {
    dragging.current = false
  }

  return (
    <div
      ref={ref}
      onMouseDown={start}
      onMouseMove={move}
      onMouseUp={end}
      onMouseLeave={end}
      onTouchStart={start}
      onTouchMove={move}
      onTouchEnd={end}
      className="ba-handle group relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-2xl shadow-ink/15 md:aspect-[21/9] md:rounded-[2.5rem]"
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4))
      }}
    >
      {/* after (base) */}
      <img
        src={BEFORE_AFTER.after}
        alt="After a FOYER visit"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* before (clipped via clip-path so it never distorts) */}
      <img
        src={BEFORE_AFTER.before}
        alt="Before a FOYER visit"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* labels */}
      <span className="glass-dark absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-ivory">
        Before
      </span>
      <span className="glass-dark absolute right-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-ivory">
        After
      </span>

      {/* handle */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <span className="absolute inset-y-0 -ml-px w-0.5 bg-ivory/90" />
        <span className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-ivory shadow-xl shadow-ink/25 transition-transform group-active:scale-95">
          <span className="text-sm tracking-tighter text-ink">◂▸</span>
        </span>
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-ink/65">Nº 05 — Before & After</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                Proof you can
                <br />
                <span className="italic text-stroke">drag.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              {BEFORE_AFTER.caption}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.15}>
          <div className="mt-12 md:mt-16">
            <BeforeAfter />
          </div>
        </FadeUp>

        {/* masonry */}
        <div className="mt-6 columns-2 gap-4 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative break-inside-avoid overflow-hidden rounded-3xl ${g.h}`}
            >
              <img
                src={g.img}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/60 to-transparent p-4 text-sm text-ivory transition-transform duration-500 group-hover:translate-y-0">
                {g.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
