# BMV Plumbing — Technical SEO Spec

This is the exact technical structure proven on Marley Moves (removals,
Next.js + Sanity) and cross-validated on First Taxis (taxis, Vite +
React, static data). Follow this shape — don't reinvent it. Full working
code for both precedents is in `skills/reference-code-jsonld.ts` and
`skills/local-business-seo/skills/local-business-schema-graph/`.

## 1. JSON-LD schema graph — single-Organization pattern

**The 6 invariants (do not violate any of these):**

1. Exactly **one `#organization`** node — emitted globally (root layout /
   every page), never re-emitted per-page.
2. Exactly **one `#person`** node (Rob), emitted globally, `worksFor`
   references `#organization` by `@id`. Required for
   `Organization.founder`/E-E-A-T refs to resolve on every page, not
   just `/about`.
3. **Service nodes per area/service page, never a duplicate
   LocalBusiness.** An area page emits a `Service` (or `Plumber`-typed
   service) with `provider: { "@id": "#organization" }` — never a
   second inline `LocalBusiness` with its own name/phone/address. This
   is the single most common bug on a new build (Marley shipped 16
   duplicate LocalBusiness nodes before this was fixed) — it fragments
   the entity and Google can't pick a primary one.
4. **AggregateRating only when backed by real Review nodes.** Don't
   emit an `aggregateRating` on `#organization` until there are real
   reviews to back it, and until then, emit individual `Review` nodes
   on the reviews section for every review actually shown.
5. **BreadcrumbList from the visible breadcrumb component only** — one
   source of truth. Don't also call a separate breadcrumb-schema helper
   per page; the two will drift the moment someone edits one and not
   the other.
6. **FAQPage sourced from the same data as the visible accordion.**
   Never hand-author a separate FAQ JSON-LD block — feed it the exact
   array the page renders.

### Recommended `@type` for BMV Plumbing

Schema.org has purpose-built types for this business — richer than the
generic `LocalBusiness` First Taxis had to fall back to for taxis:

```ts
"@type": ["LocalBusiness", "Plumber", "HVACBusiness"]
```

`Plumber` covers the core trade; `HVACBusiness` covers boiler/gas
heating work. Both are valid Schema.org types under
`HomeAndConstructionBusiness`.

### Adapted organizationSchema() — based on First Taxis' pattern

```ts
// lib/seo/jsonld.ts
import { BUSINESS } from "@/lib/constants"; // sourced from business-facts.json

export const BASE_URL = "https://bmvplumbing.co.uk";
export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const PERSON_ID = `${BASE_URL}/#person`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Plumber", "HVACBusiness"],
    "@id": ORG_ID,
    name: BUSINESS.name, // resolve the brand-name open question first
    url: BASE_URL,
    description:
      "Local plumbing and gas heating engineer based in Gillingham, Dorset, covering North Dorset, South Wiltshire and the Somerset borders within a 10-mile radius. Boiler servicing, installation and repairs, landlord gas safety checks, gas installations and emergency callouts.",
    telephone: BUSINESS.phone, // 07958 795 361
    email: BUSINESS.email, // rob@bmvplumbing.co.uk
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 Deer Gardens",
      addressLocality: "Gillingham",
      addressRegion: "Dorset",
      postalCode: "SP8 4WF",
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: 51.0339, longitude: -2.2744 }, // Gillingham SP8 approx — verify
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: "££",
    areaServed: [
      { "@type": "City", name: "Gillingham" },
      { "@type": "City", name: "Shaftesbury" },
      { "@type": "City", name: "Wincanton" },
      { "@type": "City", name: "Sturminster Newton" },
      {
        "@type": "GeoCircle",
        geoMidpoint: { "@type": "GeoCoordinates", latitude: 51.0339, longitude: -2.2744 },
        geoRadius: "16000", // metres = 10 miles
      },
    ],
    knowsAbout: [
      "Boiler servicing",
      "Boiler installation",
      "Boiler repairs",
      "Landlord gas safety checks",
      "Gas installations",
      "Emergency plumbing callouts",
    ],
    // aggregateRating: OMIT until real reviews exist (see invariant 4)
    // sameAs: [] — add once GBP/Facebook/directory URLs are confirmed
  } as const;
}

export function personSchema() {
  // Only emit once Rob's jobTitle + knowsAbout are confirmed — see
  // business-facts.json. Until then, return null (First Taxis pattern):
  // an entity with missing required fields is worse than no entity.
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Rob Holton",
    jobTitle: "Owner", // confirm exact title with Rob
    knowsAbout: [
      "Boiler servicing and repair",
      "Boiler installation",
      "Landlord gas safety certificates",
      "Gas installations",
      "Emergency plumbing",
    ],
    worksFor: { "@id": ORG_ID },
    // image: real photo of Rob, required before this entity ships
  } as const;
}

export function serviceSchema(service: {
  slug: string; title: string; description: string; serviceType: string;
}) {
  const url = `${BASE_URL}/services/${service.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.title,
    description: service.description,
    serviceType: service.serviceType,
    url,
    provider: { "@id": ORG_ID }, // by @id ONLY, never inline duplicate
    areaServed: { "@type": "GeoCircle", geoRadius: "16000" },
  } as const;
}

export function areaServiceSchema(area: { name: string; slug: string; description: string; region: string }) {
  const url = `${BASE_URL}/areas/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Plumbing and gas heating services in ${area.name}`,
    description: area.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedInPlace: { "@type": "AdministrativeArea", name: area.region },
    },
  } as const;
}

export function faqPageSchema(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  } as const;
}

export function breadcrumbListSchema(items: ReadonlyArray<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem", position: i + 1, name: item.name, item: item.url,
    })),
  } as const;
}
```

**Never emit `Offer`/`priceRange` figures on a Service unless the price
is real** — this was a First Taxis regression (a `Trip` schema with a
fabricated `Offer` block) caught during the v0→v1 review. Same
discipline applies here: no per-service price in schema until
`business-facts.json` has a confirmed figure.

## 2. Per-page metadata — OG, Twitter Card, canonical

Every single page (not just home) must emit:

- `<title>` — unique, ≤60 chars total (if the layout appends a brand
  suffix, keep the page-specific part ≤45 chars, and strip any
  CMS-supplied brand suffix before the template appends its own —
  the classic "Page Title | Brand | Brand" double-stamp bug).
- `<meta name="description">` — unique, ≤155 chars, no duplicates across
  pages.
- **Open Graph, set per page, not inherited:** `og:type`, `og:title`,
  `og:description`, `og:image` (1200×630, must actually exist — no
  pointing at a missing asset), `og:url`, `og:site_name`, `og:locale`
  (`en_GB`).
  - **Next.js gotcha:** a per-page `generateMetadata()` `openGraph`
    object **replaces** the parent layout's (no deep-merge). Build a
    shared `buildOpenGraph()` helper every page calls, don't rely on
    inheritance — this exact bug shipped OG-less inner pages on a prior
    project while the homepage looked fine.
- **Twitter Card, consistent sitewide:** `summary_large_image` on every
  page. Don't mix `summary` and `summary_large_image` across the site.
- **Canonical URL**, self-referencing, consistent trailing-slash form;
  `og:url` must match it exactly.

## 3. AEO stack — getting cited by ChatGPT, Claude, Perplexity, Google AI Overviews

Four parts (full detail in
`skills/local-business-seo/skills/local-business-aeo-stack/SKILL.md`):

1. **`robots.txt` AI-crawler allowlist** — explicit `allow: /` rules for
   `GPTBot`, `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`,
   `ClaudeBot`, `Claude-Web`, `Google-Extended`, `Applebot-Extended`.
2. **`/llms.txt`** — concise machine-readable summary: brand one-liner,
   phone/email/URL, bullet list of services with links, bullet list of
   areas covered, top insights/guides, link to `/llms-full.txt`.
   Generate this dynamically from the CMS/data source, never as a
   static file that goes stale.
3. **`/llms-full.txt`** — full text corpus: every service, every area,
   every FAQ, every insight/guide, flattened to plain text.
4. **Global Person schema** (Rob) — see section 1. This is the
   E-E-A-T half of AEO: AI engines weight named-author, credentialed
   content higher than anonymous copy.

## 4. Internal linking — the 4+4+3 pattern

Every long-content page (service, area, insight, guide) renders three
CMS/data-driven blocks near the bottom:

- **RelatedAreas** — the other 2 area pages (BMV only has 3 areas at
  launch, so this collapses to "2 related", not 4 — same graceful
  scale-down First Taxis applied for its 5-area set).
- **RelatedServices** — the other 3 service pages, excluding self.
- **RelatedPosts** — 3 most recent Insights/Guides, excluding self.

Plus the **in-body cross-link rule**: each area page mentions at least
2 nearby sibling areas in flowing prose with varied anchor text (e.g.
"Shaftesbury", "the Shaftesbury area", "Shaftesbury, SP7" — not the
identical anchor 3 times). Pull these blocks from real data structures,
never hardcode a link list that rots the moment a page is added.

## 5. Sitemap, robots, redirects

- `sitemap.xml` — every published page, correct `lastmod`. Submit only
  this ONE sitemap in Google Search Console; if migrating from an
  existing site, delete any stale legacy sitemap.
- `robots.txt` — standard disallow rules (drafts, admin) + the 8 AI
  crawler allows above.
- If any URLs are being replaced (e.g. moving off an old bmvplumbing
  site if one exists), 301/308 every legacy URL to its new home —
  test both the bare path and the trailing-slash variant.

## 6. Anti-patterns (repeat from the project brief, technical framing)

- No map iframes (LCP cost, no SEO benefit) — static NAP panel + GBP
  link instead.
- No `/service/area/` matrix pages (e.g. `/boiler-repair/shaftesbury/`
  × every town × every service) — thin-content risk. Town-anchored
  subsections inside the 4 service pages + the 3 dedicated area pages
  cover this without the matrix.
- No hardcoded review counts in copy or schema — read live or omit.
- No duplicate `#organization` emits per page.
- No separate breadcrumb-schema helper alongside the visible breadcrumb
  component.

## 7. Pre-launch checklist

Run `website-seo-prelaunch-checklist.md` (packaged in this folder) top
to bottom before going live, and `skills/local-business-seo/skills/local-business-pre-launch-checklist/`
for the local-business-specific additions (noindex gates, redirect
manifest, `INDEXING_ENABLED` cutover flag, DNS TTL, parallel-old-site
rollback plan). Key reminder from that checklist: **verify structured
data against the Schema.org validator and Google Rich Results Test on
the live/preview URL, not a non-JS crawler** — JS-rendered JSON-LD reads
as "no schema" to tools that don't execute JavaScript, which produces
false "zero structured data" alarms.

## 8. Validation steps before declaring the build done

1. https://validator.schema.org — paste home, 1 service page, 1 area
   page, 1 insight, 1 guide.
2. https://search.google.com/test/rich-results — same 5 URLs.
3. `curl https://bmvplumbing.co.uk/robots.txt | grep -E "GPTBot|ClaudeBot|PerplexityBot"`
4. `curl https://bmvplumbing.co.uk/llms.txt` — should return real
   content, not a placeholder.
5. View source on any page, confirm `"@type":"Person"` with Rob's name,
   jobTitle, and knowsAbout are present exactly once globally.
6. Confirm `BreadcrumbList` JSON-LD matches the visible breadcrumb
   text character-for-character on a sample page.
