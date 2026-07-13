---
project: bmvplumbing.co.uk (RH Plumbing & Heating, trading as BMV Plumbing)
owner: Rob Holton
prepared_by: Red Banana Studios (AIOS) for handoff to dev team
prepared: 2026-07-08
---

# BMV Plumbing — Website Build Handoff

Start here. This folder is a complete build brief for a new local-service
website, modelled directly on the technical SEO structure and content
patterns that were proven on the **Marley Moves** website rebuild (and
cross-validated on **First Taxis**). Every pattern referenced here has
already shipped on a live site — this isn't theory, it's a second/third
application of a working recipe.

## Read in this order

| # | File | What it is |
|---|---|---|
| 1 | `business-facts.json` | **Single source of truth.** The only facts anyone (human or AI) may assert in copy or schema. Read this before writing a single word of content. |
| 2 | `01-Project-Brief.md` | Project overview, goals, sitemap, owner-focus strategy, content rules, anti-patterns |
| 3 | `02-Technical-SEO-Spec.md` | The full technical SEO structure: JSON-LD schema graph, meta/OG/Twitter cards, AEO (AI-crawler) stack, internal linking, pre-launch checklist |
| 4 | `content/03-Services-Content-Brief.md` | The 4 dedicated service pages |
| 5 | `content/04-Insights-Content-Brief.md` | 6 Insights (blog-style) articles |
| 6 | `content/05-Guides-Content-Brief.md` | 6 Guides (evergreen pillar) articles |
| 7 | `content/06-FAQs.md` | 20 FAQs, sourced from real "People Also Ask" research |
| 8 | `content/07-Area-Pages-Brief.md` | 3 area pages: Shaftesbury, Wincanton, Sturminster Newton |
| 9 | `skills/` | **Packaged, reusable skills + working reference code** — see below |

## What's in `skills/`

This is not a reading list — it's executable and copy-paste-able material used to build Marley Moves and First Taxis, packaged so the dev team doesn't rebuild any of it from scratch:

- **`skills/local-business-seo/`** — the full 8-skill kit: site bootstrap (Next.js 16 + Sanity v5 + Tailwind v4 + Vercel), CMS seed, area-page enricher, JSON-LD schema graph, AEO stack, content audit, internal linking, pre-launch checklist. Each sub-skill folder has a `SKILL.md` (the instructions) plus `templates/`/`references/` with actual code (Sanity schemas, React components, robots.ts, llms.txt route, etc.).
- **`skills/local-business-conversion/`** — lead-capture chrome: two-step quote form, sticky mobile CTAs (call bar, WhatsApp float), 4-layer analytics stack (Plausible/GA4/GTM/Meta) with first-touch attribution and Google Ads Enhanced Conversions.
- **`skills/dataforseo-keyword-pipeline/`** — five-phase keyword + SERP research pipeline (produces the content briefs' keyword targets).
- **`skills/ai-content-workflow/`** — the 6-rule content discipline (source-first, never invent, verify against reality) that every content brief in this handoff was written under.
- **`skills/local-service-seo-builder.agent.md`** — the orchestrator agent. If your dev team has Claude Code, this agent knows how to route work to the right sub-skill by project stage (cold-start → area pages → schema → AEO → audit → pre-launch). Point it at this whole `BMV/` folder as context.
- **`skills/brain-pattern-notes/`** — the distilled "what worked, what needed adapting" notes from applying this exact pattern to Marley Moves (removals) and First Taxis (taxis) — read these to understand *why* the pattern looks the way it does before deviating from it.
- **`skills/reference-code-jsonld.ts`** and **`reference-code-areaEnrichment.ts`** — First Taxis' actual working JSON-LD helper functions and area-enrichment data structure. These are the closest existing precedent to a plumbing site (both are non-Sanity, static-data-driven local service businesses) — adapt directly rather than starting from the Sanity-flavoured templates if the stack isn't Next.js + Sanity.
- **`website-seo-prelaunch-checklist.md`** — the gate to run before this site (or any page on it) goes live. Every item on it was a real defect caught on a previous launch.

## The one-sentence brief

Build `bmvplumbing.co.uk` as a single-Organization local service business site for Rob Holton's plumbing and gas business, using the exact schema graph / area-page / AEO / internal-linking patterns proven on Marley Moves and First Taxis, with Rob positioned as the named, trusted local expert (the same E-E-A-T role Connor plays for Marley).

## Non-negotiables (see `02-Technical-SEO-Spec.md` for detail)

- Single `#organization` JSON-LD node + global `#person` (Rob) node + Service-per-page (not duplicate LocalBusiness per area/service)
- FAQPage schema on every page that has visible FAQs, sourced from the same content as the visible accordion (never drift)
- Open Graph **and** Twitter Card (`summary_large_image`) complete on every single page, not just the homepage
- AI-crawler allowlist (GPTBot, ClaudeBot, PerplexityBot, etc.) + `llms.txt` + `llms-full.txt`
- No em-dashes, no AI-tell words, UK English, no invented facts/prices/credentials — see `business-facts.json` banned-claims list
- No map iframes, no programmatic `/area/service/` matrices, no hardcoded review counts — see anti-patterns section

## Open questions the dev team should get resolved before final content lock

1. **Brand name form** — "BMV Plumbing" vs "RH Plumbing & Heating" — see `business-facts.json`.
2. **Rob's Gas Safe registration number** — required before any "Gas Safe registered" claim or badge appears (legal claim, not marketing).
3. **Emergency callout response time and pricing** — not yet confirmed; ship with placeholder-safe language until Rob gives real numbers.
4. **Social/directory profile URLs** (GBP, Facebook, Checkatrade or equivalent) — needed for `sameAs` schema.

Everything else needed to start building is in this folder.
