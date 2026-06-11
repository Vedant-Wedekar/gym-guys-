# LUMIÈRE — Café & Pâtisserie · Paris

A premium, Awwwards-style front-end for a Parisian café & pâtisserie.
Light theme, editorial typography (Bodoni Moda + Instrument Sans), section-by-section gradient washes.

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
Deploy the repo to **Vercel** — zero config needed (framework auto-detected as Vite, output `dist/`).

## Where things live
- `src/data/content.js` — every word, price, image URL on the site. Edit here to rebrand.
- `src/components/ui/motion.jsx` — shared primitives: FadeUp, Stagger, TextMask, ParallaxImage, Magnetic, Marquee, Counter, Eyebrow.
- `src/sections/*` — one file per section.
- `src/hooks/useLenis.js` — smooth scrolling + anchor handling.

## Notes
- Images are Unsplash CDN URLs (`auto=format` serves WebP/AVIF). Swap any URL in `content.js`.
- All non-hero images are `loading="lazy"`; below-the-fold sections are code-split with `React.lazy`.
- `prefers-reduced-motion` is respected globally.
