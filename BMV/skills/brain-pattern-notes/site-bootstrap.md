---
type: pattern
name: Site bootstrap (Next.js + Sanity + Vercel + Resend)
status: v0
source: marley_moves
tested_on: [marley_moves]
ai_library_skill: O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-site-bootstrap
---

# Site bootstrap

## What it is

Cold-start scaffold for a new local-business site. Stack:

- Next.js 16 App Router + React 19 + TypeScript strict
- Tailwind v4 (design tokens in `app/globals.css` `@theme` — no `tailwind.config.ts` unless v4 needs it)
- Sanity v5 Studio in `studio/` folder, project ID configured in `.env.local`
- Vercel hosting (uses `VERCEL_ENV` for preview gating)
- Resend for transactional email (server action pattern)
- UK English by default

What it pre-wires:

- Single-Organization JSON-LD graph (see [[schema-graph-single-org]])
- Canonical + `IS_PRODUCTION_DEPLOYMENT` noindex gate
- `next.config.ts` redirect manifest stub
- `app/sitemap.ts`, `app/robots.ts` with AI crawler allowlist
- `app/llms.txt/` and `app/llms-full.txt/` route stubs
- Sanity schemas: area, service, post, faq, review, author, siteSettings, tracking
- Project `CLAUDE.md` with content rules baked in (no em-dash, no AI tells, address-display rule)

## Where the implementation lives

- Skill: `O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-site-bootstrap/prompt.md`
- Working layout: `O:/marley/site/` (use as reference, not template — kit reproduces the shape, not the content)

## Gotchas / assumptions

- **Stack is opinionated.** If a project demands WordPress, Astro, or static-site, skip bootstrap and use only the stack-agnostic skills (schema graph, content audit, AEO stack).
- **`studio/` is a sibling of `web/`, not nested inside.** `O:/marley/site/web/` and `O:/marley/site/studio/` are two npm projects under one repo. Sanity's deploy + datasets stay separate from Next's.
- **The kit writes a project-level `CLAUDE.md` with content rules.** Don't strip these — they're how future Claude sessions on the same project re-pick up the rules without reading the kit.
- **The redirect manifest stub is empty.** Bootstrap doesn't know the old sitemap. Run pre-launch checklist against the old site to populate it.

## What to verify on a new site

- [ ] `npm run build` succeeds with all routes static (no SSR escapes).
- [ ] `app/llms.txt` and `app/llms-full.txt` return 200.
- [ ] `app/robots.ts` lists AI crawlers explicitly.
- [ ] `lib/seo/canonical.ts` exists with `IS_PRODUCTION_DEPLOYMENT` gate.
- [ ] Sanity schemas include all 8 baseline doc types.
- [ ] Project `CLAUDE.md` has the content rules block.

## Provenance

Pattern crystallised retroactively from Marley's working repo (`O:/marley/site/`). The bootstrap skill is the *next-time* version — Marley's own bootstrap was manual.
