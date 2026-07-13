# TODO Before Launch — BMV Plumbing

This document lists all open questions, credentials, settings, and verification items that must be resolved before the BMV Plumbing website goes live.

## 1. Owner & Business Facts (To Confirm with Rob Holton)

- [ ] **Brand Name:** Clarify whether "BMV Plumbing" or "RH Plumbing & Heating" is the primary public-facing brand, or if they should be combined (e.g., "BMV Plumbing (by RH Plumbing & Heating)").
- [ ] **Gas Safe Registration:** Confirm Rob Holton's Gas Safe Registration number. *Note: We cannot publish "Gas Safe Registered" claims or badges until this number is verified.*
- [ ] **Emergency Callout Pricing:** Confirm the callout fee and response time parameters (e.g., "within 60 minutes", fixed pricing from £X, etc.). Currently, we are using placeholder text to prevent invalid/false advertising.
- [ ] **Owner Job Title:** Confirm Rob's exact job title (e.g., "Owner & Plumbing Engineer").
- [ ] **Profile Picture:** Obtain a real, high-resolution photo of Rob Holton to seed E-E-A-T schemas and the About page.

## 2. API Keys & Services

- [ ] **Sanity API Tokens:** Add `SANITY_API_READ_TOKEN` to environment variables to allow Next.js server-side queries.
- [ ] **Resend API Key:** Configure `RESEND_API_KEY` and verify the sender domain (e.g., `send.bmvplumbing.co.uk`) so the contact form works.
- [ ] **Google Places API Key:** If using address autocomplete on form inputs, configure Google Places API key restrictions.

## 3. SEO & Links

- [ ] **GBP Listing:** Ensure Google Business Profile (GBP) is claimed and copy its Place ID/URL into `site-config.ts` for social linking (`sameAs`).
- [ ] **Social Profiles:** Confirm Facebook page and other directory profile URLs.
- [ ] **Redirect Manifest:** If there was a legacy website, map old URLs to new clean paths in `web/next.config.ts`.
- [ ] **DNS Cutover:** Point `bmvplumbing.co.uk` domains to Vercel name servers.
- [ ] **Production Indexing:** Set `INDEXING_ENABLED=true` in Vercel production environment variables to enable crawler indexing on launch.
