# Website / SEO Pre-Release Validation Checklist

**Purpose:** the gate to run **before releasing any new page or site** on any project (client or
own). Every item below was a real defect or false-positive raised on the Marley Moves website audit
(2026-06-05). Handle + verify each before publish so we never re-litigate these.

**How to use:** run top-to-bottom on the page(s)/site about to ship. The reusable
`site-audit` tool (built 2026-06-05; relocating into the marketing engine) automates most of
section A + D and produces a before/after report. Anything the tool flags, **confirm against the
live render** before acting (see section F — crawlers over-report).

Related: `references/analytics-tracking-standards.md` (tracking), the
`local-business-pre-launch-checklist` skill (local-service specifics), `local-business-schema-graph`
+ `seo-geo-optimizer` skills.

---

## A. Per-page metadata + social
- [ ] **Title** present, unique per page, **<=60 chars** total. (If a layout template appends
      " | Brand", keep the per-page part <=45.)
- [ ] **Meta description** present, unique, **<=155 chars**. No duplicate descriptions across pages.
- [ ] **Open Graph complete on EVERY page** (not just home): `og:type`, `og:title`,
      `og:description`, `og:image` (1200x630), `og:url`, `og:site_name`, `og:locale`.
      - **Next.js gotcha:** a per-page `generateMetadata` `openGraph` object **replaces** the
        parent's (no deep-merge) — so `type` + `images` must be set per page or via a shared
        `buildOpenGraph()` helper. The file-based `opengraph-image` only covers the home/segment it
        sits in. Symptom: home has OG, inner pages don't.
- [ ] **og:image asset actually exists + is wired** (don't ship pages pointing at a missing/!default
      share image; reuse per-section hero-og crops or a dynamic OG route).
- [ ] **Twitter card consistent sitewide** (`summary_large_image`, not a mix of summary/large).
- [ ] **Canonical** present, self-referencing, correct trailing-slash form; `og:url` matches.

## B. Headings + content quality
- [ ] **Exactly one `<h1>`** per page. **Keyword-led but on-brand** — not a voice-only headline
      with zero keyword, and not keyword-stuffed/over-long. (Lead with the target term, keep the
      brand voice.)
- [ ] **No data-rendering bugs.** Special-case edge values (e.g. "0 miles from our own yard" when
      the town IS the yard; £0; empty arrays). Render section chrome + empty states, never a raw 0.
- [ ] **Claim consistency sitewide** — ONE canonical version of every recurring claim (quote
      turnaround, pricing floor, insurance figures, review count). Grep the whole site for variants.
- [ ] **No duplicate boilerplate** across pages (same FAQ verbatim on 4+ pages, repeated USP block).
- [ ] **Copy rules:** no em dash, UK English, no AI-tell words, no mojibake/encoding artefacts
      (`�`), no hallucinated facts/prices/dates. No "from £X" anchors unless the price is real.

## C. Structured data (schema) — the most over-reported, so verify on the RENDER
- [ ] Required JSON-LD present **and server-rendered** for the page type:
      LocalBusiness/Organization, Service (+Offer/PriceSpecification), FAQPage, BreadcrumbList,
      AggregateRating, GeoCoordinates/Place, WebSite (home), BlogPosting/Article (posts).
- [ ] **Validate on the live/preview URL with Google Rich Results Test** — NOT a crawler. Crawlers
      that don't execute JS report "no structured data" when JSON-LD is present (this is exactly the
      Growex "0/12 schema" false alarm). `curl | grep '@type'` is the quick check.
- [ ] **Single AggregateRating source of truth** (one node sitewide; no per-Review nodes alongside
      it) to avoid "multiple aggregate ratings" errors. Keep the review count current.

## D. Technical
- [ ] **Canonical + redirects:** every renamed/legacy URL **301/308s** to its new home. Verify with
      `curl` INCLUDING the trailing-slash variant (a `/old` redirect may miss `/old/`).
- [ ] **robots.txt** correct; **sitemap.xml** valid, current, and the **ONLY** sitemap submitted in
      GSC. **Delete stale/legacy sitemaps** (old WP `sitemap_index.xml`, plugin sitemaps) — they
      keep Google crawling dead URLs. (Sitemap delete needs a GSC write-scope token or the UI; a
      read-only token 403s.)
- [ ] **Images:** cap responsive widths (no 4K/`w=3840` hero requests — set `deviceSizes`), lazy-
      load below-fold, size correctly. Watch LCP on the hero.
- [ ] HTTPS, HSTS sane, mobile viewport, no mixed content.
- [ ] **Deploy hygiene on live client sites:** batch changes into ONE deploy; enable **Vercel Skew
      Protection**; **hard-refresh-verify the live render after deploy** (deploy-skew breaks cached
      chunk URLs). Flag before redeploying a live lead-generating site.

## E. Local SEO / GBP (local-service sites)
- [ ] GBP claimed; **NAP matches the site JSON-LD exactly** (single registered address — keep
      operational-only yards out of structured data + citations).
- [ ] Citations consistent across the directories that hold page 1 (Checkatrade, Yell, Bing Places,
      Apple Business, Reallymoving, AnyVan, Compare My Move, Sirelo).
- [ ] Reviews signal current; the count in site config = the live GBP count.

## F. Verification discipline (the meta-lesson — read before trusting any audit)
- [ ] **Verify against the LIVE RENDER, not the audit tool.** Third-party crawlers OVER-report:
      - **Bot-blocked external links** (Checkatrade, Trustpilot, Facebook, Instagram, Google) return
        `403`/Cloudflare-challenge to crawlers but work fine for users. **403 != broken; 404 = broken.**
        Confirm in a real browser before ever reporting a "broken link".
      - **JS-rendered JSON-LD** reads as "no schema" to non-rendering crawlers.
      - Classify `403/503/429`/challenge from known bot-protected hosts as **VERIFY_MANUALLY**, never
        "broken".
- [ ] When an audit's headline looks catastrophic ("57 broken links", "0/12 schema"), **root-cause
      the count first** — it usually collapses to 1-2 real issues + a pile of false positives.
- [ ] Produce a before/after audit (the `site-audit` tool) so fixes are provable for client reports.

---

_Origin: Marley Moves website audit close-out, 2026-06-05. Full evidence in that project's
`research/analysis/` (ISSUES-REGISTER-AND-PLAN.md, CLOSEOUT-REPORT-csv-audit.md,
SEO-TITLES-H1-RECOMMENDATIONS.md, OFFPAGE-SEO-WORKSTREAM-SPEC.md)._
