# AVION — The Travel Operating System ✈️

A futuristic, Awwwards-style flight comparison platform. Pure-white light theme, glass search console, animated route corridors, split-flap stats, fare calendar, price prediction, and a provider-aggregation backend.

## Stack
- **Frontend:** React 18 + Vite + TypeScript, Tailwind CSS v3, Framer Motion, Lenis, React Icons
- **Backend:** Node.js + Express (local dev) / Vercel serverless (`/api/search.js`) in production
- **Providers:** adapter architecture for Amadeus, Skyscanner, Kiwi (Tequila), TravelPayouts, AviationStack

## Run locally
```bash
npm install
npm run dev        # frontend on :5173 (proxies /api → :8787)
npm run dev:api    # aggregator API on :8787 (separate terminal)
```
The site works **without** the API running — the UI falls back to a deterministic in-browser fare engine, so every search still returns realistic, repeatable results.

## Going live with real fares
1. Copy `.env.example` → `.env` and add keys for any providers you have.
2. The aggregator (`server/core/aggregate.js`) auto-detects which adapters have keys, fans out the search with an 8s timeout per provider, merges + dedupes, and sorts by price.
3. No keys → simulated fares, clearly labelled `simulated` in the UI badge.

| Provider | Env vars | Used for |
|---|---|---|
| Amadeus | `AMADEUS_CLIENT_ID`, `AMADEUS_CLIENT_SECRET` | Live offers + pricing |
| Kiwi Tequila | `KIWI_TEQUILA_KEY` | Live offers + pricing |
| TravelPayouts | `TRAVELPAYOUTS_TOKEN` | Cached cheapest fares |
| Skyscanner | `SKYSCANNER_KEY` | Partner live search |
| AviationStack | `AVIATIONSTACK_KEY` | Flight status (tracker) |

## Deploy on Vercel
```bash
vercel
```
- `vercel.json` rewrites are already configured; `/api/search` runs as a serverless function reusing the same aggregator core.
- Add provider keys in **Vercel → Project → Settings → Environment Variables**.
- Build command `npm run build`, output `dist` (Vite defaults — auto-detected).

## Architecture
```
src/
  components/   AirlineMark, SearchPanel, FlightCard, RouteArc, Navbar, Skeleton
  sections/     Hero, Results, RouteShowcase, PriceCalendar, PopularRoutes, Intelligence, Footer
  lib/          types, airports, airlines, fares (client fallback engine), api, motion
  hooks/        useLenis
server/
  core/         aggregate.js (fan-out + dedupe), fares.js (simulated engine)
  providers/    amadeus.js, kiwi.js, travelpayouts.js, skyscanner.js, aviationstack.js
api/
  search.js     Vercel serverless wrapper around the same core
```

## Design system
- **Type:** Space Grotesk (display) · Schibsted Grotesk (body) · **B612 Mono** (times, prices, codes — the typeface Airbus designed for cockpit displays)
- **Color:** pure white base; per-section single-hue gradients — Sky (hero) → Emerald (results) → Royal (routes) → Champagne gold (calendar) → Soft orange (departures board)
- **Signature:** split-flap departure-board stat reveals + animated dashed route arcs with a travelling plane

## Notes
- Mobile-first: `grid-cols-1` base, `sm`/`lg` breakpoints, `min-w-0` grid children, `overflow-x: clip`, 44px tap targets, sticky mobile search CTA, `prefers-reduced-motion` respected.
- Airline marks are generated monograms (brand-hue tiles) — swap in licensed logo assets before launch.
- Popular-route images hotlink Unsplash for the demo — replace with owned/licensed photography in production.
