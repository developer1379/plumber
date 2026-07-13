---
type: pattern
name: Area / town page recipe
status: v0
source: marley_moves
tested_on: [marley_moves, first_taxis]
ai_library_skill: O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-area-page-enricher
---

# Area / town page recipe

## What it is

A 900–1050-word recipe for area/town/city pages on a local service business site. Eight required elements:

1. **≥3 named streets/areas** in the town (real, verified against Royal Mail / OS Maps)
2. **Outward + first-half postcodes** covered (e.g. SP7, BA8 0)
3. **Distance from base** (road miles, not crow-flies)
4. **Property types** dominant in that town (Georgian, post-war estate, listed, etc.)
5. **Routes / access realities** (A-roads, parking permits, narrow streets, school-run timing)
6. **Indicative pricing** (typical 3-bed local-move band)
7. **≥1 earned detail** — a specific operational story or anecdote that proves real local presence
8. **4–6 location-specific FAQs** (not site-wide FAQs)

The "remove location name" test gates the page: if you delete the town name from the page and someone reading it can't tell which town it's about, the page is templated and must be rewritten.

## Where the implementation lives

- Skill: `O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-area-page-enricher/prompt.md`
- Working code: `O:/marley/site/web/app/removals/[town]/town-content.ts` (16 towns)
- Audit script (re-runnable): `O:/marley/site/web/scripts/audit-town-content-vs-shaftesbury-bar.mjs`
- Bar-setting exemplar: `/removals/shaftesbury/` (Gold Hill piano, Bell Street, real prices)

## Gotchas / assumptions

- **AI structures, never invents.** No street name, postcode, price, or anecdote may be added that isn't in the source. Empty sections stay empty (`<!-- INSUFFICIENT SOURCE -->`). One hallucinated street name kills the page's authority. Source comes from a 5-minute owner voice memo per town.
- **Verify before publish.** Streets via Royal Mail / OS Maps. Postcodes via postcodes.io. Routes via actual driving (or at minimum Google Maps directions with timing).
- **Earned detail is non-optional.** "We move pianos in this area" is generic. "We moved a 1920s grand piano off Gold Hill in Shaftesbury, the angle on the steps means a 3-person carry" is earned. Without one earned detail per page, the page reads as templated.
- **Address-display rule applies.** Body copy uses recognised town + outward postcode only ("Shaftesbury, SP7"). Full street address only in JSON-LD, legal pages, and form placeholders.

## What to verify on a new site

- [ ] Word count 900–1050 for each area page (not 600, not 2000).
- [ ] "Remove location name" test passes on 3 randomly-picked area pages.
- [ ] No street name appears that isn't on Royal Mail's lookup.
- [ ] Each page has a distinct earned detail (cross-check that no two pages share an anecdote).
- [ ] FAQs are location-specific, not site-wide rehashes.
- [ ] No on-page USP repetition (insurance figures, fixed-price language, etc. mentioned once max per page).

## Provenance

Pattern crystallised in Marley sessions 5–7 after the post-2026-04-26 SEO audit response (commit range `e583bef`–`7df30f3`). Sherborne and Shaftesbury were the first two pages to hit the bar; the audit script enforces it across all 16 towns. Workflow rules in `O:/marley/site/docs/superpowers/specs/2026-05-01-content-workflow.md`.

## Adaptations from Marley → First Taxis (v0 application 2026-05-07)

Applied to First Taxis as the second tested-on instance. Two commits on `claude/conversion-kit`: enrichment data + the AreaEnrichmentBlock + RouteEnrichmentBlock components, wired into AreaPage and RoutePage.

### What translated cleanly

- **The 8-element recipe** — every requirement maps directly. Streets / postcodes / distance / access / pricing / earned detail / FAQs all have analogues for a taxi business.
- **The "remove location name" test** — pass/fail discipline holds. After enrichment, all 5 First Taxis area pages pass cleanly (you can identify the town from streets + landmarks + access notes alone, no town-name needed).
- **Source-first / no-invention rule** — verbatim. Wikipedia + StreetCheck/Streetlist UK postcode databases were the primary sources for First Taxis (no operator voice memo because Peter is travelling); the discipline of "if it's not in the source, omit it" is identical.
- **AI-content-workflow Rule 3** — "AI structures, never invents" — held throughout. Where a fact wasn't directly verifiable from a primary source, it was OMITTED. No fabrications shipped.

### What needed adapting for the taxi domain

- **"Property types" became "travellers we serve"**: removals firms describe housing stock (Victorian terraces, modern Persimmon estates, listed buildings); taxi firms care about commuter profile (railway-station commuters to London Waterloo, race-day visitors, hospital-appointment passengers, school-run families). Same recipe slot, different domain content.
- **"Earned detail"** is harder without operator input. Marley's recipe assumes a 5-minute owner voice memo per town giving truly operator-specific details ("the bin lorry can't fit down Castle Hill so we transfer to a smaller van"). First Taxis didn't have that — Peter was travelling — so the operational notes are derived from verified geography (Gold Hill is steep cobbles → pickups use Park Walk; Tisbury station car park is paid Mon-Fri / free weekends; Mere bypass joins A303 in two places, eastbound vs westbound). These are honest geographic-fact-driven notes, not invented operator stories. Marked TBD-replaceable when Peter supplies real operator-specific notes. **Recommendation for v1**: the skill should explicitly support a "geographic-fact-derived operational notes" mode for projects where the operator can't supply a voice memo at recipe-time, with a clear upgrade path to operator-confirmed notes later.
- **Route pages didn't exist in the Marley recipe** — Marley's matrix is service × town (e.g. `/removals/shaftesbury/`). First Taxis has origin × destination (`/taxi/{origin}-to-{destination}/`), 156 routes. Surfaced a destination-keyed enrichment pattern: enrichment is keyed off the destination (Heathrow, Gatwick, Bristol, etc.), not the (origin, destination) pair. 13 destination records cover 156 routes — ~12× content efficiency. **Recommendation for v1**: add "matrix-page enrichment" as a documented sub-pattern alongside the area-page recipe, with the destination-keying as the canonical approach.

### What didn't translate cleanly (red flags for v0→v1)

- **The 900–1050w word-count target** is a Marley-specific calibration — that's how much body copy Marley's design surfaces support without padding. First Taxis' design has a denser layout (existing landmarks list, services list, trust-strip, FAQs accordion all already present) — adding 900–1050w of enrichment on top crowds the page. The 600-900w enrichment + the existing template = roughly the right total. **Recommendation for v1**: the skill should specify enrichment word count as "what the design surface supports without padding" not a fixed number.
- **Marley's audit script** (`audit-town-content-vs-shaftesbury-bar.mjs`) is removals-specific — checks for piano / Victorian / specific-street patterns. Would need adapting per-domain. The general 8-point pass/fail is portable but the specific signals aren't.

### What would still need work to apply to a third site

- **Per-area facts schema + verification rubric** as a deliverable of the skill, not a per-project script. Currently each project's enrichment is a hand-authored TS data file. A common schema (with optional fields per domain — "property types" for removals, "travellers we serve" for taxis, "trade types" for plumbers) would let the same skill drive any local-service-business domain.

## Castle Cary follow-up — SEO-domain-skewed area page (2026-05-07)

The Castle Cary area page shipped as a **6th demand area** with a deliberately different recipe shape from the other five. Three commits on `claude/conversion-kit`: routes (`91fd553`), area enrichment + AreaPage entry (`f908a6a`), airport-skewed FAQ pool + dispatcher (`e91f4ea`).

Why it differs: keyword research showed 1,000/mo for "castle cary taxis" with intent profile dominated by **airport-onward queries** rather than general local taxi (Castle Cary station is on the GWR Reading–Taunton mainline, the closest mainline rail access for Glastonbury Festival, and a regular interchange for international visitors). So the page leads with airport content — Bristol Airport (28 mi / 41 min from Rome2Rio), Heathrow (106 mi / 1h 52), Gatwick (120 mi / 2h 25) — and the local-detail block (Roundhouse 1779, Market House 1855, All Saints Church) is lighter weight than the other five area pages.

### v0→v1 hardening insights from this application

- **Primary-domain-skew variant of the area-page recipe.** Some areas have keyword data that points clearly at one specific domain (airport here; could be hospital-appointments, race-day, festival, university, port etc. on other sites). The recipe should support a "primary-domain skew" knob: lead the intro with the dominant intent, weight the FAQ pool toward that intent, downweight the generic local-detail block. The other areas keep the general recipe; only the skew-targeted area gets the variant.
- **Sourced-anchor + stub-template hybrid for routes.** When per-route distance research isn't time-budget-feasible for all 13 destinations, anchor 2–3 high-value routes with sourced numbers (Rome2Rio, official airport site, etc.) and template the rest from the closest existing origin with an explicit `// stub — refine later` comment. This is the Tisbury-from-East-Knoyle precedent extended; document it as the canonical approach when sourced-per-route isn't feasible.
- **Honest omission still bites.** User-supplied "verify these facts" lists can be wrong: the brief asked me to verify "High Street, Fore Street, Bailey Hill" as Castle Cary streets and to treat the Round House as the iconic 18th-century octagonal market building. Wikipedia disconfirmed both — no street names verifiable from primary sources, and the Roundhouse is a circular 1779 lock-up (the Market House is the 1855 grade II* listed building). The areaEnrichment streets[] field is empty for Castle Cary rather than guessed; both buildings are described accurately. **Recommendation for v1**: the skill should explicitly tell the operator "your fact list will be re-verified against the source — anything that disconfirms gets omitted, even if you wrote it down."
- **FAQ-pool dispatch by area.** Pattern: keep the generic AREA_FAQS pool intact for general areas; add a dedicated pool (e.g. `CASTLE_CARY_AREA_FAQS`) for the skewed area; dispatcher in `faqsForArea(areaName)` branches on the area name. Cleaner than parameterising the existing pool — the skewed and general pools share almost no questions, so a branch is more honest than a feature flag.

Status remains **v0** — promote to v1 after a third application validates the same patterns hold (and ideally after the destination-keyed matrix-page enrichment, the geographic-fact-derived operational-note mode, and the primary-domain-skew variant are folded back into the canonical skill).
