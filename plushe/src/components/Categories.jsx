import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import { SectionHeading, Stagger, staggerItem } from './Reveal'
import PlushieArt from './PlushieArt'
import { categories } from '../data/content'
import { scrollToId } from '../hooks/useUtils'

export default function Categories() {
  return (
    <section id="categories" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Shop by mood"
          title="Find your little something"
          lead="From heirloom bears to desk-sized joy — every category is curated to feel like a treat."
          accent="#C9B6FF"
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.button
              key={c.id}
              variants={staggerItem}
              onClick={() => scrollToId('featured')}
              data-cursor="hover"
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-4xl glass-card p-5 text-left sm:p-6"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full blur-2xl transition-opacity duration-500 group-hover:opacity-90"
                style={{ background: `${c.accent}88`, opacity: 0.6 }}
              />
              <div className="relative z-10 mb-4 h-24 w-24 transition-transform duration-500 group-hover:scale-110 sm:h-28 sm:w-28">
                <PlushieArt {...c.art} className="h-full w-full drop-shadow-[0_14px_22px_rgba(120,90,180,0.2)]" />
              </div>
              <div className="relative z-10 mt-auto">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{c.name}</h3>
                <p className="text-sm text-ink-mute dark:text-white/40">{c.count} treasures</p>
              </div>
              <span className="absolute right-5 top-5 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/70 text-ink opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:opacity-100 dark:bg-night-card/70 dark:text-white">
                <FiArrowUpRight size={17} />
              </span>
            </motion.button>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
