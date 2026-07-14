import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions of trade for BMV Plumbing (RH Plumbing & Heating) based in Gillingham, Dorset.',
}

export default function TermsConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Terms & Conditions' }]} />
          </div>

          <div className="prose max-w-none text-slate-700 space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="text-xs text-muted">Last updated: July 13, 2026</p>

            <p>
              These Terms and Conditions govern the plumbing and gas heating trade services provided by {siteConfig.brand.legalName} trading as {siteConfig.brand.name}. By booking our services, you agree to be bound by these terms.
            </p>

            <h2 className="text-xl font-bold text-primary pt-4">1. Business Registration</h2>
            <address className="not-italic bg-card border border-border p-4 rounded-xl text-sm space-y-1 block max-w-sm">
              <strong className="text-primary">{siteConfig.brand.legalName}</strong><br />
              {siteConfig.address.full.streetAddress}<br />
              {siteConfig.address.full.addressLocality}<br />
              {siteConfig.address.full.addressRegion}<br />
              {siteConfig.address.full.postalCode}<br />
              United Kingdom
            </address>

            <h2 className="text-xl font-bold text-primary pt-4">2. Bookings and Estimates</h2>
            <p>
              All pricing estimates are based on the information provided during booking or inspection. While we strive to provide accurate fixed quotes, additional charges may apply if unforeseen pipework access issues or hidden gas defects are discovered during the work. We will always discuss any adjustments before proceeding.
            </p>

            <h2 className="text-xl font-bold text-primary pt-4">3. Gas Safety and Compliance</h2>
            <p>
              All gas safety checks (CP12) and installations are carried out by a certified Gas Safe registered engineer in compliance with UK regulations. If a safety defect is discovered that presents an immediate hazard, we are legally required to report it or isolate the appliance to ensure safety.
            </p>

            <h2 className="text-xl font-bold text-primary pt-4">4. Payment Terms</h2>
            <p>
              Payment is due upon completion of the work unless alternative arrangements are made in writing. For larger installations (such as new central heating installations), a deposit may be requested prior to sourcing components.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
