# FOYER — Home Services & Maid Booking

A premium, Awwwards-style front-end that turns a maid-booking platform into a luxury hospitality experience.
Light theme, editorial typography (Instrument Serif + Figtree), a gradient personality per section, and two interactive signature pieces: a live booking estimator and a draggable before/after slider.

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
- `src/data/content.js` — every word, price, image URL, helper, plan and FAQ. Edit here to rebrand.
- `src/components/ui/motion.jsx` — shared primitives: FadeUp, Stagger, TextMask, ParallaxImage, Magnetic, Marquee, Counter, Eyebrow.
- `src/sections/*` — one file per section (`Process.jsx` holds the booking estimator, `Gallery.jsx` the before/after slider).
- `src/hooks/useLenis.js` — smooth scrolling + anchor handling.

## Notes
- Images are Unsplash CDN URLs (`auto=format` serves WebP/AVIF). Swap any URL in `content.js`.
- All non-hero images lazy-load; below-the-fold sections are code-split with `React.lazy`.
- The before/after slider is touch-friendly and keyboard-accessible (arrow keys).
- `prefers-reduced-motion` is respected globally.
