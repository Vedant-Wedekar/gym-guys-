import {
  GiWeightLiftingUp,
  GiMeditation,
  GiLotus,
  GiWindsock,
  GiFruitBowl,
  GiHeartInside,
  GiNightSleep,
  GiStonePile,
  GiPathDistance,
  GiThreeFriends,
} from 'react-icons/gi'
import { motion } from 'framer-motion'
import { PROGRAMS, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'

const ICONS = {
  GiWeightLiftingUp,
  GiMeditation,
  GiLotus,
  GiWindsock,
  GiFruitBowl,
  GiHeartInside,
  GiNightSleep,
  GiStonePile,
  GiPathDistance,
  GiThreeFriends,
}

const TONES = {
  emerald: 'bg-emerald-soft text-emerald-deep',
  sage: 'bg-sage-soft text-sage-deep',
  lavender: 'bg-lavender-soft text-lavender-deep',
  sky: 'bg-sky-wash text-ocean-mid',
  ocean: 'bg-ocean-soft text-ocean-deep',
  sunset: 'bg-sunset-soft text-sunset-deep',
  coral: 'bg-coral-soft text-coral-deep',
  mint: 'bg-mint-soft text-emerald-deep',
}

const SPAN = { wide: 'sm:col-span-2', tall: 'sm:row-span-2', std: '' }

export default function Programs() {
  return (
    <section id="programs" className="relative bg-ivory pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-emerald-deep">Nº 01 — Programs</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
                One hub.
                <br />
                <span className="italic grad-text-emerald">Every kind of better.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              Twelve practices under one roof — start anywhere, and we'll help the rest fall into
              rhythm around it.
            </p>
          </FadeUp>
        </div>

        <Stagger
          className="mt-12 grid auto-rows-[11rem] grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-4"
          gap={0.06}
        >
          {PROGRAMS.map((p) => {
            const Icon = ICONS[p.icon]
            const isImage = Boolean(p.img)
            return (
              <motion.article
                key={p.name}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                className={`group relative overflow-hidden rounded-[1.75rem] ${SPAN[p.size || 'std']} ${
                  isImage ? '' : TONES[p.tone]
                }`}
              >
                {isImage && (
                  <>
                    <img
                      src={IMAGES[p.img]}
                      alt={p.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/8 to-transparent" />
                  </>
                )}
                <div
                  className={`relative flex h-full flex-col justify-between p-5 md:p-6 ${
                    isImage ? 'text-ivory' : ''
                  }`}
                >
                  {Icon && (
                    <Icon
                      size={30}
                      className={`transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                        isImage ? 'text-ivory/85' : 'opacity-70'
                      }`}
                    />
                  )}
                  <div>
                    <h3 className="font-display text-xl font-medium md:text-2xl">{p.name}</h3>
                    <p
                      className={`mt-1 text-sm leading-snug ${
                        isImage ? 'text-ivory/80' : 'opacity-70'
                      }`}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
