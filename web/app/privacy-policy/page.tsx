import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for BMV Plumbing (RH Plumbing & Heating) based in Gillingham, Dorset.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Privacy Policy' }]} />
          </div>

          <div className="prose max-w-none text-slate-700 space-y-6">
            <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="text-xs text-muted">Last updated: July 13, 2026</p>

            <p>
              BMV Plumbing (referred to as "we", "us", or "our") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website (https://bmvplumbing.co.uk) or use our services.
            </p>

            <h2 className="text-xl font-bold text-primary pt-4">1. Data Controller</h2>
            <p>
              The data controller for any personal data collected through this website is:
            </p>
            <address className="not-italic bg-card border border-border p-4 rounded-xl text-sm space-y-1 block max-w-sm">
              <strong className="text-primary">{siteConfig.brand.legalName}</strong><br />
              {siteConfig.address.full.streetAddress}<br />
              {siteConfig.address.full.addressLocality}<br />
              {siteConfig.address.full.addressRegion}<br />
              {siteConfig.address.full.postalCode}<br />
              United Kingdom
            </address>

            <h2 className="text-xl font-bold text-primary pt-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide voluntarily when using our contact/quote form:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Message content and details of the plumbing/heating job</li>
            </ul>

            <h2 className="text-xl font-bold text-primary pt-4">3. How We Use Your Data</h2>
            <p>
              We use your personal data to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your service enquiries and provide quotes.</li>
              <li>Arrange and coordinate on-site appointments.</li>
              <li>Fulfill our contractual obligations to carry out heating or plumbing repairs.</li>
              <li>Comply with gas safety and legal logging requirements.</li>
            </ul>

            <h2 className="text-xl font-bold text-primary pt-4">4. Data Sharing and Retention</h2>
            <p>
              We do not sell, rent, or trade your personal information. We only retain personal details for as long as necessary to manage your enquiry, complete work, and comply with tax and safety audit requirements.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
