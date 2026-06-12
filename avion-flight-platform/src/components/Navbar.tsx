import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const LINKS = [
  { href: "#search", label: "Search" },
  { href: "#results", label: "Compare" },
  { href: "#routes", label: "Routes" },
  { href: "#calendar", label: "Fare calendar" },
  { href: "#intel", label: "Intelligence" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-[2px] origin-left bg-gradient-to-r from-sky-mid to-sky-deep" style={{ scaleX: progress }} />
      <div className={`transition-all duration-300 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
        <nav className="container-x flex h-[68px] items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5" aria-label="AVION home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M3 15l18-7-4 6-7 2-3 5-2-4z" /></svg>
            </span>
            <span className="font-display text-lg font-700 font-bold tracking-tightest">AVION</span>
            <span className="hidden sm:inline font-data text-[10px] uppercase tracking-[0.2em] text-mist mt-1">Travel OS</span>
          </a>

          <div className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-mist transition-colors hover:text-ink">
                {l.label}
              </a>
            ))}
            <a href="#search" className="tap rounded-pill bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-95">
              Find flights
            </a>
          </div>

          <button
            className="tap flex h-11 w-11 items-center justify-center rounded-xl border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="glass border-t border-line md:hidden">
            <div className="container-x flex flex-col py-3">
              {LINKS.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="tap flex items-center border-b border-line/60 py-3.5 text-base text-ink last:border-0">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
