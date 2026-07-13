# BMV Plumbing — Project Brief

## 1. What we're building

A new local-service-business website for **bmvplumbing.co.uk**, providing
the trade services of **RH Plumbing & Heating**, owned and operated by
**Rob Holton**. The site follows the same technical SEO architecture,
content discipline, and owner-focused trust-building approach used on
**Marley Moves** (removals) and **First Taxis** (taxis) — both
single-Organization, owner-operator, lead-generation local service
businesses in the same North Dorset / South Wiltshire / Somerset
catchment. See `business-facts.json` for every confirmed fact.

This is a **lead-generation site**, not e-commerce or real-time booking.
Every page should drive toward one of: phone call, email, or a quote/
contact form submission.

## 2. Business snapshot

- **Owner:** Rob Holton — the face of the business, positioned the same
  way Connor is positioned for Marley Moves (named, photographed, with a
  Person schema entity, "knowsAbout" the actual services).
- **Based:** 5 Deer Gardens, Gillingham, Dorset, SP8 4WF (full address is
  JSON-LD/legal-pages only — see address-display rule below).
- **Phone:** 07958 795 361 · **Email:** rob@bmvplumbing.co.uk
- **Coverage:** 10-mile radius from SP8 — reaches Shaftesbury, Wincanton,
  Sturminster Newton, Mere, Motcombe, Bourton and the surrounding
  villages.
- **Services:** Boiler Servicing / Installation / Repairs (one page,
  three subsections), Landlord Safety Checks (gas safety certificates /
  CP12), Gas Installations, Emergency Callouts.

## 3. Sitemap / primary navigation

```
Home | Services | About | Insights | Guides | FAQs | Contact
```

- **Home** — hero + trust signals + services overview + coverage area +
  Rob intro strip + recent insight/guide teaser + FAQ teaser + contact CTA.
- **Services** — landing page linking to the 4 dedicated service pages
  (see `content/03-Services-Content-Brief.md`):
  1. `/services/boiler-servicing-installation-repairs/`
  2. `/services/landlord-safety-checks/`
  3. `/services/gas-installations/`
  4. `/services/emergency-callouts/`
- **About** — Rob's story, qualifications (only what's confirmed), why
  local, the same E-E-A-T role Connor plays on Marley. Person schema
  emitted globally from here (or from the root layout, per the schema
  graph pattern — see technical spec).
- **Insights** `/insights/[slug]/` — 6 launch articles, blog-style,
  rotating content model (see `content/04-Insights-Content-Brief.md`).
- **Guides** `/guides/[slug]/` — 6 launch articles, evergreen pillar
  content (see `content/05-Guides-Content-Brief.md`).
- **FAQs** `/faqs/` — single page hosting all 20 launch FAQs (see
  `content/06-FAQs.md`), each also feeding FAQPage schema. Individual
  services/areas surface a relevant subset inline too (never a duplicate
  wall of identical FAQs on every page — see anti-patterns).
- **Contact** — form + phone + email + coverage-area confirmation. No
  map iframe (see anti-patterns).
- **Area pages** (linked from Services + footer + Related Areas blocks,
  not top-level nav — matches the Marley/First Taxis pattern where towns
  live under a dedicated path, not the primary menu):
  - `/areas/shaftesbury/`
  - `/areas/wincanton/`
  - `/areas/sturminster-newton/`
- **Legal:** `/privacy-policy/`, `/terms-conditions/` — full address
  lives here.

## 4. Owner-focus strategy — Rob as the trust anchor

Marley Moves built its E-E-A-T (Experience, Expertise, Authoritativeness,
Trust) around Connor as the named, photographed, schema-backed owner —
not a faceless "we". Do the same for Rob:

- **Global Person schema** (`@id: #person`) emitted on every page, with
  `worksFor: { @id: #organization }`, a real `jobTitle`, and a
  `knowsAbout` array of the actual services (not generic marketing
  terms). This is what lets AI answer engines (ChatGPT, Perplexity,
  Google AI Overviews) cite Rob by name as the expert behind the answer.
- **About page** is Rob's story in his own voice — where he trained, how
  long he's been doing this (only if confirmed), what he actually cares
  about on a job. No invented years or credentials — see
  `business-facts.json` banned-claims list.
- **Real photo of Rob** — for the Person schema `image` field and the
  About/homepage. Never a stock photo standing in for a named real
  person (this was a hard-learned lesson on Marley: a generic invented
  face used for a named crew member is a trust-breaking error).
- **First-person voice where natural** — "I've been fixing boilers
  around Gillingham for X years" reads more human than "RH Plumbing &
  Heating has been fixing boilers". Balance with practical third-person
  where the content needs it (service pages, guides).
- **Named-person rule:** if copy names Rob, any accompanying image must
  actually be Rob (or show no identifiable face) — never a generic
  stand-in.

## 5. Content rules (apply to every page, every writer, every AI assistant)

Directly inherited from the `local-service-seo-builder` agent's
cross-cutting rules — do not relax these without Rob/Peter sign-off:

1. **No em-dashes (—).** Use commas, colons, parentheses, or rephrase.
2. **No AI tells**: moreover, furthermore, leverage, robust, navigate
   (as a verb meaning "find your way through"), delve, harness, unleash,
   "in today's fast-paced world", "elevate your", "unlock the power of",
   "seamless experience", "cutting-edge", "game-changer", "tapestry",
   "underscore". Delete them, don't soften them.
3. **UK English by default** — centre, colour, organise, realise, tonne,
   lorry, postcode, pavement, motorway.
4. **No on-page repetition of the same USP.** State a claim once per
   page (e.g. "10-mile radius of Gillingham") — don't repeat it in the
   hero, the trust strip, and the footer.
5. **No cross-page boilerplate paragraphs.** Every service description
   is specific to that service; every town description is specific to
   that town (see the area-page "remove location name" test in the
   technical spec).
6. **Never claim credentials Rob doesn't have.** No "Gas Safe
   registered" badge, no founding year, no review count, no trade-body
   membership — unless confirmed in `business-facts.json`. Ask once,
   then bake in the confirmed fact.
7. **Address-display rule.** Customer-facing copy, headlines, footers,
   and AI-extraction sentences use only **"Gillingham, SP8"** — never
   the full street address or inward postcode. Full address is retained
   ONLY in: legal pages, JSON-LD source, form placeholders, and
   `business-facts.json` itself.
8. **AI structures, never invents.** Every fact in the content briefs
   that follows has a source. Where a brief marks something
   `[VERIFY BEFORE PUBLISH]`, verify it (Royal Mail/OS Maps for streets,
   postcodes.io for postcodes, an actual route planner for road-miles)
   before it goes live. If it can't be verified, cut it rather than
   guess.

## 6. Anti-patterns — do not build these, push back if asked

- **Map iframes** on area/contact pages — LCP cost with no SEO benefit.
  Use a static "find us" panel with NAP + GBP link instead.
- **Programmatic `/service/area/` matrices** (e.g. a page for every
  service × every town combination). Helpful Content / scaled-content
  abuse risk on a small site. Build deep service pages with
  town-anchored subsections instead, plus the 3 dedicated area pages.
- **Hardcoded growing numbers** in copy ("40 reviews", "500 jobs done").
  Centralise in `business-facts.json` / site config, read live from the
  source where possible.
- **Brand-suffix double-stamping** in page titles (e.g. an editor types
  "Boiler Servicing | BMV Plumbing" into the CMS title field and the
  layout template appends " | BMV Plumbing" again). Strip any trailing
  brand suffix from CMS-supplied titles before the template appends its
  own.
- **Two root layouts.** One shell, one global schema emit point.
- **Six-pages-a-day content velocity.** Peter's standing rule (see
  Marley precedent): thin-content / Helpful-Content risk on a small
  site. This handoff ships 4 + 6 + 6 + 20 + 3 = 39 pages at launch, then
  slow down to a sustainable cadence (1 new page/day rotating
  guide → FAQ → insight is the proven Marley cadence) — don't dump
  hundreds of programmatic pages after launch either.

## 7. Recommended stack

The packaged `local-business-site-bootstrap` skill is opinionated:
**Next.js 16 App Router + TypeScript strict + Tailwind v4 + Sanity v5
Studio (as a sibling `studio/` project) + Vercel + Resend for
transactional email.** This is the stack Marley Moves runs on. If the
dev team's stack differs (the brief doesn't mandate a specific stack),
the **stack-agnostic skills still apply directly**: schema graph,
content audit, AEO stack, area-page recipe, content workflow, keyword
pipeline. Only bootstrap / pre-launch-checklist specifics / the Resend
lead-form are stack-locked — First Taxis proved this exact fallback
(Vite + React + react-helmet-async instead of Next.js + Sanity) and the
schema/content patterns ported with only the *data source* and
*delivery mechanism* changing, not the shape.

## 8. What "done" looks like at launch

- All 39 launch pages live (Home, Services landing, 4 service pages,
  About, 6 Insights, 6 Guides, FAQs hub, Contact, 3 area pages, 2 legal
  pages — see exact count in the sitemap above).
- Full schema graph validates on Schema.org validator + Google Rich
  Results Test on: home, 1 service page, 1 area page, 1 insights post,
  1 guide.
- Every page has complete OG + Twitter Card metadata.
- `robots.txt` lists the 8 AI-crawler allow rules; `/llms.txt` and
  `/llms-full.txt` return real content.
- Every FAQ shown on a page has matching FAQPage JSON-LD.
- `website-seo-prelaunch-checklist.md` fully worked through — no
  outstanding items.
- Business-facts.json fully reconciled with what's actually published
  (no drift between "confirmed facts" and "what the site says").
