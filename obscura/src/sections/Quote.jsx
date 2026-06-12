import { QUOTE, IMAGES, PROCESS } from '../data/content'
import { SplitReveal, GsapRise } from '../components/ui/gsapReveal'
import { ParallaxImage } from '../components/ui/motion'

export default function Quote() {
  return (
    <section className="relative bg-paper py-20 md:py-28">
      {/* giant editorial quote on crimson */}
      <div className="grad-crimson mx-auto max-w-[90rem] overflow-hidden rounded-[2.5rem] px-6 py-16 text-paper md:rounded-[3rem] md:px-16 md:py-24 lg:ml-28 lg:mr-10">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 opacity-65">
          One client, verbatim
        </p>
        <SplitReveal
          text={`“${QUOTE.text}”`}
          as="blockquote"
          className="mt-6 max-w-4xl font-display display-tight text-3xl font-bold md:text-5xl"
          stagger={0.018}
        />
        <GsapRise className="mt-8 flex items-center gap-4">
          <img
            src={IMAGES[QUOTE.img]}
            alt={QUOTE.name}
            loading="lazy"
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{QUOTE.name}</p>
            <p className="text-xs opacity-75">{QUOTE.role}</p>
          </div>
        </GsapRise>
      </div>

      {/* process — four acts */}
      <div className="mx-auto mt-20 max-w-[90rem] px-5 md:mt-28 md:px-10 lg:pl-28">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
          How a project runs
        </p>
        <SplitReveal
          text="Four acts. No filler scenes."
          as="h2"
          className="mt-4 font-display display-tight text-4xl font-extrabold md:text-5xl"
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <GsapRise key={p.step} delay={i * 0.08} className="group bg-paper p-7 transition-colors hover:bg-lavender-tint md:p-8">
              <span className="font-display text-sm font-bold text-lavender-lo">{p.step}</span>
              <h3 className="mt-3 font-display text-2xl font-bold md:text-3xl">{p.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-smoke">{p.desc}</p>
            </GsapRise>
          ))}
        </div>
      </div>
    </section>
  )
}
