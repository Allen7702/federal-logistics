# Federal Logistics Group Limited — Website

Corporate website for Federal Logistics Group Limited (Dar es Salaam, Tanzania), built to the
company's *Website Content & Development Guide*. The site leads with the company's core
capability — **customs clearing & forwarding** — and supports it with freight, warehousing,
specialised cargo and general supplies & procurement.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 · pnpm

## Running it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Environment

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL used for metadata, sitemap and Open Graph |
| `RESEND_API_KEY` | Enables email delivery of quote/contact enquiries |
| `QUOTE_FROM_EMAIL` | Verified sender address |
| `QUOTE_TO_EMAIL` | Where enquiries are delivered (defaults to `info@federallogisticsgroup.co.tz`) |

Without `RESEND_API_KEY`, enquiries are **logged server-side** rather than emailed — nothing is
lost, but mail must be wired up before launch.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, clearing & forwarding process, services, why us, regional reach, values, quote form |
| `/clearing-and-forwarding` | The lead capability: four-stage process, cargo types, documents to prepare |
| `/services` | Division A (logistics & supply chain) and Division B (general supplies & procurement) |
| `/industries` | Sector solutions |
| `/network` | Dar es Salaam hub, corridor diagram, gateways |
| `/about` | Profile, vision, mission, core values, team placeholder |
| `/projects` | Portfolio shell + the case-study structure to fill |
| `/testimonials` | Trust content; verified testimonials go here once approved |
| `/quote`, `/contact` | Enquiry forms, click-to-call/email, embedded map |
| `/privacy-policy`, `/terms` | Draft legal pages, marked `noindex` until approved |

## Hero video

The hero plays `public/video/hero-port-hd-v3.webm` (AV1) or, where AV1 isn't supported,
`hero-port-hd-v3.mp4` (H.264) behind the headline, over the still at
`public/images/quay-clearance.webp`. `src/components/HeroVideo.tsx` keeps it well-behaved: the
still is always rendered underneath, and the video only mounts and fades in when it is worth
playing — never on phones, never under `prefers-reduced-motion`, never on save-data or 2G/3G
connections, and never if the file is missing or autoplay is refused.

The current file is cut from the client's 1080p drone footage of Dar es Salaam Port (Tanzania
Ports Authority material, used with permission), in `~/Videos/Federal`:

| # | Source | In/out | Shot |
| --- | --- | --- | --- |
| 1 | `BANDARI_2.mp4` | 1s → 8s | Vessel approaching in open water |
| 2 | `BANDARI_3.mp4` | 3s → 10s | Terminal aerial, cranes and stacks |
| 3 | `BANDARI_2.mp4` | 19s → 26s | Ship alongside, quay lanes from above |
| 4 | `BANDARI_3.mp4` | 26s → 33s | Reach stacker and terminal tractors working |

Two-second cross-fades between shots, a 1.2s tail-to-head fade so the 22-second loop is soft, no
audio. Every frame is cropped `1920x880` from `y=200` — the TPA crest sits in a 1673–1885 x 68–199
box, so dropping the top band removes it at full width with no upscaling and no retouching. The
2.18:1 result suits the hero's letterbox shape. The footage is graded out of its flat teal look
(slightly brighter, more saturated, warmer, lightly sharpened) and encoded once from the camera
files: AV1 crf 46 (5.8 MB) and x264 crf 23 capped at 3 Mbps (7.6 MB). Consider carrying a
"Footage: Tanzania Ports Authority" credit in the footer.

To change the cut or the grade, edit and re-run `./scripts/grade-hero-video.sh`, which reads the
sources in `~/Videos/Federal`. To drop in different footage, add it under `public/video/` and
point `HeroVideo`'s `src` in `src/components/Hero.tsx` at it. Give each new file a distinct name rather than overwriting the
old one — browsers cache video hard, and a changed URL is the only reliable cache-bust.

`./scripts/build-hero-video.sh` rebuilds the earlier stand-in reel — a silent 17-second loop
assembled from the company's own port stills, each given a slow zoom — if you want to go back to
it.

## Content model

All copy that management may want to change lives in `src/lib/site.ts` — contact details,
navigation, services, supplies, corridor list, values, why-us points and industries. Editing that
one file updates every page that uses it. Images live in `public/images/` (WebP, ≤1920px).

## Built in already

- Responsive layout, sticky navigation, mobile menu
- SEO: per-page titles/descriptions, canonical URLs, Open Graph, `sitemap.xml`, `robots.txt`,
  `LogisticsBusiness` JSON-LD
- Enquiry form with honeypot + timing spam protection and server-side validation
- Click-to-call / click-to-email, embedded Google map
- Accessibility: skip link, focus styles, reduced-motion support, alt text, no-JS fallback for
  scroll reveals

## Still required from management (per the guide)

1. Brand guidelines (the logo is in place; colours were sampled from it)
2. Management/team profiles and approved photographs
3. Verified client testimonials with permission to publish
4. Approved project/case-study details and photographs
5. Confirmed target industries (the current list is drawn from the company profile)
6. Official social media accounts (footer links are ready for them)
7. Business operating hours
8. Final Privacy Policy and Terms & Conditions wording
9. Any certifications, memberships, awards or partnerships to display
10. Confirmation that the TPA footage may be published on the company's own site

Nothing on the site is invented: no fake testimonials, statistics, client logos or case studies.
Sections that need approved content say so plainly instead.

## Notes for launch

- Analytics is not yet wired in — add your provider in `src/app/layout.tsx`
- The regional-reach map (`src/components/RegionalMap.tsx`) is a real geographic map of East and
  Central Africa. Boundaries are generated from Natural Earth 50m data by
  `scripts/generate-region-map.py` into `src/lib/regionMap.ts` — re-run it only if the region,
  projection or highlighted countries change. Country flags in `public/flags/` come from
  [flag-icons](https://github.com/lipis/flag-icons) (MIT)
- Photographs in `public/images/` came from the client's image folder; confirm licensing before
  going live
