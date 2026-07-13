---
type: pattern
name: Single-Organization JSON-LD graph
status: v0
source: marley_moves
tested_on: [marley_moves, first_taxis]
ai_library_skill: O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-schema-graph
---

# Single-Organization JSON-LD graph

## What it is

One global Organization (or LocalBusiness subtype) node, referenced by every other entity on the site. Areas/towns get **Service** nodes (`provider → #organization`, `areaServed → City`), **not** duplicate LocalBusiness/MovingCompany nodes per town. Owner is a global **Person** entity emitted from the root layout. Reviews are individual **Review** entities backing the **AggregateRating**. **BreadcrumbList** is emitted by the visible breadcrumbs component as the single source of truth.

## Where the implementation lives

- Skill: `O:/red-banana-studio/ai-library/skills/local-business-seo/skills/local-business-schema-graph/prompt.md`
- Working code: `O:/marley/site/web/lib/schema/jsonld.tsx`
- Visible breadcrumbs SSOT: `O:/marley/site/web/components/layout/Breadcrumbs.tsx`
- Global Person emit: `O:/marley/site/web/app/layout.tsx`

## Gotchas / assumptions

- **Inbound graph references must resolve.** If `Organization.founder: { @id: '#person' }` exists, the Person node has to render on every page where the Org node renders — not just `/about/`. Marley fixed this by moving Person emit to the root layout.
- **Visible breadcrumbs and JSON-LD breadcrumbs must match.** Two sources drift. Google validates this. Move JSON-LD into the visible component, not into a per-page helper.
- **AggregateRating without Review entities looks unverifiable** to Google. Inline reviews on the `/reviews/` page must each emit their own Review JSON-LD with `itemReviewed: { @id: '#organization' }`.
- **Brand-suffix double-stamping**: if a Sanity editor types "Page Title — Brand" into `seo.title` and the layout template also appends "— Brand", you get "Page Title — Brand — Brand". Strip the suffix at read-time (see `web/lib/seo/canonical.ts:76` `stripBrandSuffix`).
- **Don't emit per-town LocalBusiness nodes.** Marley initially tried `townLocalBusinessSchema()` per town — created 16 competing LocalBusiness entities for one physical business. Google can't pick a primary entity. Switched to `townServiceSchema()` (a Service node) and the graph cleaned up.

## What to verify on a new site

- [ ] Run Schema.org validator on home + 1 service + 1 town + 1 insights post — all entities resolve, no orphaned `@id` refs.
- [ ] Run Google Rich Results test on the same 4 pages.
- [ ] `Organization` appears once per page (not duplicated by misconfigured layout).
- [ ] `BreadcrumbList` items match the visible breadcrumbs character-for-character.
- [ ] `AggregateRating.reviewCount` matches the count of `Review` entities emitted on `/reviews/`.
- [ ] `Person.knowsAbout` is non-generic (lists the actual services, not "moving" alone).

## Provenance

Refined across Marley sessions 1–7. Final form documented in handoff `O:/marley/site/docs/superpowers/specs/2026-04-25-what-we-do-mosaic-design.md` and the AEO handoff (TASK 1, 2, 3, 4, 6 from `marley-moves-aeo-handoff.md`).

## Adaptations from Marley → First Taxis (v0 application 2026-05-06)

Applied to First Taxis as the second tested-on instance. Implementation at `O:/FirstTaxis/src/lib/seo/jsonld.ts` and `O:/FirstTaxis/src/components/seo/SchemaGraph.tsx` (commit `57b3b15` on `main`).

### What translated cleanly

- **The graph shape itself** — single `#organization`, single `#website`, Service-per-area (TaxiService here, since it's a taxi business), provider → @id ref, BreadcrumbList items passed in by caller, FAQPage from same source as visible UI. All six skill invariants applied without modification.
- **The "no fabricated data" discipline** — AggregateRating omitted entirely until real reviews exist, Person omitted until owner public-display details supplied. The skill's bias toward truthful structured data is framework-agnostic.
- **`@id` discipline** — `${BASE_URL}/#organization`, `${BASE_URL}/#website`, `${BASE_URL}/#person` reference targets resolve identically to the Marley scheme.

### What needed adaptation for non-Sanity / Vite + React

- **Data source**: Marley pulls Organization, Person, areas, services, reviews from Sanity GROQ queries; First Taxis has no CMS yet, so the JSON-LD helpers consume from the static `BUSINESS` constant (`src/lib/constants.ts`) and the static `routes.ts` array. The helpers' API stayed shape-compatible; only the *call sites* differ. **Insight**: the schema helpers should be designed to take a "business config" object as input — not query the CMS internally — so swapping data sources is a one-line change at the call site, not a helper rewrite.
- **Delivery mechanism**: Marley uses Next.js's metadata API + `app/layout.tsx` for the global emit; First Taxis uses `react-helmet-async` `<script type="application/ld+json">` tags rendered by a `<SchemaGraph />` component mounted inside `<Layout>`. The pattern translated 1:1 — every page rendering Layout gets the global emit.
- **Person schema deferred**: Marley shipped Connor's Person entity globally in session 2. First Taxis has Peter as owner but no confirmed public-display name + jobTitle + knowsAbout, so the helper exists but is NOT emitted. Captured this in the helper signature as `personSchema(owner | null)` — pass `null` (default) and it emits nothing; supply a populated owner and it emits. Adopting this option-bearing signature back in the canonical skill might be worth doing for v1 — there will always be sites where the owner-data ask is unresolved at schema-emit time.
- **Service-page wrapper API**: the legacy `ServiceStructuredData` took `url="/services/airport-transfers"`; the canonical pattern works on `slug`. Refactored to take `slug` and let the helper build the URL — fewer ways for callers to pass an inconsistent canonical URL.
- **TaxiService instead of MovingCompany**: trivially obvious but worth noting — the `@type` per-area Service node is dictated by the operator type, not hard-coded in the helper. The helper takes `serviceType` from the caller. Marley's reference doc names it as "Service node" generically; the actual `@type` value is operator-specific.

### What didn't translate cleanly (red flags for v0→v1)

- **Trip + Offer for routes**: First Taxis previously emitted a `Trip` schema with an inline `Offer` block claiming `priceCurrency: GBP` + `availability: InStock` per route. With no real per-route price, this was structured-data fabrication exactly equivalent to AggregateRating-without-Reviews. The skill doesn't have a guardrail for this case — it focuses on Org/Person/Service/Review/Breadcrumb/FAQ. **Recommendation for v1**: add an explicit "Don't emit Offers without real prices" anti-pattern note.
- **Pre-existing duplicate-Organization-in-area-pages bug**: the legacy `AreaStructuredData.tsx` emitted an inline `provider: { "@type": "LocalBusiness", "@id": "#organization", name, telephone, email, ... }` — the @id matched but the inline name/telephone/email created an entity-fragmentation risk Google could interpret as a duplicate node. The fix was simple (use `provider: { "@id": ORG_ID }` only). The skill's invariant 3 (provider by @id only) catches this if followed strictly; might be worth strengthening the wording from "references" to "references *only* by @id, never with inline duplicated properties".

### What would still need work to apply to a third site

- **Distance/duration as `additionalProperty`** on TaxiService is a taxi-specific use of the schema. For a non-taxi local-service site, the equivalent would be different (job-size estimate? service-radius? appointment-duration?). Worth abstracting — the helper builds a generic `additionalProperty` array; consumers populate with whatever facts exist. Not blocking, just a usage note.
- **The static distance map** First Taxis uses for sorting RelatedAreas (`DISTANCE_FROM_GILLINGHAM_MILES` keyed by slug) is acceptable for a 5-area set but won't scale to 30+ areas. When a CMS lands, this becomes a `distanceFromHqMiles` field on the area document and the sort drops directly into the existing helper API.
- **The owner-not-yet-confirmed Person case** — see above. Promoting the option-bearing `personSchema(owner | null)` signature into the canonical skill would handle this cleanly for any site where owner details are still in discovery.

Status remains **v0** — promote to v1 after a third application validates the same patterns hold.
