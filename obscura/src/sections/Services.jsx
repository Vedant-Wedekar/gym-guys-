import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HiArrowRight } from 'react-icons/hi'
import { SERVICES, IMAGES } from '../data/content'
import { SplitReveal } from '../components/ui/gsapReveal'

gsap.registerPlugin(ScrollTrigger)

function Panel({ s }) {
  return (
    <article
      className={`${s.grad} relative flex h-[78vh] w-[88vw] shrink-0 snap-center flex-col justify-between overflow-hidden rounded-3xl p-7 text-paper md:h-[74vh] md:p-10 lg:w-[64vw]`}
    >
      {/* ghost number */}
      <span className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[11rem] font-extrabold leading-none text-paper opacity-12 md:text-[16rem]">
        {s.num}
      </span>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest2 opacity-65">
            Service {s.num} / 07
          </p>
          <h3 className="mt-3 font-display display-tight text-4xl font-extrabold md:text-6xl">
            {s.name}
          </h3>
        </div>
      </div>

      <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <ul className="space-y-2">
            {s.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                <span className="h-1.5 w-1.5 rotate-45 bg-paper/80" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-sm font-display text-lg italic opacity-85 md:text-xl">
            “{s.line}”
          </p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            Brief us <HiArrowRight size={14} />
          </a>
        </div>
        <div className="hidden overflow-hidden rounded-2xl md:block">
          <img
            src={IMAGES[s.img]}
            alt={s.name}
            loading="lazy"
            className="h-52 w-72 object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      const track = trackRef.current
      const amount = () => track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: () => -amount(),
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${amount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    })

    return () => mm.revert()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="relative overflow-hidden bg-paper py-16 lg:h-screen lg:py-0">
      <div className="px-5 pb-8 pt-4 md:px-10 lg:absolute lg:left-28 lg:top-10 lg:z-10 lg:p-0">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
          What we do — scroll sideways
        </p>
        <SplitReveal
          text="Seven ways we make brands unskippable."
          as="h2"
          className="mt-3 max-w-xl font-display display-tight text-4xl font-extrabold md:text-5xl"
        />
      </div>

      {/* desktop: GSAP translates this track · mobile: native snap scroll */}
      <div
        ref={trackRef}
        className="snap-row mt-6 flex gap-5 overflow-x-auto px-5 md:gap-8 md:px-10 lg:mt-0 lg:h-screen lg:items-end lg:overflow-visible lg:px-28 lg:pb-12"
      >
        {SERVICES.map((s) => (
          <Panel key={s.num} s={s} />
        ))}
        {/* end card */}
        <a
          href="#contact"
          className="group relative flex h-[78vh] w-[70vw] shrink-0 snap-center flex-col items-center justify-center rounded-3xl border-2 border-dashed border-ink/20 text-center transition-colors hover:border-ink md:h-[74vh] lg:w-[34vw]"
        >
          <span className="font-display text-5xl font-extrabold transition-transform duration-500 group-hover:scale-110 md:text-6xl">
            08
          </span>
          <span className="mt-3 max-w-[12rem] font-display text-xl font-bold">
            Your project goes here.
          </span>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper">
            Claim the slot <HiArrowRight size={14} />
          </span>
        </a>
      </div>
    </section>
  )
}
