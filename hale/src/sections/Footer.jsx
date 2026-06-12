import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineMail } from 'react-icons/hi'
import { FOOTER, NAV_LINKS } from '../data/content'
import { FadeUp, Magnetic, Marquee } from '../components/ui/motion'

const cols = [
  { icon: HiOutlineLocationMarker, title: 'Find us', lines: FOOTER.address },
  { icon: HiOutlineClock, title: 'Hours', lines: FOOTER.hours },
  { icon: HiOutlineMail, title: 'Say hello', lines: FOOTER.contact },
]

export default function Footer() {
  return (
    <footer id="contact" className="wash-sage curve-top relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <p className="text-[11px] uppercase tracking-widest2 text-emerald-deep">
              Visit · Begin · Belong
            </p>
            <h2 className="mt-4 font-display display-tight text-4xl font-medium sm:text-5xl md:text-6xl">
              Your first visit is
              <br />
              <span className="italic grad-text-emerald">on the house.</span>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-stone">
              One class, one wellness consultation, zero pressure. Come see how the place feels.
            </p>
            <Magnetic>
              <a
                href="mailto:hello@hale.health?subject=Booking%20my%20first%20visit"
                className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-sm font-semibold text-ivory transition-colors hover:bg-emerald-deep"
              >
                Book a free visit
              </a>
            </Magnetic>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {cols.map((c, i) => (
              <FadeUp key={c.title} delay={0.1 + i * 0.08}>
                <c.icon className="text-emerald-mid" size={20} />
                <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-stone">
                    {l}
                  </p>
                ))}
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ink/8 pt-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-stone transition-colors hover:text-emerald-deep"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {[FaInstagram, FaYoutube, FaSpotify].map((Icon, i) => (
                <Magnetic key={i} strength={0.35}>
                  <a
                    href="#top"
                    aria-label="Social link"
                    className="grid h-11 w-11 place-items-center rounded-full border border-ink/12 transition-colors hover:border-emerald-mid hover:text-emerald-deep"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* giant outlined wordmark */}
      <div className="border-t border-ink/6 py-6">
        <Marquee speed={48}>
          <span className="mx-6 font-display text-[18vw] leading-none tracking-wider text-stroke opacity-35 md:text-[10vw]">
            HALE · MOVE · BREATHE · NOURISH · REST ·&nbsp;
          </span>
        </Marquee>
      </div>

      <p className="px-5 pb-6 text-center text-xs text-stone md:px-8">
        © {new Date().getFullYear()} HALE — Health & Wellness Hub. Be gentle with yourself today.
      </p>
    </footer>
  )
}
