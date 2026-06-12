# OBSCURA® — Social Media Growth Studio

An Awwwards-style front-end built as an interactive creative studio — cinematic hero with video, GSAP-pinned horizontal services, split-screen manifesto, gallery-grade portfolio with a raw-vs-grade comparison slider, and an animated growth dashboard.

## Stack
React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · **GSAP (ScrollTrigger)** · Lenis · React Icons

## Run
```bash
npm install
npm run dev
```

## Build / Deploy
```bash
npm run build
```
Deploy to **Vercel** — zero config (Vite auto-detected, output `dist/`).

## Where things live
- `src/data/content.js` — every word, image, video source, case study and metric. Edit here to rebrand.
- `src/hooks/useLenis.js` — Lenis wired into GSAP's ticker so ScrollTrigger pins stay perfectly in sync.
- `src/components/ui/gsapReveal.jsx` — `SplitReveal` (split-word mask reveal) and `GsapRise`.
- `src/components/ui/motion.jsx` — Framer primitives: Magnetic, Marquee, Counter, ParallaxImage.
- `src/sections/Services.jsx` — the pinned horizontal scroll (desktop) with native snap-scroll fallback (mobile, via `gsap.matchMedia`).
- `src/sections/Work.jsx` — film-strip marquee, broken-grid case files, draggable grade slider.

## Notes
- Hero video uses Pexels direct files with an Unsplash poster fallback — if a video URL ever rots, the poster renders and nothing breaks. Swap sources in `content.js`.
- Single-hue gradients only (one personality per section), per the brief. No glassmorphism-heavy layouts, no bento grids.
- All non-hero images lazy-load; sections are code-split; `prefers-reduced-motion` respected.
