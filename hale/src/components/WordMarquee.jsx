import { MARQUEE_WORDS } from '../data/content'
import { Marquee } from './ui/motion'

export default function WordMarquee({ reverse = false, className = '' }) {
  return (
    <div className={`border-y border-ink/6 bg-ivory py-4 md:py-5 ${className}`}>
      <Marquee speed={36} reverse={reverse}>
        {MARQUEE_WORDS.map((w) => (
          <span key={w} className="mx-6 flex items-center gap-6 md:mx-8 md:gap-8">
            <span className="font-display text-2xl italic tracking-wide text-ink md:text-3xl">
              {w}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-emerald-mid to-sky-tone" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
