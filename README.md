# E-commerce Portfolio

Executive-grade portfolio for senior e-commerce talent. Dark, minimal, impact-led.

## Stack

Next.js 16 · TypeScript · Tailwind CSS v4 · Geist · Vercel Analytics

## Development

```bash
npm install
npm run dev
```

## Customise

- [`lib/site.ts`](lib/site.ts) — Name, bio, experience, metrics, expertise
- [`content/case-studies/*.json`](content/case-studies/) — Case study content
- [`app/layout.tsx`](app/layout.tsx) — Domain metadata

## Structure

- `/` — Executive overview: impact, selected work, experience
- `/work` — Full case study index with platform filters
- `/work/[slug]` — Deep-dive case study (Problem → Approach → Execution → Impact)
- `/about` — Career narrative
- `/contact` — Minimal contact form
