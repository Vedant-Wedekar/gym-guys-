import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { HiSparkles } from 'react-icons/hi2'
import { SectionHeading, Stagger, staggerItem, Reveal } from './Reveal'
import MagneticButton from './MagneticButton'
import FloatingElements from './FloatingElements'
import PlushieArt from './PlushieArt'
import { giftOptions } from '../data/content'
import { scrollToId } from '../hooks/useUtils'

export default function PersonalizedGifts() {
  return (
    <section id="gifts" className="relative py-20 sm:py-28">
      <div className="container-px">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-5xl bg-gradient-to-br from-blush-soft via-lavender-soft to-sky-soft p-7 dark:from-blush/10 dark:via-lavender/10 dark:to-sky/10 sm:p-12 lg:p-16">
            <FloatingElements count={10} />
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/40 blur-3xl dark:bg-white/5"
              aria-hidden="true"
            />

            <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeading
                  align="left"
                  eyebrow="Make it theirs"
                  title="Personalized gifts, stitched with intention"
                  lead="Turn any plushie into a one-of-a-kind keepsake. Four little touches, infinite ways to say it perfectly."
                  accent="#FF8FBE"
                />
                <div className="mt-7">
                  <MagneticButton onClick={() => scrollToId('newsletter')}>
                    Start a custom gift <FiArrowRight />
                  </MagneticButton>
                </div>
              </div>

              <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {giftOptions.map((g, i) => (
                  <motion.div
                    key={g.id}
                    variants={staggerItem}
                    whileHover={{ y: -6 }}
                    className="relative rounded-4xl glass-card p-5"
                  >
                    <span
                      className="grid h-11 w-11 place-items-center rounded-2xl text-ink shadow-soft"
                      style={{ background: g.accent }}
                    >
                      <HiSparkles size={20} />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold">{g.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft dark:text-white/55">{g.desc}</p>
                    <span className="mt-3 inline-block text-xs font-bold text-ink-mute dark:text-white/40">
                      Step {i + 1}
                    </span>
                  </motion.div>
                ))}
              </Stagger>
            </div>

            {/* Decorative plushie peeking */}
            <motion.div
              className="pointer-events-none absolute -bottom-6 right-6 hidden h-28 w-28 lg:block"
              animate={{ y: [0, -12, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <PlushieArt type="bear" main="#FFC4D8" accent="#FFE0EC" cheek="#FF8FBE" className="h-full w-full" />
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
