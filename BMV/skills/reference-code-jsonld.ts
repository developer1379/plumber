/**
 * Centralised JSON-LD builders for First Taxis.
 *
 * Adapted from the canonical `local-business-schema-graph` skill
 * (originally written for a Next.js + Sanity stack) to fit this
 * Vite/React/Lovable codebase. The shape and invariants are the
 * same — single #organization, single #website, Service-per-area,
 * Reviews backing AggregateRating only, BreadcrumbList from the
 * page (not from Sanity nav). What changed is the data source
 * (static `BUSINESS` constant + static route/area arrays) and the
 * delivery mechanism (react-helmet-async <script type="application/ld+json"/>
 * tags rendered server-time-equivalent on each route).
 *
 * Invariants this enforces (mirrors the skill's 6):
 *  1. Exactly one #organization @id used everywhere as the provider.
 *  2. Exactly one #website @id with publisher → #organization.
 *  3. Per-area / per-route pages emit TaxiService nodes whose provider
 *     references #organization by @id — never another inline LocalBusiness.
 *  4. AggregateRating is omitted entirely until real Reviews exist.
 *  5. BreadcrumbList items are passed in by the page; no helper builds
 *     a fake breadcrumb from URL guessing.
 *  6. FAQPage entities are page-scoped, with answers derived from the
 *     same source the visible UI renders (so visible + JSON-LD never drift).
 *
 * No fabricated data. Owner license number, AggregateRating, Person
 * (name/jobTitle/knowsAbout) are intentionally omitted — they require
 * operator confirmation before they can be emitted truthfully.
 */

import { BUSINESS } from "@/lib/constants";
import type { RouteData } from "@/data/routes";

export const BASE_URL = "https://firsttaxis.co.uk";

export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const PERSON_ID = `${BASE_URL}/#person`;

const OPERATING_HOURS_24_7 = {
  "@type": "OpeningHoursSpecification" as const,
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "00:00",
  closes: "23:59",
};

const POSTAL_ADDRESS = {
  "@type": "PostalAddress" as const,
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.city,
  addressRegion: BUSINESS.address.county,
  postalCode: BUSINESS.address.postcode,
  addressCountry: "GB",
};

const GEO_GILLINGHAM_OFFICE = {
  "@type": "GeoCoordinates" as const,
  latitude: 51.0339,
  longitude: -2.2744,
};

/**
 * The 12 origin towns + the 12 destination cities/airports, as
 * `City` / `Place` nodes for the Organization.areaServed array.
 * Matches the actual `routes.ts` 12-origin x 13-destination grid
 * (Salisbury removed, Tisbury added, Dover replacing Portsmouth).
 */
const AREA_SERVED_CITIES: ReadonlyArray<{ "@type": "City"; name: string }> = [
  { "@type": "City", name: "Gillingham" },
  { "@type": "City", name: "Shaftesbury" },
  { "@type": "City", name: "Wincanton" },
  { "@type": "City", name: "Mere" },
  { "@type": "City", name: "Tisbury" },
  { "@type": "City", name: "Zeals" },
  { "@type": "City", name: "Motcombe" },
  { "@type": "City", name: "Bourton" },
  { "@type": "City", name: "East Knoyle" },
  { "@type": "City", name: "West Knoyle" },
  { "@type": "City", name: "East Stour" },
  { "@type": "City", name: "West Stour" },
];

/**
 * GeoCircle covering the operator's primary catchment — ~25 mile
 * radius from the Gillingham SP8 office. Used as Organization.areaServed
 * complement to the named-city list, so AI engines understand both
 * "where we serve" (specific places) and "how far" (radius).
 */
const SERVICE_AREA_GEO_CIRCLE = {
  "@type": "GeoCircle" as const,
  geoMidpoint: GEO_GILLINGHAM_OFFICE,
  geoRadius: "40000", // metres = ~25 miles
};

/**
 * The single canonical Organization / LocalBusiness node. Emitted
 * once globally (from the home page in Vite SPA terms — see
 * SchemaGraph.tsx — since there's no Next.js layout.tsx equivalent).
 *
 * Truthful framing: "28 years of combined trade experience". No
 * foundingDate (new company), no AggregateRating (no real reviews
 * yet), no licenseNumber (Dorset Council operator number TBD).
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": ORG_ID,
    name: BUSINESS.name,
    url: BASE_URL,
    description:
      "Family-run, owner-operated taxi business in Gillingham, Dorset — covering North Dorset, South Wiltshire and the Somerset borders. Fixed-price local fares, airport transfers, seaport transfers and station pickups. A new local business built on 28 years of combined trade experience across the team.",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: POSTAL_ADDRESS,
    geo: GEO_GILLINGHAM_OFFICE,
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: "££",
    openingHoursSpecification: OPERATING_HOURS_24_7,
    sameAs: [BUSINESS.social.facebook, BUSINESS.social.instagram],
    areaServed: [...AREA_SERVED_CITIES, SERVICE_AREA_GEO_CIRCLE],
    knowsAbout: [
      "Airport transfers",
      "Seaport and cruise transfers",
      "Station pickups",
      "Local taxi service",
      "24/7 taxi availability",
      "Fixed-price quotes",
      "North Dorset",
      "South Wiltshire",
    ],
    // licenseNumber intentionally omitted — Dorset Council operator
    // number TBD. When supplied, add as `taxiPermit` per Schema.org
    // (or as a custom additionalProperty if `taxiPermit` is rejected
    // by the Rich Results validator on this @type combination).
  } as const;
}

/**
 * The WebSite node, with publisher → #organization. Provides Sitelinks
 * Search Box hint (potentialAction). Emitted once globally.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: BASE_URL,
    name: BUSINESS.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en-GB",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/routes?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  } as const;
}

/**
 * Per-area Service node — used on /areas/{slug}. Provider references
 * #organization by @id (does NOT inline another LocalBusiness). The
 * areaServed names the City; the service is a TaxiService.
 */
export function areaServiceSchema(area: {
  name: string;
  slug: string;
  description: string;
  region?: string;
}) {
  const url = `${BASE_URL}/areas/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${url}#service`,
    name: `Taxi service in ${area.name}`,
    description: area.description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: {
      "@type": "City",
      name: area.name,
      ...(area.region && {
        containedInPlace: { "@type": "AdministrativeArea", name: area.region },
      }),
    },
    serviceType: "Taxi service",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/book-online?pickup=${encodeURIComponent(area.name)}`,
      servicePhone: BUSINESS.phone,
    },
    hoursAvailable: OPERATING_HOURS_24_7,
  } as const;
}

/**
 * Per-route TaxiService node. The "service" here is the named
 * origin→destination journey (e.g. "Taxi from Gillingham to Heathrow
 * Airport"). Provider → #organization.
 *
 * No fabricated price. We surface the route distance + duration as
 * structured properties (additionalProperty) so AI engines can render
 * "how far / how long" answers without needing scraped body text.
 */
export function routeServiceSchema(route: RouteData) {
  const isAirport = route.locationType === "Airport";
  const isPort = route.locationType === "SeaPort";
  const url = `${BASE_URL}/taxi/${route.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "@id": `${url}#service`,
    name: route.title,
    description: route.tripIntro,
    url,
    provider: { "@id": ORG_ID },
    areaServed: [
      {
        "@type": "Place",
        name: route.origin,
        address: {
          "@type": "PostalAddress",
          postalCode: route.originPostcode,
          addressCountry: "GB",
        },
      },
      {
        "@type": isAirport ? "Airport" : isPort ? "Place" : "Place",
        name: route.destination,
      },
    ],
    serviceType: isAirport
      ? "Airport transfer"
      : isPort
        ? "Seaport transfer"
        : "City taxi service",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/book-online?pickup=${encodeURIComponent(
        route.origin,
      )}&destination=${encodeURIComponent(route.destination)}`,
      servicePhone: BUSINESS.phone,
    },
    hoursAvailable: OPERATING_HOURS_24_7,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Distance",
        value: `${route.distanceMiles} miles`,
      },
      {
        "@type": "PropertyValue",
        name: "Approximate duration",
        value: route.durationHhmm,
      },
    ],
  } as const;
}

/**
 * Per-service Service node — used on /services/{slug}. Same
 * provider→#organization pattern as area/route.
 */
export function serviceCategorySchema(service: {
  slug: string;
  title: string;
  description: string;
  serviceType: string;
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
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED_CITIES,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${BASE_URL}/book-online`,
      servicePhone: BUSINESS.phone,
    },
    hoursAvailable: OPERATING_HOURS_24_7,
  } as const;
}

/**
 * BreadcrumbList — caller passes the visible breadcrumb items in
 * order. No URL-guessing helper; the page knows its own breadcrumb
 * better than any helper could derive it.
 */
export function breadcrumbListSchema(
  items: ReadonlyArray<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  } as const;
}

/**
 * FAQPage — for visible Q&A blocks that should also feed the
 * structured-data pipeline. Caller supplies {question, answer}.
 *
 * IMPORTANT: feed the SAME data the visible component renders, so
 * the JSON-LD and the DOM never drift. AnswerBlock.tsx and the
 * existing FAQSection use this helper.
 */
export function faqPageSchema(
  faqs: ReadonlyArray<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } as const;
}

/**
 * Person (owner) — currently NOT emitted because Peter has not
 * confirmed the public-display name + jobTitle + knowsAbout. The
 * helper exists ready to wire when those land. Without all three
 * the entity is lower-quality than emitting nothing.
 *
 * To enable: call this from SchemaGraph and pass a fully-populated
 * `owner` object. Without an owner argument, return null.
 */
export function personSchema(
  owner:
    | {
        name: string;
        jobTitle: string;
        knowsAbout: ReadonlyArray<string>;
        image?: string;
        bio?: string;
      }
    | null
    | undefined,
) {
  if (!owner) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: owner.name,
    jobTitle: owner.jobTitle,
    knowsAbout: [...owner.knowsAbout],
    worksFor: { "@id": ORG_ID },
    ...(owner.image && { image: owner.image }),
    ...(owner.bio && { description: owner.bio }),
  } as const;
}

/**
 * Helper to wrap any schema object in a JSON-LD <script> tag for
 * react-helmet-async consumption. Returns the JSON string.
 */
export function jsonldString(schema: unknown): string {
  return JSON.stringify(schema);
}
