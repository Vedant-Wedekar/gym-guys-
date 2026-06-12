# HALE — Health & Wellness Hub

A premium, Awwwards-style front-end for a modern wellness sanctuary.
Light theme, calm editorial typography (Newsreader + Albert Sans), a different color personality per section, and a signature interactive breathing circle.

## Stack
React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · Lenis · React Icons

## Run
```bash
npm install
npm run dev
```

## Build / Deploy
```bash
npm run build
```
Deploy the repo to **Vercel** — zero config (framework auto-detected as Vite, output `dist/`).

## Where things live
- `src/data/content.js` — every word, image URL, program, expert and article. Edit here to rebrand.
- `src/components/ui/motion.jsx` — shared primitives: FadeUp, Stagger, TextMask, ParallaxImage, Magnetic, Marquee, Counter, Eyebrow.
- `src/sections/*` — one file per section (incl. `Breathing.jsx`, the guided-breath signature piece).
- `src/hooks/useLenis.js` — smooth scrolling + anchor handling.

## Notes
- Images are Unsplash CDN URLs (`auto=format` serves WebP/AVIF). Swap any URL in `content.js`.
- All non-hero images lazy-load; below-the-fold sections are code-split with `React.lazy`.
- `prefers-reduced-motion` is respected globally; the breathing circle pauses when scrolled out of view.
