import { MANIFESTO } from '../data/content'
import { SplitReveal, GsapRise } from '../components/ui/gsapReveal'

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative bg-paper">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-2 lg:gap-16 lg:pl-28">
        {/* pinned word stack */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
            The manifesto
          </p>
          <h2 className="mt-4 font-display display-tight font-extrabold">
            {MANIFESTO.pinned.map((w, i) => (
              <span
                key={i}
                className={`block text-6xl md:text-8xl ${
                  i === 2 ? 'grad-text-royal' : i === 4 ? 'text-stroke' : ''
                }`}
              >
                {w}
              </span>
            ))}
          </h2>
        </div>

        {/* scrolling statements */}
        <div className="flex flex-col justify-center gap-14 md:gap-20 lg:py-24">
          {MANIFESTO.statements.map((s, i) => (
            <div key={i} className="border-l-2 border-royal-hi pl-6 md:pl-8">
              <GsapRise>
                <span className="font-display text-sm font-bold text-royal-hi">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </GsapRise>
              <SplitReveal
                text={s}
                className="mt-2 font-display text-2xl font-semibold leading-snug md:text-3xl"
                stagger={0.02}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
