import { GALLERY } from '../data/content'
import { Eyebrow, FadeUp } from '../components/ui/motion'
import { motion } from 'framer-motion'

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-ivory pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-ink/65">Nº 06 — En Images</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                Postcards from
                <br />
                <span className="italic text-stroke">Rue Cler.</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-stone md:text-base">
              Mornings, macarons and the seventh arrondissement — photographed by friends of the
              maison.
            </p>
          </FadeUp>
        </div>

        <div className="mt-12 columns-2 gap-4 md:mt-16 md:columns-3 md:gap-5 [&>*]:mb-4 md:[&>*]:mb-5">
          {GALLERY.map((g, i) => (
            <motion.figure
              key={g.alt}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative break-inside-avoid overflow-hidden rounded-3xl ${g.h}`}
            >
              <img
                src={g.img}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-ink/65 to-transparent p-4 text-sm text-ivory transition-transform duration-500 group-hover:translate-y-0">
                {g.alt}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
