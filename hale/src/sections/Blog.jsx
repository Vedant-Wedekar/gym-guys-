import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { BLOG } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'

export default function Blog() {
  return (
    <section id="journal" className="wash-cream relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="text-champagne-deep">Nº 07 — The Journal</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
                Daily wellness,
                <br />
                <span className="italic" style={{ color: '#A8853F' }}>
                  written down.
                </span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <a
              href="#journal"
              className="group inline-flex items-center gap-2 text-sm font-medium text-champagne-deep"
            >
              Read all articles
              <HiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </FadeUp>
        </div>

        {/* featured */}
        <FadeUp delay={0.15}>
          <article className="group mt-12 grid overflow-hidden rounded-[2.5rem] bg-ivory shadow-xl shadow-champagne-deep/8 md:mt-16 lg:grid-cols-2">
            <ParallaxImage
              src={BLOG.featured.img}
              alt={BLOG.featured.title}
              className="h-64 lg:h-auto"
              imgClassName="transition-transform duration-700 group-hover:scale-105"
              strength={8}
            />
            <div className="flex flex-col justify-center p-7 md:p-12">
              <span className="text-[11px] font-semibold uppercase tracking-widest2 text-champagne-deep">
                {BLOG.featured.tag}
              </span>
              <h3 className="mt-4 font-display text-3xl font-medium leading-tight md:text-4xl">
                {BLOG.featured.title}
              </h3>
              <p className="mt-4 leading-relaxed text-stone">{BLOG.featured.excerpt}</p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full border border-ink/12 px-6 py-3 text-sm font-medium transition-colors group-hover:border-champagne group-hover:text-champagne-deep">
                Read the article <HiArrowRight />
              </span>
            </div>
          </article>
        </FadeUp>

        {/* three-up */}
        <Stagger className="mt-6 grid gap-6 md:grid-cols-3" gap={0.1}>
          {BLOG.posts.map((p) => (
            <motion.article
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group overflow-hidden rounded-[2rem] bg-ivory shadow-lg shadow-champagne-deep/6"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-widest2 text-champagne-deep">
                  {p.tag}
                </span>
                <h3 className="mt-2.5 font-display text-xl font-medium leading-snug md:text-2xl">
                  {p.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
