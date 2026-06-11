import { CHEF } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'
import { motion } from 'framer-motion'

const ringColor = {
  terracotta: 'group-hover:ring-terracotta-mid/45',
  gold: 'group-hover:ring-champagne/55',
  sage: 'group-hover:ring-sage-mid/55',
}

export default function ChefRecs() {
  return (
    <section className="wash-terracotta relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow className="justify-center text-terracotta-deep">
            Nº 05 — La Cheffe Recommande
          </Eyebrow>
          <FadeUp delay={0.1}>
            <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              Three ways to do it{' '}
              <span className="italic text-terracotta-deep">properly.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 font-display text-xl italic leading-snug text-stone md:text-2xl">
              “{CHEF.quote}”
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest2 text-terracotta-deep">
              — {CHEF.name}, {CHEF.role}
            </p>
          </FadeUp>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3" gap={0.12}>
          {CHEF.picks.map((pick, i) => (
            <motion.article
              key={pick.name}
              variants={staggerItem}
              whileHover={{ y: -10, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className={`group overflow-hidden rounded-[2rem] bg-ivory shadow-xl shadow-terracotta-deep/8 ring-1 ring-transparent transition-shadow duration-500 ${ringColor[pick.color]} ${
                i === 1 ? 'md:-mt-8' : ''
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={pick.img}
                  alt={pick.name}
                  loading="lazy"
                  className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-[10px] uppercase tracking-widest2 text-terracotta-mid">
                  Pairing 0{i + 1}
                </p>
                <h3 className="mt-2 font-display text-2xl">{pick.name}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone">{pick.desc}</p>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
