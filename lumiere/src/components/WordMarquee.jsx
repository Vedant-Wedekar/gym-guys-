import { MARQUEE_WORDS } from '../data/content'
import { Marquee } from '../components/ui/motion'

export default function WordMarquee({ reverse = false, className = '' }) {
  return (
    <div className={`border-y border-ink/6 bg-ivory py-4 md:py-5 ${className}`}>
      <Marquee speed={34} reverse={reverse}>
        {MARQUEE_WORDS.map((w) => (
          <span key={w} className="mx-6 flex items-center gap-6 md:mx-8 md:gap-8">
            <span className="font-display text-2xl tracking-wide text-ink md:text-3xl">{w}</span>
            <span className="text-champagne">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  )
}
