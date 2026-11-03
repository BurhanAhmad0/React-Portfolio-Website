# Burhan Ahmad — Developer Portfolio

React 19 + Vite 6 + Tailwind CSS 4. Design: warm off-white / charcoal / burnt-orange accent, Inter (self-hosted variable font). Colour, type and spacing tokens live in `src/index.css` (`@theme`). Live at <https://burhanahmad.netlify.app/>.

## Scripts

| Command | What it does |
|---|---|
| `yarn dev` | Dev server (no prerender) |
| `yarn build` | Client build → SSR build → **prerender of `/`** (see `scripts/prerender.mjs`) → `dist/` |
| `yarn preview` | Preview `dist/` (note: does not apply `_redirects`; use Netlify/`netlify dev` to test `/blog` and 404s) |
| `yarn lint` | ESLint |

## Editing content

All text content (services, case studies, process, facts, links, WhatsApp number) lives in **`src/data/profile.js`**.
- Add a project to `PROJECTS` and it appears as a case study. Every project shows its `status`; use `"Client work"` **only** for genuinely paid client projects.
- Set `live` / `repo` to `null` to hide a link.
- The WhatsApp number is `WHATSAPP_NUMBER` at the top of the file (digits only, with country code).

## How the build works

The home page is rendered to static HTML at build time so crawlers, link-preview bots and no-JS clients
receive real content; React then hydrates it. `/blog` and `/blog/*` are client-rendered from the
untouched shell `dist/app-shell.html`; any other unknown URL returns a real **404**
(see `public/_redirects`).

## Project inquiry form (Netlify Forms)

The form (named `project-inquiry`) posts to Netlify Forms (no backend, no secrets in code). It only works **on Netlify** after a deploy:

1. Deploy. Netlify detects the `contact` form from the prerendered HTML.
2. Netlify UI → **Forms → project-inquiry → Settings & notifications → Add notification → Email** to receive submissions.
3. Send a test message from the live site and confirm it arrives. (Delivery cannot be verified from a local build.)

Spam protection: honeypot field (`bot-field`) + Netlify's built-in filtering. Free plan has a monthly submission cap.

## Environment variables (all optional)

Blog data comes from Appwrite. The defaults are the existing public IDs; override with:
`VITE_APPWRITE_ENDPOINT`, `VITE_APPWRITE_PROJECT`, `VITE_APPWRITE_DATABASE`, `VITE_APPWRITE_COLLECTION`.
Anything prefixed `VITE_` is **public** — never put secrets in it.

## Google Search Console (manual, requires your Google account)

1. <https://search.google.com/search-console> → **Add property** → *URL prefix* → `https://burhanahmad.netlify.app/`.
2. Verify ownership via the **HTML tag** method: paste the provided `<meta name="google-site-verification" ...>` into `index.html` `<head>`, deploy, click Verify.
3. **Sitemaps** → submit `sitemap.xml`.
4. **URL inspection** → inspect `https://burhanahmad.netlify.app/` → *Request indexing* (no guarantee or timeline).
5. Check **Pages** (indexing), **Performance** (queries/impressions) and **Core Web Vitals** weekly.

## Known limitations / owner to-do

If the form cannot deliver, visitors see a prefilled email/WhatsApp fallback instead of a false success message.

Open items: confirm LinkedIn URL and WhatsApp number, fix placeholder content in the Ghizer-INN repo, decide on AdSense, add a consent banner if needed.
