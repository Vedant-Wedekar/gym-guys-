import { HiArrowUpRight } from 'react-icons/hi2'
import { FOOTER, NAV_LINKS } from '../data/content'
import { Magnetic, Marquee } from '../components/ui/motion'
import { SplitReveal, GsapRise } from '../components/ui/gsapReveal'

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-paper">
      {/* huge CTA */}
      <div className="mx-auto max-w-[90rem] px-5 py-20 md:px-10 md:py-28 lg:pl-28">
        <p className="text-[11px] font-semibold uppercase tracking-widest2 text-smoke">
          The closing credits roll only when you say so
        </p>
        <SplitReveal
          text="Let's make them look."
          as="h2"
          className="mt-5 font-display display-tight text-6xl font-extrabold md:text-[8vw]"
          stagger={0.06}
        />
        <GsapRise className="mt-10 flex flex-wrap items-center gap-5">
          <Magnetic>
            <a
              href="mailto:hello@obscura.studio?subject=New%20project"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-9 py-5 text-base font-semibold text-paper transition-colors hover:bg-crimson-hi"
            >
              {FOOTER.email} <HiArrowUpRight />
            </a>
          </Magnetic>
          <span className="text-sm text-smoke">
            {FOOTER.phone} · {FOOTER.city}
          </span>
        </GsapRise>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-smoke transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {FOOTER.socials.map((s) => (
              <a key={s} href="#top" className="group inline-flex items-center gap-1 text-sm font-medium">
                {s}
                <HiArrowUpRight size={12} className="opacity-30 transition-all group-hover:rotate-45 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* outlined wordmark strip */}
      <div className="border-t border-line py-5">
        <Marquee speed={44}>
          <span className="mx-6 font-display text-[16vw] font-extrabold leading-none text-stroke md:text-[9vw]">
            OBSCURA® — TRANSFORM ATTENTION INTO CUSTOMERS —&nbsp;
          </span>
        </Marquee>
      </div>

      <p className="px-5 pb-6 pt-4 text-center text-xs text-smoke md:px-10">
        © {new Date().getFullYear()} OBSCURA® Social Growth Studio. Shot on location, graded with love.
      </p>
    </footer>
  )
}
