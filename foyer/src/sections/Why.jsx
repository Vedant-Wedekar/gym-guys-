import { HiShieldCheck, HiHeart, HiClock, HiRefresh } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { WHY, IMAGES } from '../data/content'
import { Eyebrow, FadeUp, Stagger, staggerItem, ParallaxImage } from '../components/ui/motion'

const ICONS = { HiShieldCheck, HiHeart, HiClock, HiRefresh }

export default function Why() {
  return (
    <section className="wash-emerald relative pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* image with floating card */}
          <div className="relative order-2 lg:order-1 lg:sticky lg:top-28">
            <FadeUp>
              <ParallaxImage
                src={IMAGES.cleaningScene}
                alt="A FOYER professional at work"
                className="grain relative aspect-[4/5] rounded-[2.5rem] shadow-2xl shadow-emerald-deep/15"
                strength={12}
              />
            </FadeUp>
            <FadeUp delay={0.25}>
              <div className="glass absolute -bottom-6 -right-2 max-w-[15rem] rounded-2xl p-4 md:-right-6 md:p-5">
                <p className="text-[10px] uppercase tracking-widest2 text-emerald-deep">
                  The FOYER standard
                </p>
                <p className="mt-1 font-display text-lg italic leading-snug">
                  1 in 9 applicants make the cut.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* points */}
          <div className="order-1 lg:order-2">
            <Eyebrow className="text-emerald-deep">Nº 02 — Why FOYER</Eyebrow>
            <FadeUp delay={0.1}>
              <h2 className="mt-5 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
                Help you can hand
                <br />
                <span className="italic grad-text-emerald">your keys to.</span>
              </h2>
            </FadeUp>

            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2" gap={0.1}>
              {WHY.points.map((p) => {
                const Icon = ICONS[p.icon]
                return (
                  <motion.div
                    key={p.title}
                    variants={staggerItem}
                    whileHover={{ y: -5 }}
                    className="rounded-3xl border border-emerald-deep/8 bg-ivory/80 p-6 backdrop-blur transition-shadow hover:shadow-lg hover:shadow-emerald-deep/8"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-soft text-emerald-deep">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 font-display text-xl md:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{p.desc}</p>
                  </motion.div>
                )
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  )
}
