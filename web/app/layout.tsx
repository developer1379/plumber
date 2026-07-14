/**
 * Root layout — emits the global schema graph on every page:
 *   - Organization (#organization, all inbound refs resolve here)
 *   - Person (#person, owner — required for E-E-A-T)
 *   - WebSite (#website, sitelinks search box eligible)
 *
 * Per-page schemas (Service, BlogPosting, BreadcrumbList) are emitted
 * by the page templates themselves.
 */

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import { robotsMetadata } from '@/lib/seo/canonical'
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  type PersonInput,
} from '@/lib/schema/jsonld'
import { getOwnerPerson } from '@/lib/sanity/queries'
import { FloatingQuote } from '@/components/chrome/FloatingQuote'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.production),
  title: {
    default: `${siteConfig.brand.name} — ${siteConfig.address.display}`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  robots: robotsMetadata(),
  alternates: {
    canonical: '/',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const owner: PersonInput | null = await getOwnerPerson().catch(() => null)

  return (
    <html 
      lang={siteConfig.locale} 
      className={roboto.variable}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        {organizationSchema()}
        {websiteSchema()}
        {owner ? personSchema(owner) : null}
        {children}
        <FloatingQuote />
      </body>
    </html>
  )
}
