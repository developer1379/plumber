import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle2, ShieldAlert, BadgeCheck, Wrench } from 'lucide-react'

export const metadata = {
  title: 'Our Services',
  description: 'Professional plumbing, heating, boiler servicing, landlord safety checks, and emergency callouts by Rob Holton in Gillingham.',
}

export default function ServicesPage() {
  const serviceList = [
    {
      icon: Wrench,
      title: 'Boiler Servicing, Installation & Repairs',
      slug: 'boiler-servicing-installation-repairs',
      summary: 'Annual system servicing to maintain warranty, custom boiler installations, and diagnostics for broken boilers.',
      points: [
        'Annual boiler inspections and visual flue checks',
        'Combi, system, and conventional boiler swaps',
        'System conversions and power flushing',
        'Emergency breakdown troubleshooting and repairs',
      ],
    },
    {
      icon: BadgeCheck,
      title: 'Landlord Safety Checks (CP12)',
      slug: 'landlord-safety-checks',
      summary: 'Legally required annual gas safety checks for rental properties across North Dorset. Direct certification upload.',
      points: [
        'Full check of all gas pipework, flues, and appliances',
        'Gas tightness testing at the gas meter',
        'Official CP12 Certificate issued on the spot',
        'Reminders for annual safety check renewals',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Gas Installations',
      slug: 'gas-installations',
      summary: 'Certified installation of new gas appliances including hobs, cookers, and heating pipework extensions.',
      points: [
        'Gas cooker, range, and hob installations',
        'New fireplace and gas fire safety connections',
        'Pipework capping, relocation, and testing',
        'Full safety commissioning upon completion',
      ],
    },
    {
      icon: ShieldAlert,
      title: 'Emergency Callouts',
      slug: 'emergency-callouts',
      summary: 'Fast local response for plumbing and gas heating emergencies. No hidden callout charges.',
      points: [
        'Burst pipes, central heating leaks, and flooding',
        'Complete loss of heating or hot water in winter',
        'Suspected gas leaks or gas pressure drop-offs',
        'Blocked local waste lines or overflow issues',
      ],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Our Capabilities</span>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
              Plumbing & Heating Services in Gillingham
            </h1>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              We provide professional gas heating and plumbing services across {siteConfig.address.display} and the surrounding 10-mile radius. Explore our primary core services below.
            </p>
          </div>

          {/* Service grid */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {serviceList.map((s) => (
              <div
                key={s.slug}
                className="flex flex-col justify-between rounded-2xl border border-border bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-primary">{s.title}</h2>
                  <p className="mt-3 text-muted text-sm leading-relaxed">{s.summary}</p>
                  
                  <ul className="mt-6 space-y-3">
                    {s.points.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm font-bold text-secondary hover:underline"
                  >
                    Read full service brief &rarr;
                  </Link>
                  <Link
                    href="/contact"
                    className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-colors"
                  >
                    Book Rob
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Area coverage block */}
          <RelatedAreas />
        </div>
      </main>

      <Footer />
    </div>
  )
}
