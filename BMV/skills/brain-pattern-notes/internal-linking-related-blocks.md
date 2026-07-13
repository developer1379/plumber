---
type: pattern
name: Internal linking — Related Areas / Services / Posts blocks
status: v0
source: marley_moves
tested_on: [marley_moves, first_taxis]
ai_library_skill: O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-internal-linking
---

# Internal linking — Related blocks

## What it is

The 4+4+3 pattern. Every long-content page renders three CMS-driven blocks at the bottom that wire the topic graph together without manual link-management:

- **`<RelatedAreas>`** — pulls top 4 areas from CMS ordered by `distanceFromHqMiles`. Used on every service page and every post. Optional intro prose + CoverageMap integration when it adds value.
- **`<RelatedServices>`** — pulls 4 sibling services from CMS, excludes self. Used on every area page and every post.
- **`<RelatedPosts>`** — pulls 3 most-recent published posts, excludes self. Used on every service page and every area page.

The pattern: every long-content page links to ~10–14 other pages by default (4 areas + 4 services + 3 posts + a few in-body cross-links). Topics cluster naturally without anyone maintaining a link spreadsheet.

Plus the in-body cross-link rule: each area page mentions ≥2 nearby sibling areas in flowing copy, with varied anchor text. Body-prose links signal topical relevance more strongly than card-grid links.

## Where the implementation lives

- ai-library sub-skill: [O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-internal-linking](O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-internal-linking)
  - `SKILL.md` — the skill (4+4+3 pattern + in-body rule + z-index/limits + adapt-to-CMS process)
  - `references/RelatedAreas.tsx`, `RelatedServices.tsx`, `RelatedPosts.tsx` — Marley implementations
- Marley working code:
  - `O:/marley/site/web/components/sections/RelatedAreas.tsx`
  - `O:/marley/site/web/components/sections/RelatedServices.tsx`
  - `O:/marley/site/web/components/sections/RelatedPosts.tsx`
- Coverage map: `O:/marley/site/web/components/sections/CoverageMap.tsx`
- Town-anchored service sub-sections (in-body cross-links inside service pages): `O:/marley/site/web/app/services/[slug]/service-town-sections.ts`
- Wired in: `O:/marley/site/web/app/services/[slug]/page.tsx` (lines 712, 717, 723), `app/removals/[town]/page.tsx` (line 455), `app/insights/[slug]/page.tsx` (line 174)

## Gotchas / assumptions

- **Pull from CMS, don't hardcode.** All three components query Sanity (or whatever CMS). Hardcoded lists rot the moment the operator adds a town.
- **Limits matter** — 4 areas, 4 services, 3 posts. Marley tested wider grids (8 areas, 6 services); they added clutter without compounding crawl benefit. Beyond 4–6 sibling links, Google's link-equity distribution is functionally identical and user cognitive load goes up.
- **Don't render the same component twice on a page.** Service page already has `<RelatedAreas>` — don't add a second one mid-body. Looks like link inflation.
- **Vary anchor text** for the same destination URL. Card-grid block gives the canonical anchor; in-body links should add variety ("Shaftesbury", "moves to Shaftesbury", "the Shaftesbury crew", "Shaftesbury (SP7)").
- **Body-prose links matter more than card-grid links.** Make sure body copy actually mentions sibling areas — the card grid is the SEO surface, the body prose is both the SEO and human surface.
- **Adjacency / ordering needs a sort field.** RelatedAreas needs `distanceFromHqMiles` or equivalent. Without it, you can't sensibly choose "top 4". Add to the CMS schema and seed it.

## What to verify when applying to a new site

- [ ] Pick a random service page — count internal links. Should be ~10–14 (4 areas + 4 services + 3 posts + a few in-body).
- [ ] Pick a random area page — body copy mentions ≥2 sibling areas by name with links.
- [ ] No two pages share an identical "Related" block (sort field gives variety).
- [ ] Anchor text for the same destination URL varies across the site (audit with `grep` or a small script).
- [ ] CMS has the sort field populated for every area (no nulls breaking the sort).

## Adaptations from Marley → First Taxis (v0 application 2026-05-06)

Applied to First Taxis as the second tested-on instance. New `<RelatedAreas>` at `src/components/sections/RelatedAreas.tsx`. RoutePage already had inline Related Routes at parity — left untouched. Commit `afa5262` on `main`.

### What translated cleanly

- **The 4-card grid pattern** — Marley uses 4 cards from the canonical query; First Taxis renders 4 cards from a static `AREAS` constant (5 main areas, exclude current = 4 siblings — exact match for the pattern's preferred count).
- **Anchor-text variety rule** — built a 3-variant anchor map per area slug (`"Taxi Gillingham" / "Gillingham, Dorset" / "Gillingham SP8"`) and the card position rotates through variants. Same destination URL, varied text — exactly the anti-pattern the skill flags.
- **Distance-based sort** — replaced Marley's CMS `distanceFromHqMiles` field with a static keyed map `DISTANCE_FROM_GILLINGHAM_MILES`. Same sort logic; different data source.
- **Excludes-self prop** — `excludeSlug` works identically to Marley's `excludeSlug`.
- **No hardcoded link-list rot** — even though the data is static, the *components* derive the list from `AREAS`, so adding a town to the constant auto-slots into the grid (just as adding a Sanity area auto-slots into Marley's grid).

### What needed adaptation for non-Sanity / Vite + React

- **Data source**: static `AREAS` constant + a hand-coded distance map instead of a Sanity GROQ query. Acceptable for 5 areas; **insight**: the skill should describe a "static-data fallback" mode for sites under ~10 areas where a CMS isn't worth the overhead. The component API stays identical; only the *data fetch* line differs (read from import vs await GROQ).
- **Anchor element**: React Router `<Link to=...>` instead of `next/link`. Trivial swap.
- **Per-component limit**: First Taxis only has the area-side; service-pages would need similar treatment but only 2 service detail pages exist (`/services/local-taxi`, `/services/airport-transfers`). The 4+4+3 pattern collapses to 4+1 here, which is the right call for a 2-service inventory — adding `<RelatedServices>` would be padding.
- **No RelatedPosts**: First Taxis has no insights/blog yet. The 3-post block is on the roadmap once content exists.

### What didn't translate cleanly (red flags for v0→v1)

- **The route-pages case**: First Taxis has 156 route pages (12 origins x 13 destinations) where each page is itself a "related" target. The Marley pattern doesn't have route pages — it has services + areas + insights. The existing `getRelatedRoutes()` helper in `routes.ts` (returns up to 4 routes sharing origin OR destination) covers this case at parity with the skill's intent, but the skill doesn't currently describe a "matrix-page" related-block. **Recommendation for v1**: add a "RelatedMatrixPages" pattern variant for sites with origin×destination grids (taxis, removals, courier services) — same 4-card grid, ranks by shared dimension.
- **In-body cross-link rule on area pages**: Marley's area-page enricher produces body copy that mentions ≥2 sibling areas with varied anchor text. First Taxis area pages currently have body copy that mentions landmarks but doesn't explicitly cross-link to sibling areas in flowing prose. The card-grid block (RelatedAreas) is in place, but the body-prose links are a separate enrichment pass — deferred until area-page-enricher runs against First Taxis.

### What would still need work to apply to a third site

- **Adjacency map maintenance** — the static `DISTANCE_FROM_GILLINGHAM_MILES` keyed by slug needs updating each time a town is added. For First Taxis (12 origins) this is acceptable; for 30+ areas it becomes maintenance burden. Either move to a CMS or generate from postcode/lat-long lookups at build time.
- **CoverageMap component** — Marley has a custom SVG coverage map for the service-page RelatedAreas block. First Taxis doesn't have one yet (the existing `MapPlaceholder` component exists but isn't a coverage map). For a site that needs the visual surface, this would need building from scratch.
- **The "in-body cross-link" rule** is enforced by the `local-business-area-page-enricher` skill in Marley's pipeline, not by the internal-linking skill itself. For sites without an enricher pass, the rule has to be applied manually. Worth flagging that the two skills are coupled — the bottom card-grid is from this skill; the body prose is from the enricher.

Status remains **v0** — promote to v1 after a third application validates the static-data + matrix-page extensions hold.
