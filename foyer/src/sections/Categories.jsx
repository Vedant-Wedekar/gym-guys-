import {
  MdCleaningServices,
  MdOutdoorGrill,
  MdLocalLaundryService,
  MdCountertops,
  MdChair,
  MdDirectionsCar,
  MdPets,
  MdVolunteerActivism,
  MdYard,
  MdInventory2,
  MdAutoAwesome,
} from 'react-icons/md'
import { motion } from 'framer-motion'
import { CATEGORIES, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem } from '../components/ui/motion'

const ICONS = {
  MdCleaningServices,
  MdOutdoorGrill,
  MdLocalLaundryService,
  MdCountertops,
  MdChair,
  MdDirectionsCar,
  MdPets,
  MdVolunteerActivism,
  MdYard,
  MdInventory2,
  MdAutoAwesome,
}

const TONES = {
  sky: 'bg-sky-wash text-royal-mid',
  sunset: 'bg-sunset-soft text-sunset-deep',
  sage: 'bg-sage-soft text-sage-deep',
  emerald: 'bg-emerald-soft text-emerald-deep',
  cream: 'bg-cream text-champagne-deep',
  royal: 'bg-royal-soft text-royal-deep',
  terracotta: 'bg-terracotta-soft text-terracotta-deep',
  coral: 'bg-coral-soft text-coral-deep',
  sand: 'bg-sand-soft text-sand-deep',
  champagne: 'bg-cream text-champagne-deep',
}

const SPAN = { wide: 'sm:col-span-2', tall: 'sm:row-span-2', std: '' }

export default function Categories() {
  return (
    <section id="categories" className="relative bg-ivory pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-champagne-deep">Nº 03 — Every Category</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                If your home needs it,
                <br />
                <span className="italic grad-text-gold">it's in here.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              Eleven categories, one standard. Tap any tile to start a booking with that service
              pre-selected.
            </p>
          </FadeUp>
        </div>

        <Stagger
          className="mt-12 grid auto-rows-[10.5rem] grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:gap-5 lg:grid-cols-4"
          gap={0.05}
        >
          {CATEGORIES.map((c) => {
            const Icon = ICONS[c.icon]
            const isImage = Boolean(c.img)
            return (
              <motion.a
                key={c.name}
                href="#process"
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                className={`group relative overflow-hidden rounded-[1.75rem] ${SPAN[c.size || 'std']} ${
                  isImage ? '' : TONES[c.tone]
                }`}
              >
                {isImage && (
                  <>
                    <img
                      src={IMAGES[c.img]}
                      alt={c.name}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/8 to-transparent" />
                  </>
                )}
                <div
                  className={`relative flex h-full flex-col justify-between p-5 ${
                    isImage ? 'text-ivory' : ''
                  }`}
                >
                  <Icon
                    size={26}
                    className={`transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                      isImage ? 'text-ivory/85' : 'opacity-70'
                    }`}
                  />
                  <div>
                    <h3 className="font-display text-xl md:text-2xl">{c.name}</h3>
                    <p className={`mt-0.5 text-sm ${isImage ? 'text-ivory/80' : 'opacity-70'}`}>
                      {c.desc}
                    </p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
