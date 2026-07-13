# Services Content Brief — 4 Dedicated Pages

Per the brief: **4 dedicated pages** covering Boiler (Servicing,
Installation, Repairs as one page with three subsections), Landlord
Safety Checks, Gas Installations, Emergency Callouts. Each page targets
one `Service` JSON-LD node (see `02-Technical-SEO-Spec.md`), pulls a
relevant FAQ subset from `06-FAQs.md`, and ends with the RelatedAreas /
RelatedServices / RelatedPosts blocks.

Cost/frequency figures below are **general UK industry figures** from
public trade sources (Checkatrade, MyJobQuote, BOXT, etc. — cited so
the copywriter can verify/update at publish time), used to answer
search intent honestly. They are NOT BMV Plumbing's own prices — every
service page must direct the reader to contact Rob for an actual quote,
and must NOT present an industry-average figure as "our price."

---

## Page 1 — Boiler Servicing, Installation & Repairs

`/services/boiler-servicing-installation-repairs/`

- **H1:** Boiler Servicing, Installation and Repairs in Gillingham and North Dorset
- **Meta title (≤60):** Boiler Servicing, Installation & Repairs | BMV Plumbing
- **Meta description (≤155):** Local boiler servicing, installation and repairs across Gillingham, Shaftesbury, Wincanton and Sturminster Newton. Call Rob Holton for a fixed quote.
- **Target keywords:** boiler servicing gillingham, boiler installation dorset, boiler repairs near me, annual boiler service, new boiler cost

### Outline

1. **Intro** — one paragraph: Rob covers all three under one roof, so a
   customer never needs to find a separate installer vs. repair engineer.
2. **H2: Boiler Servicing** — what's included (visual inspection, flue
   check, gas pressure, casing/seals, safety devices), why annual
   servicing matters (safety, efficiency, manufacturer warranty
   validity), typical UK cost band **£80-£120 gas boiler** (cite:
   Checkatrade/MyJobQuote 2026 guides), recommended frequency: **once
   every 12 months**.
3. **H2: Boiler Installation** — signs it's time to replace vs. repair,
   what a new install involves (survey, removal of old unit, system
   flush, commissioning, handover), typical timescale (1 day combi
   swap vs. 2-3 days system conversion — verify with Rob), why local
   knowledge of period Dorset properties matters (older stone cottages,
   LPG vs. mains gas in rural pockets).
4. **H2: Boiler Repairs** — common faults (no heat/hot water, leaking,
   losing pressure, kettling/noises, pilot light issues), why a fast
   local response matters, when repair beats replacement.
5. **Trust strip** — Rob as a named, local engineer (once only per
   page — don't repeat elsewhere on this page).
6. **FAQ accordion** — pull FAQs 1-5 from `06-FAQs.md` (boiler cluster).
7. **CTA** — call/email/quote form.
8. **RelatedAreas / RelatedServices / RelatedPosts.**

### Schema
`serviceSchema({ slug: "boiler-servicing-installation-repairs", serviceType: "Boiler servicing, installation and repair" })` + `faqPageSchema(faqs 1-5)`.

### Word count target
900-1100 words (three subsections, denser page — see area-page word-count
note in the technical spec, same "design surface, not fixed number"
principle applies).

---

## Page 2 — Landlord Safety Checks

`/services/landlord-safety-checks/`

- **H1:** Landlord Gas Safety Checks (CP12) in Gillingham and North Dorset
- **Meta title:** Landlord Gas Safety Checks (CP12) | BMV Plumbing
- **Meta description:** Annual landlord gas safety certificates (CP12) for rental properties across North Dorset. Legally required, Gas Safe engineer, fast turnaround.
- **Target keywords:** landlord gas safety certificate, cp12 gillingham, gas safety check dorset, landlord gas certificate cost

### Outline

1. **Intro** — the legal requirement in one clear paragraph: UK
   landlords must have a valid gas safety certificate renewed every 12
   months, issued by a Gas Safe registered engineer, provided to
   tenants within 28 days (this is a public legal fact, cite
   gov.uk/HSE — not a claim about Rob specifically until his
   registration is confirmed).
2. **H2: What's checked** — every gas appliance, flue, pipework and
   ventilation in the property.
3. **H2: What happens if it lapses** — no grace period once a CP12
   expires; landlords are legally exposed the day after expiry.
4. **H2: Cost and typical timing** — general UK band **£60-£90** per
   property (cite Checkatrade/LetCompliance), more per additional
   appliance; book renewal before the 12-month mark, not after.
5. **H2: Who we check for** — single rental properties, portfolios,
   HMOs (if Rob does HMOs — confirm before publishing this line).
6. **FAQ accordion** — FAQs 6-10.
7. **CTA** — landlords specifically: "get your renewal date in the
   diary" framing.
8. **Related blocks.**

### Schema
`serviceSchema({ slug: "landlord-safety-checks", serviceType: "Landlord gas safety certificate (CP12)" })` + `faqPageSchema(faqs 6-10)`.

### Word count target
700-900 words.

---

## Page 3 — Gas Installations

`/services/gas-installations/`

- **H1:** Gas Installations in Gillingham and North Dorset
- **Meta title:** Gas Installations | BMV Plumbing
- **Meta description:** Safe, certified gas installations for cookers, hobs, fires and central heating across North Dorset. Book Rob Holton for a quote.
- **Target keywords:** gas installation dorset, gas engineer near me, gas cooker installation, gas fire installation

### Outline

1. **Intro** — why gas work must be done by a registered engineer (legal
   requirement, safety framing, never DIY).
2. **H2: What we install** — gas cookers/hobs, gas fires, gas central
   heating pipework, boiler-adjacent gas pipework (crosslink to the
   boiler page rather than duplicating).
3. **H2: The safety-first process** — pressure testing, tightness
   testing, ventilation checks, certification on completion.
4. **H2: New build and renovation work** — period Dorset properties
   converting from oil/LPG to mains gas where available, or LPG
   installations in off-grid rural areas within the coverage radius.
5. **FAQ accordion** — FAQs 11-15.
6. **CTA.**
7. **Related blocks.**

### Schema
`serviceSchema({ slug: "gas-installations", serviceType: "Gas installation" })` + `faqPageSchema(faqs 11-15)`.

### Word count target
600-800 words.

---

## Page 4 — Emergency Callouts

`/services/emergency-callouts/`

- **H1:** Emergency Plumbing Callouts in Gillingham and North Dorset
- **Meta title:** Emergency Plumbing Callouts | BMV Plumbing
- **Meta description:** Fast local response for plumbing and gas emergencies across Gillingham, Shaftesbury, Wincanton and Sturminster Newton. Call now.
- **Target keywords:** emergency plumber near me, emergency plumber dorset, 24 hour plumber gillingham

### Outline

1. **Intro** — lead with the phone number prominently (this page's
   entire job is to get a call). **Do not state a specific response
   time or call-out fee** until Rob confirms real numbers — use "fast
   local response, based right here in Gillingham" instead of "within
   60 minutes."
2. **H2: What counts as an emergency** — burst pipes, no heating in
   winter, gas leaks/smell of gas (link out to the "what to do if you
   smell gas" guide/insight), major leaks, boiler breakdown with no
   hot water.
3. **H2: What to do while you wait** — safety steps (isolate the
   stopcock, ventilate if gas smell, don't touch electrics near water)
   — genuinely useful content that also builds trust.
4. **H2: Coverage** — the 10-mile radius from Gillingham SP8, name the
   3 area pages.
5. **FAQ accordion** — FAQs 16-20.
6. **CTA — phone number repeated in a sticky mobile call bar** (see the
   `local-business-sticky-ctas` skill in the conversion kit).
7. **Related blocks.**

### Schema
`serviceSchema({ slug: "emergency-callouts", serviceType: "Emergency plumbing callout" })` + `faqPageSchema(faqs 16-20)`.

### Word count target
600-800 words.
