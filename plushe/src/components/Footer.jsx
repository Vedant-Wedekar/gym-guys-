import { FiInstagram, FiTwitter, FiYoutube, FiHeart } from 'react-icons/fi'
import { FaPinterestP, FaTiktok } from 'react-icons/fa'
import { scrollToId } from '../hooks/useUtils'

const columns = [
  { title: 'Shop', links: [['Teddy Bears', 'featured'], ['Plushies', 'categories'], ['Bestsellers', 'bestsellers'], ['New arrivals', 'new'], ['Gift sets', 'gifts']] },
  { title: 'Company', links: [['Our story', 'about'], ['Sustainability', 'about'], ['The gallery', 'gallery'], ['Reviews', 'testimonials']] },
  { title: 'Help', links: [['FAQ', 'faq'], ['Shipping', 'faq'], ['Returns', 'faq'], ['Personalization', 'gifts']] },
]

const socials = [
  { Icon: FiInstagram, label: 'Instagram' },
  { Icon: FaPinterestP, label: 'Pinterest' },
  { Icon: FaTiktok, label: 'TikTok' },
  { Icon: FiYoutube, label: 'YouTube' },
  { Icon: FiTwitter, label: 'X' },
]

export default function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden">
      <div className="container-px">
        <div className="rounded-t-5xl glass-card px-6 py-12 sm:px-10 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Brand */}
            <div className="lg:col-span-4">
              <button onClick={() => scrollToId('top')} className="flex items-center gap-2">
                <span className="grid h-9 w-9 place-items-center rounded-2xl bg-gradient-to-br from-blush via-lavender to-sky text-white shadow-soft">
                  <FiHeart size={16} />
                </span>
                <span className="font-display text-2xl font-semibold tracking-tight">
                  Plush<span className="gradient-text">é</span>
                </span>
              </button>
              <p className="mt-4 max-w-xs text-sm text-ink-soft dark:text-white/55">
                Heirloom-soft companions and aesthetic gifts, hand-finished and wrapped in joy. A little luxury you can hug.
              </p>
              <div className="mt-6 flex gap-2">
                {socials.map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    data-cursor="hover"
                    className="grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink transition-all hover:scale-110 hover:bg-blush hover:text-white dark:bg-white/10 dark:text-white"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink-mute dark:text-white/40">
                    {col.title}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map(([label, id]) => (
                      <li key={label}>
                        <button
                          onClick={() => scrollToId(id)}
                          data-cursor="hover"
                          className="text-sm text-ink-soft transition-colors hover:text-ink dark:text-white/55 dark:hover:text-white"
                        >
                          {label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-6 text-sm text-ink-mute dark:border-white/10 dark:text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} Plushé. Crafted with care.</p>
            <p className="flex items-center gap-1.5">
              Made with <FiHeart className="fill-blush text-blush" size={13} /> for soft things everywhere
            </p>
            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-ink dark:hover:text-white">Privacy</a>
              <a href="#" className="transition-colors hover:text-ink dark:hover:text-white">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
