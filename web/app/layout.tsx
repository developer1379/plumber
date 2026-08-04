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
import dynamic from 'next/dynamic'
import { siteConfig } from '@/lib/site-config'
import { robotsMetadata } from '@/lib/seo/canonical'
import {
  organizationSchema,
  personSchema,
  websiteSchema,
  type PersonInput,
} from '@/lib/schema/jsonld'
import { getOwnerPerson } from '@/lib/sanity/queries'
import './globals.css'

const FloatingQuote = dynamic(
  () => import('@/components/chrome/FloatingQuote').then((mod) => mod.FloatingQuote)
)

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url.production),
  title: 'Trusted Plumber | Emergency Plumbing, Boiler & Gas Services',
  description: 'Need a trusted plumber? We provide emergency plumbing, boiler repairs, gas installations, landlord safety checks, and fast, reliable service. Contact us today!',
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
