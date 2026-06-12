import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { FEATURED, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'

const TONE = {
  sky: 'text-royal-mid bg-sky-wash',
  sunset: 'text-sunset-deep bg-sunset-soft',
  sage: 'text-sage-deep bg-sage-soft',
}

export default function Featured() {
  return (
    <section id="services" className="wash-sky curve-top relative -mt-8 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-royal-mid">Nº 01 — Featured Services</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                The rituals our members
                <br />
                <span className="italic grad-text-royal">never cancel.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              Three services carry half our bookings. Start with one — your home will negotiate
              the rest.
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-12 grid gap-6 md:mt-16 lg:grid-cols-3" gap={0.12}>
          {FEATURED.map((f, i) => (
            <motion.article
              key={f.name}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className={`group overflow-hidden rounded-[2rem] bg-ivory shadow-xl shadow-royal-deep/8 ${
                i === 1 ? 'lg:-mt-8' : ''
              }`}
            >
              <div className="relative">
                <ParallaxImage
                  src={IMAGES[f.img]}
                  alt={f.name}
                  className="h-60 md:h-64"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                  strength={8}
                />
                <span
                  className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 ${TONE[f.tone]}`}
                >
                  {f.tag}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl md:text-3xl">{f.name}</h3>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-stone">{f.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl text-champagne-deep">{f.price}</span>
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 transition-all duration-300 group-hover:-rotate-45 group-hover:border-champagne group-hover:bg-champagne group-hover:text-ivory">
                    <HiArrowRight size={15} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
