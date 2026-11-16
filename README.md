# waukeshaelitedrywall.com

Marketing site for **Waukesha Elite Drywall** (Waukesha, Wisconsin). Static site built with [Astro](https://astro.build); no client framework, a few kB of JavaScript.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Local dev server at `http://localhost:4321` |
| `npm run build` | Production build into `dist/` (optimises every photo to AVIF/WebP) |
| `npm run preview` | Serve the production build locally |

Deploy the `dist/` folder to any static host (Cloudflare Pages, Netlify, Vercel, S3…). Build command `npm run build`, output directory `dist`.

## Where to change things

| What | File |
| --- | --- |
| Company name, logo, phone, email, address, hours, service areas, social links, form endpoint | `src/config/site.ts` |
| The 12 service pages (copy, metadata, FAQs, photos, related links) | `src/data/services.ts` |
| Home page | `src/pages/index.astro` |
| Colours, type, spacing, components | `src/styles/global.css` |
| Photos | `src/assets/photos/` (referenced by filename without extension) |

Anything left empty in `src/config/site.ts` is **not rendered** — the site never shows placeholder phone numbers, emails or addresses, and the structured data only includes fields that are filled in.

## Estimate form

- Markup: `src/components/EstimateForm.astro`. Behaviour: `src/scripts/estimate-form.ts`.
- Opens in a dialog from every "Get a free estimate" button; also lives at `/estimate/` (the no-JavaScript fallback).
- Validates all fields, limits photo uploads, shows loading, success and error states, and uses a honeypot plus a timing check against bots.
- **It is not connected to an inbox yet.** Set `form.endpoint` in `src/config/site.ts` to a URL that accepts a `multipart/form-data` POST (Formspree, Web3Forms, Basin, a Cloudflare Worker, a CRM webhook). Until then, a valid submission shows "Online requests are not connected yet" instead of a false success.
- Optional: add a Cloudflare Turnstile site key in `form.turnstileSiteKey` and load the Turnstile script.

Fields sent: `first_name`, `last_name`, `email`, `phone`, `service`, `description`, `photos` (0–5 files), `page`.

## Photography

All photos are licensed stock from Envato Elements and are **illustrative**. They are labelled as such on the site and must be replaced with real project photos before being presented as company work. Before/after sliders take any two photo names (`ba.before` / `ba.after` in `src/data/services.ts`).

## SEO

Unique title/description per page, canonical URLs, Open Graph, `sitemap-index.xml`, `robots.txt`, breadcrumbs, and JSON-LD (`WebSite`, `HomeAndConstructionBusiness`, `Service`, `BreadcrumbList`, `FAQPage`). If the domain changes, update `site` in `astro.config.mjs` and `url` in `src/config/site.ts`.
