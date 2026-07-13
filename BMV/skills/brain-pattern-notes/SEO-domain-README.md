---
type: domain
name: SEO Engine
status: v0
sources: [marley_moves]
tested_on: [marley_moves, first_taxis]
last_audited: 2026-05-07
---

# SEO Engine

## Status

**v0** — distilled from a single project (Marley Moves website rebuild, Apr–May 2026). Untested elsewhere. The first cross-validation will be **First Taxis** (Shaftesbury taxi service); promotion to v1 requires the patterns to survive that second build with only minor adaptation.

This domain is scoped to **single-Organization local UK service businesses** with a small service catalogue (3–10 services), 5–30 named towns served, owner-operator E-E-A-T, and lead-capture (not real-time booking). Out of scope for now: e-commerce, SaaS, multi-location franchises, marketplaces.

## Where the assets live

The implementation is split between two locations:

### 1. `O:\red-banana-studio\ai-library\skills\` — the executable kits + skills

#### Kit: `local-business-seo/` (1 agent + 8 sub-skills)

| Skill | Purpose |
|---|---|
| `local-service-seo-builder` (agent) | Orchestrator. Routes work to the right sub-skill based on project stage. Carries cross-cutting content rules + anti-patterns. |
| `local-business-site-bootstrap` | Cold-start scaffold: Next.js 16 + Sanity v5 + Tailwind v4 + Vercel + Resend with SEO baseline pre-wired. |
| `local-business-cms-seed` | Re-runnable Sanity seed for siteSettings, tracking, owner Person doc. |
| `local-business-area-page-enricher` | The 8-element area-page recipe (named streets, postcodes, distance, property types, routes, pricing, earned detail, FAQs) + the "remove location name" test. |
| `local-business-schema-graph` | Single-Org JSON-LD pattern — Org + global Person + Service-per-area + Reviews backing AggregateRating + BreadcrumbList from visible nav. |
| `local-business-aeo-stack` | AI crawler allowlist in robots, `llms.txt` + `llms-full.txt` routes, global Person schema for E-E-A-T, **per-page lead AnswerBlock + per-page FAQs accordion** (sub-patterns surfaced via First Taxis 2026-05-07). |
| `local-business-content-audit` | Re-runnable check for banned characters (em-dash), AI tells, USP repetition, cross-page boilerplate, UK English drift, address-display rule. |
| `local-business-internal-linking` | The 4+4+3 RelatedAreas/Services/Posts pattern + in-body cross-link rule with varied anchor text. **(promoted 2026-05-06)** |
| `local-business-pre-launch-checklist` | Noindex gates, redirect manifest, `INDEXING_ENABLED` cutover step, API key restrictions, DNS TTL, parallel-old-site rollback. |

The kit's `DESIGN.md` records 14 baked-in decisions with rationale (single Org node, global Person, breadcrumb SSOT, no map iframes, no programmatic /area/service/ matrices, etc.).

#### Kit: `local-business-conversion/` (3 sub-skills) — **new 2026-05-06**

Sibling kit to `local-business-seo`. SEO architecture and content live in that kit; this kit covers the lead-capture chrome that turns SEO traffic into form submits.

| Skill | Purpose |
|---|---|
| `local-business-lead-form` | Two-step hero quote form + single-step `/quote/` form + `AddressAutocomplete` (Google Places) + `PostcodeChecker` + dual-write Resend + CMS server action. |
| `local-business-sticky-ctas` | MobileCallBar + MobileQuoteStickyBar + StickyQuoteButton + WhatsAppFloat with z-index discipline + path-aware rendering. Plus the TrustStrip rating-only-no-count rule. |
| `local-business-conversion-analytics` | Four-layer stack (Plausible + GA4 + GTM + Meta) + first-touch attribution (30-day TTL) + Google Ads Enhanced Conversions (SHA-256 hashed PII) + Meta Lead-event mapping + click delegation listener. |

The kit's `DESIGN.md` records 12 baked-in decisions with rationale.

#### Top-level skills

| Skill | Purpose |
|---|---|
| `dataforseo-keyword-pipeline` | **Promoted 2026-05-06.** Five-phase, cache-backed research pipeline — master keyword CSV, Map Pack census, per-page content briefs (top-10 SERP snapshot, consensus H2s, gap detection, schema, internal-link suggestions, geo-ambiguity warnings, directory-dominated SERP flags), executive summary. ~$3.20 first run; cached re-runs free. |
| `ai-content-workflow` | **Promoted 2026-05-06.** Six-rule discipline that gates every AI-assisted content draft — source first, structured facts before prose, never invent, verify against reality, one earned detail minimum, first-person posts from real transcripts. Domain-agnostic; pairs with content-recipe + content-audit skills. |

#### Other ai-library SEO skills (referenced where relevant)

`ai-discoverability-audit`, `seo-audit`, `seo-optimizer`, `seo-growth-tracker`, `local-visibility`, `localrank-agent`, `linkgap`, `backlink-analyzer`, `backlink-outreach`, `competitor-alternatives`, `content-strategy`, `google-business-profile-optimizer`, `google-search-console`, `google-analytics`, `google-tag-manager`.

When applying patterns to a new site, **read the relevant skill — don't guess from these notes**.

### 2. `09_Domains/SEO/patterns/` — pattern notes (this folder)

Compressed annotations of each pattern with: where it was proven, where the implementation lives (skill or path in `O:\marley`), gotchas, and what to verify when applying it elsewhere.

```dataview
TABLE WITHOUT ID
  file.link AS Pattern,
  status AS Status,
  ai_library_skill AS "ai-library skill",
  tested_on AS "Tested on"
FROM "09_Domains/SEO/patterns"
WHERE type = "pattern"
SORT file.name ASC
```

## Promotion criteria — v0 → v1

A pattern stays at v0 until **all** of the following are true:

1. Successfully applied to a second project (First Taxis is the planned second test).
2. Adaptation cost was < 1 hour per pattern (i.e. it generalised, didn't need rewriting).
3. The pattern note here has been updated with what changed and what stayed identical between the two sites.

A pattern is **rejected** (deleted from this domain) if it required > 4 hours of adaptation on the second site — that means it was Marley-specific, not generalisable. Capture the reason in `11_Learnings/`.

A pattern reaches **v2** after a third successful application with no further adaptation.

## How to use this domain

**Building a new local-service site:** invoke `@local-service-seo-builder` from the ai-library kit. The agent picks the right SEO sub-skill per stage. For conversion chrome, invoke `@local-business-conversion` skill or its sub-skills directly. For keyword research, invoke `dataforseo-keyword-pipeline` first (informs every page brief). For any AI-assisted content writing, pair with `ai-content-workflow`.

**Auditing an existing site:** run `local-business-content-audit` and `local-business-schema-graph` (audit mode) directly. They flag deviations from the proven baseline.

**Capturing a new SEO pattern:** add a pattern note here first (cheap), promote it to an ai-library skill once it's been used twice (expensive but durable).

## Brand voice

Marley-specific tone rules captured at `brand-voice-marley.md`. These are **project-specific**, not domain-wide — taxis and removals can't share a brand voice. The doc is here as a worked example showing what tone-rule level of detail looks like.

## Open questions

- The kit is opinionated about Next.js 16 + Sanity v5. How much survives if the next project demands WordPress, Astro, or a static-site generator? Schema graph + content audit + AEO stack + content workflow + keyword pipeline should port; bootstrap + pre-launch + lead-form (Resend-specific) are stack-locked.
- All four 2026-05-06 promotions still need real-world validation on a second project. First Taxis is the planned bake-off.
