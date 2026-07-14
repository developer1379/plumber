import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { RelatedServices, RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { Check, ShieldCheck, Phone, Wrench, Award, MapPin } from 'lucide-react'

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

  const badges = [
    {
      icon: ShieldCheck,
      title: 'Gas Safe Standards',
      desc: 'Certified Natural Gas and LPG connection safety compliance.',
    },
    {
      icon: Award,
      title: '£2.5M Insurance',
      desc: 'Comprehensive public liability coverage for complete property protection.',
    },
    {
      icon: Wrench,
      title: 'Expert Diagnostician',
      desc: 'Advanced central heating fault-finding and plumbing repairs.',
    },
    {
      icon: MapPin,
      title: 'Local Blackmore Vale',
      desc: 'Born and based in Dorset, serving Gillingham, Shaftesbury & surrounds.',
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'About Rob Holton' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Local Trusted Expert</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif">
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
                <h2 className="text-2xl font-bold text-primary pt-4 font-serif">My Local Service Philosophy</h2>
                <p>
                  I believe that trade services should be reliable and transparent. When you call me, you aren&apos;t talking to a national call operator or salesperson. You talk directly with the engineer who will be doing the work.
                </p>
                <p>
                  This owner-operator approach allows me to keep rates fair, give accurate arrival times, and build long-term relationships with homeowners and local landlords.
                </p>
                
                <h2 className="text-2xl font-bold text-primary pt-4 font-serif">Scope of Expertise</h2>
                <p>
                  I cover all aspects of domestic gas heating and plumbing, specializing in annual boiler servicing to maintain warranties, troubleshooting system breakdowns, gas installations for cookers and fires, and annual CP12 checks for rental properties.
                </p>
              </div>

              {/* 2x2 Interactive Badges Grid */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-primary font-serif">Professional Standards &amp; Credentials</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {badges.map((b, i) => (
                    <div 
                      key={i} 
                      className="group/badge flex gap-4 rounded-xl border border-border/80 p-5 bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md hover:border-slate-300"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/5 text-secondary flex-shrink-0 transition-all duration-300 group-hover/badge:bg-secondary/10 group-hover/badge:scale-105">
                        <b.icon className="h-5 w-5 transition-transform duration-300 group-hover/badge:rotate-3" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-primary transition-colors duration-300 group-hover/badge:text-secondary">{b.title}</h4>
                        <p className="text-xs text-muted mt-1.5 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Credentials / Independent Card */}
              <div className="group/credentials rounded-2xl border border-border/80 p-8 bg-card shadow-sm hover:shadow-[0_16px_32px_rgba(0,0,0,0.03)] hover:border-slate-300/80 transition-all duration-300 ease-out space-y-5">
                <h3 className="text-lg font-bold text-primary flex items-center gap-2 font-serif transition-colors duration-300 group-hover/credentials:text-secondary">
                  <ShieldCheck className="h-5.5 w-5.5 text-secondary transition-transform duration-300 group-hover/credentials:scale-110" /> 
                  <span>Why Choose an Independent Engineer?</span>
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 text-sm text-slate-700">
                  {credentials.map((c, idx) => (
                    <li key={idx} className="flex items-center gap-3 transition-transform duration-300 hover:translate-x-1">
                      <Check className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="transition-colors duration-300 group-hover/credentials:text-slate-800">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar Details Column */}
            <div className="space-y-6">
              <div className="group/sidebar rounded-2xl border border-border bg-white p-8 border-t-4 border-t-secondary shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300/80 transition-all duration-300 ease-out">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-secondary transition-all duration-300 group-hover/sidebar:bg-secondary/10 group-hover/sidebar:scale-105">
                  <Wrench className="h-6 w-6 transition-transform duration-300 group-hover/sidebar:rotate-12" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary font-serif">Need Professional Gas Support?</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Call me directly to discuss your heating or plumbing requirements.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.contact.primaryPhone}</span>
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
