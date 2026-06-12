import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { NUMBERS } from '../data/content'
import { Counter } from '../components/ui/motion'
import { SplitReveal, GsapRise } from '../components/ui/gsapReveal'

gsap.registerPlugin(ScrollTrigger)

function Bars() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current.querySelectorAll('.bar-fill'),
        { width: '0%' },
        {
          width: (i, el) => el.dataset.pct + '%',
          duration: 1.4,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className="space-y-6">
      {NUMBERS.bars.map((b) => (
        <div key={b.label}>
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-medium">{b.label}</span>
            <span className="font-display text-xl font-bold">{b.pct}%</span>
          </div>
          <div className="mt-2 h-3 overflow-hidden rounded-full bg-cyan-tint">
            <div data-pct={b.pct} className={`bar-fill h-full rounded-full ${b.tone}`} style={{ width: '0%' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Numbers() {
  return (
    <section id="numbers" className="relative overflow-hidden bg-paper py-20 md:py-28">
      {/* cyan personality block */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-cyan-tint md:w-2/5" />

      <div className="relative mx-auto grid max-w-[90rem] gap-12 px-5 md:px-10 lg:grid-cols-2 lg:gap-20 lg:pl-28">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
            The dashboard — live-ish
          </p>
          <SplitReveal
            text="Cinema for the feed. Spreadsheets for the boardroom."
            as="h2"
            className="mt-4 font-display display-tight text-4xl font-extrabold md:text-5xl"
          />
          <GsapRise className="mt-8">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10">
              {NUMBERS.counters.map((c) => (
                <div key={c.label} className="border-l border-line pl-5">
                  <p className="font-display text-4xl font-extrabold md:text-5xl">
                    {c.display ? c.display : <Counter value={c.value} suffix={c.suffix} />}
                  </p>
                  <p className="mt-1.5 text-[11px] uppercase tracking-widest2 text-smoke">{c.label}</p>
                </div>
              ))}
            </div>
          </GsapRise>
        </div>

        <GsapRise delay={0.15} className="self-center rounded-3xl border border-line bg-paper p-7 shadow-2xl shadow-cyan-lo/8 md:p-9">
          <div className="mb-7 flex items-center justify-between">
            <span className="font-display text-lg font-bold">Client growth report</span>
            <span className="rounded-full bg-cyan-tint px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-cyan-lo">
              Last 90 days
            </span>
          </div>
          <Bars />
          <p className="mt-7 text-xs text-smoke">
            Aggregated across active retainers · refreshed monthly · receipts on request.
          </p>
        </GsapRise>
      </div>
    </section>
  )
}
