import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { SERVICES, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'

const DOT = {
  emerald: 'bg-emerald-mid',
  sage: 'bg-sage-mid',
  lavender: 'bg-lavender-mid',
  sky: 'bg-sky-tone',
  ocean: 'bg-ocean-mid',
  sunset: 'bg-sunset-mid',
  coral: 'bg-coral-mid',
  mint: 'bg-mint-mid',
  champagne: 'bg-champagne',
}

export default function Services() {
  return (
    <section id="services" className="wash-emerald curve-top relative -mt-8 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* sticky intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow className="text-emerald-deep">Nº 02 — Services</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
                Care, in
                <br />
                <span className="italic grad-text-emerald">every form.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-md leading-relaxed text-stone">
                From the training floor to the therapy room, every service shares one philosophy:
                meet you gently, move you forward.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <ParallaxImage
                src={IMAGES.spa}
                alt="Spa stillness at HALE"
                className="grain relative mt-10 hidden aspect-[4/3] rounded-[2rem] shadow-2xl shadow-emerald-deep/12 lg:block"
                strength={10}
              />
            </FadeUp>
          </div>

          {/* service rows */}
          <Stagger className="divide-y divide-emerald-deep/10" gap={0.06}>
            {SERVICES.map((s, i) => (
              <motion.a
                key={s.name}
                href="#contact"
                variants={staggerItem}
                className="group flex items-center gap-5 py-5 md:py-6"
              >
                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${DOT[s.tone]}`} />
                <span className="w-8 shrink-0 font-display text-sm italic text-emerald-deep/60">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-medium transition-colors group-hover:text-emerald-deep md:text-2xl">
                    {s.name}
                  </h3>
                  <p className="mt-0.5 truncate text-sm text-stone md:whitespace-normal">
                    {s.desc}
                  </p>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-deep/15 text-emerald-deep transition-all duration-300 group-hover:-rotate-45 group-hover:border-emerald-mid group-hover:bg-emerald-mid group-hover:text-ivory">
                  <HiArrowRight size={15} />
                </span>
              </motion.a>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
