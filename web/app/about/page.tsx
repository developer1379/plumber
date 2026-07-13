import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { RelatedServices, RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { Check, ShieldCheck, Phone, Wrench } from 'lucide-react'

export const metadata = {
  title: 'About Rob Holton',
  description: 'Learn about Rob Holton, the independent plumbing and gas engineer behind BMV Plumbing in Gillingham.',
}

export default function AboutPage() {
  const credentials = [
    'Experienced local trade engineer',
    'Specialist in boiler servicing & system diagnostics',
    'LPG and Natural Gas connections verified',
    'Fully insured for public liability',
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'About Rob Holton' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Local Trusted Expert</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  About Rob Holton
                </h1>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  I operate BMV Plumbing (RH Plumbing & Heating) as a dedicated, independent trade service. Based in Gillingham, I serve homeowners and landlords across North Dorset and the borders.
                </p>
              </div>

              <div className="space-y-6 text-slate-700 leading-relaxed text-base">
                <p>
                  Before founding my own business, I underwent extensive technical training in gas safety regulations, heating mechanics, and system installations. I established the business to provide a straightforward, customer-first alternative to national utilities and high-overhead corporations.
                </p>
                <h2 className="text-2xl font-bold text-primary pt-4">My Local Service Philosophy</h2>
                <p>
                  I believe that trade services should be reliable and transparent. When you call me, you aren&apos;t talking to a national call operator or salesperson. You talk directly with the engineer who will be doing the work.
                </p>
                <p>
                  This owner-operator approach allows me to keep rates fair, give accurate arrival times, and build long-term relationships with homeowners and local landlords.
                </p>
                
                <h2 className="text-2xl font-bold text-primary pt-4">Scope of Expertise</h2>
                <p>
                  I cover all aspects of domestic gas heating and plumbing, specializing in annual boiler servicing to maintain warranties, troubleshooting system breakdowns, gas installations for cookers and fires, and annual CP12 checks for rental properties.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-border p-6 bg-card space-y-4">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-secondary" /> Why Choose an Independent Engineer?
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
                  {credentials.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Details Column */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Wrench className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">Need Professional Gas Support?</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Call me directly to discuss your heating or plumbing requirements.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.primaryPhone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <RelatedServices />
            <RelatedAreas />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
