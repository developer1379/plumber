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
import dynamic from 'next/dynamic'
import { Plus_Jakarta_Sans } from 'next/font/google'
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

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
})

const FloatingQuote = dynamic(
  () => import('@/components/chrome/FloatingQuote').then((mod) => mod.FloatingQuote)
)

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
      className={`${plusJakartaSans.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        {organizationSchema()}
        {websiteSchema()}
        {owner ? personSchema(owner) : null}
        {children}
        <FloatingQuote />
      </body>
    </html>
  )
}
