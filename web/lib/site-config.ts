/**
 * Single source of truth for site-wide facts.
 *
 * RULE: anything that grows or changes (review count, years trading,
 * jobs completed) lives here. Never hardcode in customer-facing copy.
 *
 * RULE: address.full is for JSON-LD only. Customer-facing components
 * read address.display (recognised town + outward postcode).
 */

export const siteConfig = {
  brand: {
    name: 'BMV Plumbing',
    legalName: 'RH Plumbing & Heating',
    companyNumber: 'TBC',
    foundingYear: undefined as number | undefined, // never claim a year you can't prove
  },

  url: {
    production: 'https://bmvplumbing.co.uk',
    productionHost: 'bmvplumbing.co.uk',
  },

  contact: {
    primaryPhone: '07958 795 361',
    primaryPhoneHref: 'tel:+447958795361',
    secondaryPhone: undefined as string | undefined,
    secondaryPhoneHref: undefined as string | undefined,
    whatsapp: undefined as string | undefined, // TBC with Rob
    email: 'rob@bmvplumbing.co.uk',
  },

  address: {
    /** JSON-LD only. Full street + 4-char inward postcode. */
    full: {
      streetAddress: '5 Deer Gardens',
      addressLocality: 'Gillingham',
      addressRegion: 'Dorset',
      postalCode: 'SP8 4WF',
      addressCountry: 'GB',
    },
    /** Customer-facing components use this. Recognised town + outward postcode. */
    display: 'Gillingham, SP8',
  },

  /** Yard / second base, if applicable. Same display rule. */
  secondaryAddress: undefined as
    | {
        full: {
          streetAddress: string
          addressLocality: string
          addressRegion: string
          postalCode: string
          addressCountry: string
        }
        display: string
      }
    | undefined,

  social: {
    facebook: undefined as string | undefined, // TBC
    instagram: undefined as string | undefined,
    trustpilot: undefined as string | undefined,
    googleBusinessProfile: undefined as string | undefined, // TBC
    gbpPlaceId: undefined as string | undefined, // TBC after GBP claimed
  },

  /** Aggregate review numbers. SSOT — feeds JSON-LD AND visible copy. */
  googleReviews: {
    count: 0, // Omit AggregateRating until reviews exist
    rating: 5.0,
  },

  /** Insurance / accreditations. Only set what you can prove. */
  trust: {
    publicLiabilityCover: undefined as string | undefined, // e.g. '£2,000,000'
    goodsInTransitCover: undefined as string | undefined,
    accreditations: [] as string[], // Needs Gas Safe ID from Rob before adding 'Gas Safe registered'
  },

  locale: 'en-GB' as const,
} as const

export const stripBrandSuffix = (title: string): string => {
  const brand = siteConfig.brand.name
  const patterns = [
    new RegExp(`\\s*[\\|—\\-–]\\s*${brand}\\s*$`, 'i'),
    new RegExp(`\\s*[\\|—\\-–]\\s*${brand.replace(/\s+/g, '\\s*')}\\s*$`, 'i'),
  ]
  let cleaned = title.trim()
  for (const re of patterns) cleaned = cleaned.replace(re, '').trim()
  return cleaned
}
