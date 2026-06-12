import { motion } from 'framer-motion'
import { HiCheck, HiSparkles } from 'react-icons/hi'
import { PLANS } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, Magnetic } from '../components/ui/motion'

export default function Plans() {
  return (
    <section id="plans" className="wash-cream relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-champagne-deep">Nº 08 — Membership</Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              Choose how kept
              <span className="italic grad-text-gold"> you'd like to be.</span>
            </h2>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-center" gap={0.12}>
          {PLANS.map((p) => (
            <motion.article
              key={p.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className={`relative rounded-[2rem] p-7 md:p-8 ${
                p.featured
                  ? 'bg-ink text-ivory shadow-2xl shadow-ink/25 lg:scale-105'
                  : 'border border-ink/8 bg-ivory shadow-lg shadow-ink/4'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-champagne px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest2 text-ink">
                  <HiSparkles /> Most loved
                </span>
              )}
              <h3 className="font-display text-3xl">{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? 'text-ivory/70' : 'text-stone'}`}>
                {p.tagline}
              </p>
              <p className="mt-5 font-display text-4xl md:text-5xl">
                {p.price}
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <HiCheck
                      className={`mt-0.5 shrink-0 ${
                        p.featured ? 'text-champagne' : 'text-emerald-mid'
                      }`}
                    />
                    <span className={p.featured ? 'text-ivory/85' : 'text-stone'}>{f}</span>
                  </li>
                ))}
              </ul>
              <Magnetic className="mt-8 block">
                <a
                  href="#contact"
                  className={`block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                    p.featured
                      ? 'bg-champagne text-ink hover:bg-ivory'
                      : 'bg-ink text-ivory hover:bg-emerald-deep'
                  }`}
                >
                  {p.cta}
                </a>
              </Magnetic>
            </motion.article>
          ))}
        </Stagger>

        <FadeUp delay={0.25}>
          <p className="mt-10 text-center text-sm text-stone">
            All plans pause-able anytime · no lock-in · helpers earn above-market rates on every
            one.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
