# Plushé — *A little luxury you can hug* 🧸

A world-class, front-end-only e‑commerce experience for a premium store of teddy bears, plushies, and aesthetic gifts. Kawaii meets Apple‑grade minimalism, Pinterest masonry, and soft‑feminine luxury — built to feel award‑worthy and run fast.

## ✨ Highlights

- **Signature illustration system** — every product, category, and gallery tile is a hand‑built, recolorable inline‑SVG plushie (bear / bunny / cat / duck) floating over gooey pastel "aurora" gradients behind glass. No image files → tiny bundle, zero broken images, perfectly on‑brand.
- **Premium motion** — branded loading screen, page entrance, scroll‑triggered reveals, parallax, magnetic buttons, floating hearts/stars, infinite marquee ribbons, animated gradients, color‑flood hover, and a custom cursor (desktop, fine‑pointer only).
- **Full storefront** — Hero, Featured Bears (filterable), Categories, Best Sellers (editorial split), New Arrivals, Personalized Gifts, Testimonials carousel, Pinterest Gallery, About + animated stats, FAQ accordion, Newsletter, Footer.
- **Product UX** — glass cards, ratings, wishlist toggle, cute badges, and an animated **Quick View** modal with color swatches and quantity stepper.
- **Crafted details** — sticky glass navbar, scroll progress bar, back‑to‑top, **dark mode**, skeleton shimmer, gradient text, glassmorphism.
- **Accessible & performant** — respects `prefers-reduced-motion`, visible focus states, semantic landmarks, SEO/OG meta, mobile‑first responsive.

## 🧰 Tech Stack

React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · Lenis (smooth scroll) · React Icons — JavaScript, no backend.

## 🚀 Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

Open the printed local URL (default http://localhost:5173).

## ▲ Deploy to Vercel

Zero config. Push to a Git repo and import it in Vercel, or run `vercel`:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

`vercel.json` already adds SPA rewrites so deep links resolve correctly.

## 📁 Structure

```
plushe/
├─ index.html                 # SEO/OG meta + Google Fonts (Fraunces + Plus Jakarta Sans)
├─ public/                    # favicon.svg, og.svg
├─ src/
│  ├─ main.jsx                # entry, ThemeProvider
│  ├─ App.jsx                 # root assembly + shared state (wishlist, quick view)
│  ├─ index.css               # Tailwind layers, components, base styles
│  ├─ context/ThemeContext.jsx
│  ├─ hooks/                  # useLenis, useUtils (reduced motion, scrollToId)
│  ├─ data/content.js         # products, categories, testimonials, gifts, faqs
│  └─ components/             # Navbar, Hero, ProductCard, QuickViewModal, …
├─ tailwind.config.js         # palette, fonts, radii, shadows, keyframes
└─ vercel.json
```

## 🎨 Customizing

- **Products & copy:** edit `src/data/content.js` (each product sets its plushie `art` colors).
- **Brand palette / motion:** `tailwind.config.js`.
- **Plushie shapes:** `src/components/PlushieArt.jsx`.

---

Made with 🩷 for cozy, joyful shopping.
