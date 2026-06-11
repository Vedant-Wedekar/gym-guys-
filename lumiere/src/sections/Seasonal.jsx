import { SEASONAL, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'
import { motion } from 'framer-motion'

export default function Seasonal() {
  return (
    <section id="seasonal" className="wash-sage relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow className="text-sage-deep">Nº 03 — {SEASONAL.season}</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                {SEASONAL.title}
                <span className="italic text-sage-deep">.</span>
              </h2>
            </FadeUp>

            <Stagger className="mt-10 divide-y divide-sage-deep/12" gap={0.1}>
              {SEASONAL.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={staggerItem}
                  className="group flex items-start gap-5 py-6 first:pt-0"
                >
                  <span className="mt-1 font-display text-sm italic text-sage-deep/65">
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl transition-colors group-hover:text-sage-deep">
                        {item.name}
                      </h3>
                      <span className="h-px flex-1 bg-sage-deep/15" />
                      <span className="font-display text-lg text-sage-deep">{item.price}</span>
                    </div>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-stone">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>

          <div className="relative lg:sticky lg:top-28">
            <FadeUp delay={0.15}>
              <ParallaxImage
                src={IMAGES.berryTart}
                alt="Summer fruit tart"
                className="grain relative aspect-[4/5] rounded-[2.5rem] shadow-2xl shadow-sage-deep/15"
                strength={12}
              />
            </FadeUp>
            <FadeUp delay={0.3}>
              <div className="glass absolute -bottom-6 -left-2 max-w-[15rem] rounded-2xl p-4 md:-left-8 md:p-5">
                <p className="text-[10px] uppercase tracking-widest2 text-sage-deep">
                  Until 31 August
                </p>
                <p className="mt-1 font-display text-lg italic leading-snug">
                  Then autumn writes a new card.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
