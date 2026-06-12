import { Marquee } from './ui/motion'
import { MARQUEE_WORDS } from '../data/content'

// solid color marquee band — each instance gets one personality
export default function Band({ grad = 'grad-crimson', reverse = false }) {
  return (
    <div className={`${grad} py-4 md:py-5`}>
      <Marquee speed={26} reverse={reverse}>
        {MARQUEE_WORDS.map((w) => (
          <span key={w} className="mx-5 flex items-center gap-5 md:mx-7 md:gap-7">
            <span className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
              {w}
            </span>
            <span className="h-2 w-2 rotate-45 bg-paper/65" />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
