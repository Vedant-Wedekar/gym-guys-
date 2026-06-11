import { COFFEE } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'
import { motion } from 'framer-motion'

export default function SignatureCoffee() {
  return (
    <section id="coffee" className="wash-emerald curve-top relative -mt-8 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow className="text-emerald-deep">Nº 01 — The Slow Bar</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                Signature <span className="italic grad-text-emerald">coffee</span>,<br />
                pulled with patience.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-md leading-relaxed text-stone">
                Three single origins, roasted in small batches every Tuesday. Our baristas dial in
                the grind twice a day — once at dawn, once when the afternoon light changes the
                room.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-deep/15 bg-ivory/70 px-5 py-3 text-sm text-emerald-deep">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-mid" />
                Roasting today · Yirgacheffe lot 14
              </div>
            </FadeUp>
          </div>

          {/* cards */}
          <Stagger className="grid gap-6 sm:grid-cols-2" gap={0.12}>
            {COFFEE.map((c, i) => (
              <motion.article
                key={c.name}
                variants={staggerItem}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                className={`group overflow-hidden rounded-[1.75rem] bg-ivory shadow-lg shadow-emerald-deep/8 ${
                  i % 2 === 1 ? 'sm:mt-12' : ''
                }`}
              >
                <div className="relative">
                  <ParallaxImage
                    src={c.img}
                    alt={c.name}
                    className="h-56 md:h-64"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                    strength={8}
                  />
                  <span className="glass absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-emerald-deep">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{c.name}</h3>
                    <span className="shrink-0 font-display text-xl text-emerald-mid">
                      {c.price}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-stone">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
