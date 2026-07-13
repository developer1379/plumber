# BMV Plumbing — Project Operator Manual

Working folder: `d:\laravel\plumber`
Live site: https://bmvplumbing.co.uk
GitHub: TBC

## Current State (2026-07-13 — bootstrap)

Site scaffolded from local-business-seo kit v1.0. Status:
- Next.js 16 + Sanity v5 wired up
- Schema graph live (Org + Person + Service + Review)
- AEO stack live (robots AI allowlist, llms.txt, llms-full.txt)
- Vercel preview default-noindex
- Redirect manifest stub in next.config.ts (no redirects yet)
- Resend contact form scaffolded (needs RESEND_API_KEY)
- TODO-BEFORE-LAUNCH.md tracks anything still TBC

Next steps:
1. Run `local-business-cms-seed` once Sanity project ID is wired up
2. Build area pages (`local-business-area-page-enricher`)
3. Build service pages (deep, town-anchored sub-sections)
4. Run `local-business-content-audit` before each PR
5. Pre-launch: `local-business-pre-launch-checklist`

## Confirmed business facts (source of truth)

- Brand: BMV Plumbing
- Legal: RH Plumbing & Heating
- Company number: TBC
- Owner: Rob Holton
- Primary phone: 07958 795 361
- Email: rob@bmvplumbing.co.uk
- Registered address: 5 Deer Gardens, Gillingham, Dorset, SP8 4WF
- Marketed-as: Gillingham, SP8
- Service area: Gillingham, Shaftesbury, Wincanton, Sturminster Newton

## Address-display rule (PERMANENT)

In customer-facing copy, only use "Gillingham, SP8". Never the full street address or 4-char inward postcode in body copy. Full address only in:
1. /privacy-policy and /terms-conditions
2. lib/site-config.ts (JSON-LD source)
3. Form placeholders
4. Sanity siteSettings

## Content rules (PERMANENT)

1. No em-dashes (—) in customer-facing strings
2. No AI tells: moreover, furthermore, leverage, robust, navigate-as-verb, delve, harness, unleash, "in today's fast-paced world", "elevate", "unlock the power of", "seamless experience", "cutting-edge", "tapestry"
3. UK English (centre, colour, organise, realise, lorry, post code)
4. No on-page repetition of the same USP
5. No cross-page boilerplate paragraphs
6. Never claim credentials without evidence

## Stack

- Frontend: Next.js 16 App Router, React 19, Tailwind v4
- CMS: Sanity v5 (project 9t2gq5lm, dataset production)
- Email: Resend
- Hosting: Vercel
- DNS: TBC

## Workflow rule

Never `git push` without explicit "commit"/"ship"/"push" from the operator. Vercel deploys cost money. Local edits + `npm run build` to verify is fine.
