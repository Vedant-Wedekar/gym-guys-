import { useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { HiArrowUpRight } from 'react-icons/hi2'
import { WORK, IMAGES } from '../data/content'
import { Marquee } from '../components/ui/motion'
import { SplitReveal, GsapRise } from '../components/ui/gsapReveal'

const ACCENT = {
  crimson: 'text-crimson-hi border-crimson-hi',
  royal: 'text-royal-hi border-royal-hi',
  emerald: 'text-emerald-hi border-emerald-hi',
  tangerine: 'text-tangerine-hi border-tangerine-hi',
}

/* infinite film-strip of work */
function FilmStrip() {
  return (
    <div className="border-y border-line py-6">
      <Marquee speed={42}>
        {WORK.strip.map((w) => (
          <figure key={w.name} className="group relative mx-3 w-72 shrink-0 overflow-hidden rounded-2xl md:w-96">
            <img
              src={IMAGES[w.img]}
              alt={w.name}
              loading="lazy"
              className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-60"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/70 to-transparent p-4 text-paper">
              <div>
                <p className="font-display text-lg font-bold leading-tight">{w.name}</p>
                <p className="text-xs opacity-75">{w.tag}</p>
              </div>
              <HiArrowUpRight className="opacity-0 transition-opacity group-hover:opacity-100" />
            </figcaption>
          </figure>
        ))}
      </Marquee>
    </div>
  )
}

/* raw vs grade comparison */
function GradeSlider() {
  const ref = useRef(null)
  const [pos, setPos] = useState(50)
  const dragging = useRef(false)

  const update = useCallback((clientX) => {
    const r = ref.current.getBoundingClientRect()
    setPos(Math.min(96, Math.max(4, ((clientX - r.left) / r.width) * 100)))
  }, [])

  const start = (e) => {
    dragging.current = true
    update(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const move = (e) => {
    if (!dragging.current) return
    update(e.touches ? e.touches[0].clientX : e.clientX)
  }
  const end = () => (dragging.current = false)

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
      role="slider"
      aria-label="Raw footage versus final grade"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 4))
        if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 4))
      }}
      className="ba-handle group relative aspect-[16/9] cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-2xl shadow-ink/20 md:aspect-[21/9]"
    >
      <img src={WORK.grade.after} alt="Final grade" loading="lazy" className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <img
        src={WORK.grade.before}
        alt="Raw footage"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover grayscale"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />
      <span className="absolute left-4 top-4 rounded-full bg-ink/60 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-paper backdrop-blur">
        Raw
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-ink/60 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-paper backdrop-blur">
        OBSCURA grade
      </span>
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <span className="absolute inset-y-0 -ml-px w-0.5 bg-paper/90" />
        <span className="absolute top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-sm text-ink shadow-xl shadow-ink/30 transition-transform group-active:scale-95">
          ◂▸
        </span>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] px-5 md:px-10 lg:pl-28">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
          Selected work — the gallery
        </p>
        <SplitReveal
          text="Treated like art. Measured like ads."
          as="h2"
          className="mt-4 max-w-3xl font-display display-tight text-4xl font-extrabold md:text-6xl"
        />
      </div>

      <div className="mt-10 md:mt-14">
        <FilmStrip />
      </div>

      {/* broken-grid case files */}
      <div className="mx-auto mt-14 grid max-w-[90rem] gap-6 px-5 md:grid-cols-12 md:px-10 lg:pl-28">
        {WORK.cases.map((c, i) => (
          <GsapRise
            key={c.file}
            delay={i * 0.05}
            className={`${c.wide ? 'md:col-span-7' : 'md:col-span-5'} ${
              i === 1 ? 'md:mt-16' : i === 2 ? 'md:-mt-10' : ''
            }`}
          >
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group h-full overflow-hidden rounded-3xl border border-line bg-paper"
            >
              <div className="relative overflow-hidden">
                <img
                  src={IMAGES[c.img]}
                  alt={c.name}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    c.wide ? 'h-64 md:h-80' : 'h-64'
                  }`}
                />
                <span className="absolute left-4 top-4 rounded-full bg-paper px-3.5 py-1.5 font-display text-[11px] font-bold tracking-widest2">
                  {c.file}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold md:text-3xl">{c.name}</h3>
                  <HiArrowUpRight className="mt-1.5 shrink-0 opacity-25 transition-all group-hover:rotate-45 group-hover:opacity-100" />
                </div>
                <p className={`mt-2 inline-block border-b-2 pb-0.5 font-display text-lg font-semibold ${ACCENT[c.accent]}`}>
                  {c.result}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{c.desc}</p>
              </div>
            </motion.article>
          </GsapRise>
        ))}
      </div>

      {/* grade slider */}
      <div className="mx-auto mt-16 max-w-[90rem] px-5 md:px-10 lg:pl-28">
        <GsapRise>
          <p className="mb-5 max-w-md text-sm text-smoke">{WORK.grade.caption}</p>
          <GradeSlider />
        </GsapRise>
      </div>
    </section>
  )
}
