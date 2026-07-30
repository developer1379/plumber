import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle2, ShieldCheck, Wrench, Flame, Siren } from 'lucide-react'

export const metadata = {
  title: 'Our Services',
  description: 'Professional plumbing, heating, boiler servicing, landlord safety checks, and emergency callouts by Rob Holton in Gillingham.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  const serviceList = [
    {
      icon: Flame,
      title: 'Boiler Servicing, Installation & Repairs',
      slug: 'boiler-servicing-installation-repairs',
      imageUrl: '/boiler-advice.webp',
      summary: 'Annual system servicing to maintain warranty, custom boiler installations, and diagnostics for broken boilers.',
      points: [
        'Annual boiler inspections and visual flue checks',
        'Combi, system, and conventional boiler swaps',
        'System conversions and power flushing',
        'Emergency breakdown troubleshooting and repairs',
      ],
      color: 'text-orange-500 bg-orange-50 border-orange-100',
    },
    {
      icon: ShieldCheck,
      title: 'Landlord Safety Checks (CP12)',
      slug: 'landlord-safety-checks',
      imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      summary: 'Legally required annual gas safety checks for rental properties across North Dorset. Direct certification upload.',
      points: [
        'Full check of all gas pipework, flues, and appliances',
        'Gas tightness testing at the gas meter',
        'Official CP12 Certificate issued on the spot',
        'Reminders for annual safety check renewals',
      ],
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
    },
    {
      icon: Wrench,
      title: 'Gas Installations',
      slug: 'gas-installations',
      imageUrl: '/plumber-hero.webp',
      summary: 'Certified installation of new gas appliances including hobs, cookers, and heating pipework extensions.',
      points: [
        'Gas cooker, range, and hob installations',
        'New fireplace and gas fire safety connections',
        'Pipework capping, relocation, and testing',
        'Full safety commissioning upon completion',
      ],
      color: 'text-blue-500 bg-blue-50 border-blue-100',
    },
    {
      icon: Siren,
      title: 'Emergency Callouts',
      slug: 'emergency-callouts',
      imageUrl: '/van-hero.webp',
      summary: 'Fast local response for plumbing and gas heating emergencies. No hidden callout charges.',
      points: [
        'Burst pipes, central heating leaks, and flooding',
        'Complete loss of heating or hot water in winter',
        'Suspected gas leaks or gas pressure drop-offs',
        'Blocked local waste lines or overflow issues',
      ],
      color: 'text-red-500 bg-red-50 border-red-100',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Professional Hero Section */}
          <div className="relative rounded-3xl bg-slate-900 overflow-hidden text-white p-8 md:p-12 lg:p-16 mb-16 shadow-xl">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 opacity-40">
              <img 
                src="/plumber-hero.png" 
                alt="BMV Plumbing Services"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent" />
            </div>
            
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/20 px-3 py-1 text-xs font-semibold text-secondary border border-secondary/30">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                Our Full Capabilities
              </span>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-serif leading-tight">
                Professional Plumbing & Gas Services in Gillingham
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
                BMV Plumbing delivers expert boiler repairs, Gas Safe installations, and 24/7 emergency response across Gillingham, Shaftesbury, and the surrounding 10-mile radius.
              </p>
              
              {/* Trust Indicators */}
              <div className="pt-6 flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold text-slate-200 border-t border-white/10">
                <span className="flex items-center gap-2">✓ Gas Safe Registered</span>
                <span className="flex items-center gap-2">✓ Local & Trusted Engineer</span>
                <span className="flex items-center gap-2">✓ 10-Year Guarantee Available</span>
              </div>
            </div>
          </div>

          {/* Service Stack */}
          <div className="mt-16 space-y-12">
            {serviceList.map((s, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div
                  key={s.slug}
                  className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch rounded-3xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 min-h-[420px]"
                >
                  <div className={`w-full lg:w-[45%] min-h-[280px] lg:min-h-full relative overflow-hidden bg-slate-100 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    <Image 
                      src={s.imageUrl} 
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Column */}
                  <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${s.color}`}>
                        <s.icon className="h-6 w-6" />
                      </div>
                      <h2 className="mt-6 text-2xl sm:text-3xl font-extrabold text-primary font-serif">{s.title}</h2>
                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600 font-medium">{s.summary}</p>
                      
                      <ul className="mt-6 grid sm:grid-cols-2 gap-4">
                        {s.points.map((p, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                      <Link
                        href={`/services/${s.slug}`}
                        className="text-sm font-black text-secondary hover:underline"
                      >
                        Read full service brief &rarr;
                      </Link>
                      <Link
                        href="/contact"
                        className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary active:scale-95 transition-all shadow-sm"
                      >
                        Book Rob
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Area coverage block */}
          <RelatedAreas />
        </div>
      </main>

      <Footer />
    </div>
  )
}
