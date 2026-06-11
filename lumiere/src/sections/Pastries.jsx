import { PASTRIES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'
import { motion } from 'framer-motion'

const span = {
  tall: 'md:row-span-2',
  wide: 'md:col-span-2',
  std: '',
}

export default function Pastries() {
  return (
    <section id="patisserie" className="wash-cream relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-champagne-deep">Nº 02 — La Vitrine</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                French pastries,
                <br />
                <span className="italic grad-text-gold">baked before Paris wakes.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              Everything in the vitrine is made downstairs, the same morning you eat it. When a
              tray sells out, it sells out — that's the deal.
            </p>
          </FadeUp>
        </div>

        <Stagger
          className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:auto-rows-[14rem] md:grid-cols-3"
          gap={0.08}
        >
          {PASTRIES.map((p) => (
            <motion.article
              key={p.name}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-[1.75rem] ${span[p.size]}`}
            >
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/8 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-ivory md:p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl md:text-2xl">{p.name}</h3>
                  <span className="shrink-0 rounded-full bg-ivory/15 px-3 py-1 text-xs backdrop-blur">
                    {p.price}
                  </span>
                </div>
                <p className="mt-1.5 max-h-0 overflow-hidden text-sm leading-relaxed opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-85">
                  {p.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
