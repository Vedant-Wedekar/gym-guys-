import { FaInstagram, FaPinterestP, FaTiktok } from 'react-icons/fa'
import { HiOutlineLocationMarker, HiOutlineClock, HiOutlineMail } from 'react-icons/hi'
import { FOOTER, NAV_LINKS } from '../data/content'
import { FadeUp, Magnetic, Marquee } from '../components/ui/motion'

const cols = [
  { icon: HiOutlineLocationMarker, title: 'Find us', lines: FOOTER.address },
  { icon: HiOutlineClock, title: 'Hours', lines: FOOTER.hours },
  { icon: HiOutlineMail, title: 'Say bonjour', lines: FOOTER.contact },
]

export default function Footer() {
  return (
    <footer id="visit" className="curve-top relative overflow-hidden bg-ink text-ivory">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <FadeUp>
            <p className="text-[11px] uppercase tracking-widest2 text-champagne">
              Visit · Reserve · Linger
            </p>
            <h2 className="mt-4 font-display display-tight text-4xl sm:text-5xl md:text-6xl">
              The table by the window
              <br />
              <span className="italic text-champagne">is waiting.</span>
            </h2>
            <Magnetic>
              <a
                href="mailto:bonjour@lumiere.paris?subject=Reservation%20at%20LUMIÈRE"
                className="mt-8 inline-block rounded-full bg-champagne px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-ivory"
              >
                Reserve a table
              </a>
            </Magnetic>
          </FadeUp>

          <div className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {cols.map((c, i) => (
              <FadeUp key={c.title} delay={0.1 + i * 0.08}>
                <c.icon className="text-champagne" size={20} />
                <h3 className="mt-3 text-sm font-semibold">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="mt-1 text-sm text-ivory/65">
                    {l}
                  </p>
                ))}
              </FadeUp>
            ))}
          </div>
        </div>

        <FadeUp delay={0.2}>
          <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-ivory/12 pt-8">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-ivory/65 transition-colors hover:text-champagne"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="flex gap-3">
              {[FaInstagram, FaPinterestP, FaTiktok].map((Icon, i) => (
                <Magnetic key={i} strength={0.35}>
                  <a
                    href="#top"
                    aria-label="Social link"
                    className="grid h-11 w-11 place-items-center rounded-full border border-ivory/15 transition-colors hover:border-champagne hover:text-champagne"
                  >
                    <Icon size={16} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>

      {/* giant marquee wordmark */}
      <div className="border-t border-ivory/8 py-6 opacity-12">
        <Marquee speed={46}>
          <span className="mx-6 font-display text-[18vw] leading-none tracking-wider md:text-[10vw]">
            LUMIÈRE · CAFÉ · PÂTISSERIE ·&nbsp;
          </span>
        </Marquee>
      </div>

      <p className="px-5 pb-6 text-center text-xs text-ivory/35 md:px-8">
        © {new Date().getFullYear()} LUMIÈRE — Café & Pâtisserie, Paris. Made with butter, patience
        and React.
      </p>
    </footer>
  )
}
