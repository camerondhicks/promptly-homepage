# Promptly Landing Page

The public marketing site for [Promptly](https://joinpromptly.co) — a live web and
mobile app that alerts students when internships and early-career opportunities go
live. Built with React, Vite and Tailwind CSS v4, deployed on Vercel.

The product itself lives at [app.joinpromptly.co](https://app.joinpromptly.co) in a
separate repository. Every call to action on this page routes there.

## Run locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Editing the page content

**Almost every change you'll want to make is in one file: [`src/content/site.js`](src/content/site.js).**

Metrics, copy, links, FAQ questions, recruiting cycles and the demo listings all
live there, so you can update the page without touching a component. For example,
to refresh the numbers in the "Early impact" section:

```js
export const promptlyStats = {
  companiesTracked: 366,
  liveOpportunities: 1133,
  companiesHiring: 196,
  topSchool: "UCLA",
};
```

### Content rules

A few things in that file are deliberately constrained, and it's worth keeping them
that way:

- **Universities** (`universityUsage.schools`) describe *student usage*, never an
  endorsement or partnership. Only add a school you can verify has Promptly users.
  With fewer than three schools the section renders as a single line rather than a
  thin logo strip.
- **Demo listings** (`interactiveFeed`, `productPreview`, `liveAlertDemo`) are
  illustrative and are labelled "Product preview" on screen. They are not live
  openings and should not be presented as such.
- **Recruiting cycles** show approximate seasonal patterns, not specific employer
  dates.

## Structure

```
src/
  content/site.js      all marketing copy, metrics and links
  hooks/useMotion.js   scroll reveal, count-up, parallax, typewriter, carousel
  components/          one file per page section
  styles.css           design tokens, brand primitives, animation system
  App.jsx              section order
public/                favicons, manifest, OG image, brand assets
```

### Design system

Tokens are defined in `styles.css` under `@theme`, which exposes them to Tailwind
as utilities (`text-ink`, `bg-tint`, `border-line`, `from-brand-blue`, …). The
brand gradient is a single `--brand-gradient` variable used by `.gradient-text`
and `.btn-gradient`.

### Animation

Every animation is opacity, transform or scale, and all of them respect
`prefers-reduced-motion` — both via the global block at the end of `styles.css`
and via the `useReducedMotion()` hook for JS-driven motion (typewriter, count-up,
alert carousel, pointer parallax). If you add motion, follow the same pattern.

## Waitlist endpoint

`api/waitlist.js` and `google-apps-script-waitlist-email-simple.gs` are left over
from the pre-launch waitlist. **The landing page no longer calls them** — Promptly
is live, so every CTA routes to the app's own signup instead. They're kept so the
Google Sheet integration isn't lost, and can be deleted once you're sure nothing
else depends on them.

The `GOOGLE_SHEETS_WEBHOOK_URL` environment variable in Vercel is only used by
that endpoint.

## Unused assets

`public/brand/promptly-logo-full.png` has a **white** wordmark baked into it, so it
is invisible on the current light background. The logo is now drawn as live SVG in
`src/components/Brand.jsx` instead. That file and `public/ui/student-alert-feed.png`
are no longer referenced and can be removed.
