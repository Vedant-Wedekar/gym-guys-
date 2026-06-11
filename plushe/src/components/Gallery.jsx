import { motion } from 'framer-motion'
import { FiHeart } from 'react-icons/fi'
import { SectionHeading } from './Reveal'

// Masonry tiles: varied heights + colorways for that Pinterest feel.
const tiles = [
  { type: 'bear', main: '#FFC4D8', accent: '#FFE0EC', cheek: '#FF8FBE', h: 'h-72', likes: '2.4k' },
  { type: 'bunny', main: '#E7DCFF', accent: '#F4EEFF', cheek: '#C9B6FF', h: 'h-56', likes: '1.8k' },
  { type: 'duck', main: '#FFF3C9', accent: '#FFE08A', cheek: '#FFC4A3', h: 'h-64', likes: '980' },
  { type: 'cat', main: '#D4F7E8', accent: '#EBFBF4', cheek: '#9FEFCE', h: 'h-80', likes: '3.1k' },
  { type: 'bunny', main: '#D9EDFF', accent: '#EEF7FF', cheek: '#A8D8FF', h: 'h-60', likes: '1.2k' },
  { type: 'bear', main: '#FFD7A8', accent: '#FFF0D6', cheek: '#FFB8D4', h: 'h-72', likes: '2.0k' },
  { type: 'cat', main: '#FFD9E8', accent: '#FFEAF2', cheek: '#FF9EC4', h: 'h-56', likes: '1.5k' },
  { type: 'bear', main: '#D4F7E8', accent: '#EBFBF4', cheek: '#9FEFCE', h: 'h-64', likes: '870' },
]

import PlushieArt from './PlushieArt'

function Tile({ t, i }) {
  return (
    <motion.figure
      initial={{ opacity: 0, clipPath: 'inset(12% 12% 12% 12% round 28px)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0% round 28px)' }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.06 }}
      className={`group relative mb-4 break-inside-avoid overflow-hidden rounded-4xl ${t.h}`}
      data-cursor="hover"
    >
      <div
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
        style={{ background: `radial-gradient(120% 110% at 50% 25%, ${t.accent}, ${t.main})` }}
      />
      <div className="absolute inset-0 grid place-items-center p-8">
        <PlushieArt {...t} className="h-2/3 w-2/3 drop-shadow-[0_18px_28px_rgba(120,90,180,0.22)] transition-transform duration-500 group-hover:scale-105" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-between p-4 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
        <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink shadow-soft backdrop-blur">
          #plushelife
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-ink shadow-soft backdrop-blur">
          <FiHeart className="fill-blush text-blush" size={13} /> {t.likes}
        </span>
      </figcaption>
    </motion.figure>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="In the wild"
          title="The Plushé gallery"
          lead="Tagged by our community across desks, beds and windowsills. Tap any to dream up your shelf."
          accent="#FFE08A"
        />
        <div className="mt-12 columns-2 gap-4 lg:columns-4">
          {tiles.map((t, i) => (
            <Tile key={i} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
