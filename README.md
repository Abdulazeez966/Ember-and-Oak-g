# Ember & Oak — React

A fictional coffee shop landing page, built with React + Vite + React Router.

## Components

- `Navbar` — responsive, route-aware active links, mobile toggle
- `Hero` — headline, CTA, time-of-day personalized greeting
- `MenuCard` — used on both the home preview and the full `/menu` page; includes an on-demand "pairing tip" (stand-in for an AI call, see below)
- `VisitSection` — reservation form that routes to `/confirmed` on submit
- `Story`, `Footer`

## Routes

| Path         | Page                                      |
|--------------|--------------------------------------------|
| `/`          | Home (hero, menu preview, story, visit)     |
| `/menu`      | Full menu                                   |
| `/confirmed` | Reservation confirmation (reached via form) |

## Run

```bash
npm install
npm run dev
```

## Deploy

```bash
npm install
npm run deploy
```
This builds and pushes `dist/` to a `gh-pages` branch. Then in the repo's **Settings → Pages**, set the source to the `gh-pages` branch. Routes use `HashRouter` (URLs look like `/#/menu`), so no server rewrite rules are needed.

## AI documentation

AI was used to generate the initial component structure and copy for this fictional brand, then reviewed and rewritten for the visual design and copy voice.

This build has no live AI call — GitHub Pages is static-only hosting and can't run backend code, so a real API call would either fail or expose a key in the browser bundle. The "pairing tip" feature ships with a small set of curated, free notes instead. A Netlify-hosted version of this same project wires the same button up to a real AI call (Groq, free tier) through a serverless function.
