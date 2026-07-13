import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { RelatedAreas, RelatedServices, RelatedPosts } from '@/components/sections/RelatedBlocks'
import { QuickQuoteForm } from '@/components/sections/QuickQuoteForm'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle, Shield, Award, Clock, ArrowRight, ShieldCheck, HardHat, Star, Users, MessageCircle } from 'lucide-react'

export default function Home() {
  const USPs = [
    {
      icon: Shield,
      title: 'Gas Safe Registered',
      text: 'Legally certified for all domestic natural gas and LPG work.',
    },
    {
      icon: Award,
      title: 'Fully Insured Trade',
      text: 'Comprehensive public liability insurance up to £2.5M for total peace of mind.',
    },
    {
      icon: Clock,
      title: 'Fast Local Response',
      text: 'Based in Gillingham (SP8), dispatching quickly to urgent local callouts.',
    },
    {
      icon: HardHat,
      title: 'No Sales Pressure',
      text: 'Direct communication with Rob Holton. Honest rates, no commission-based upsells.',
    },
  ]

  const coreServices = [
    {
      title: 'Boiler Servicing, Installation & Repairs',
      slug: 'boiler-servicing-installation-repairs',
      subtitle: 'Heating Systems',
      description: 'Keep your home warm and energy bills low. We provide annual manufacturer warranty servicing, system troubleshooting, and full boiler replacements.',
      highlights: ['Warranty-compliant boiler checks', 'Combi boiler swaps & system upgrades', 'Emergency boiler breakdown repairs', 'System power flushing'],
    },
    {
      title: 'Landlord Safety Checks (CP12)',
      slug: 'landlord-safety-checks',
      subtitle: 'Safety Inspections',
      description: 'Comply with UK Gas Safety Regulations. We conduct thorough inspections of all gas appliances, flues, and pipework for rental properties.',
      highlights: ['Full gas tightness testing', 'Official CP12 certificate issued', 'Direct letting agency coordinate', 'Annual renewal reminders'],
    },
    {
      title: 'Gas Appliance Installations',
      slug: 'gas-installations',
      subtitle: 'Appliance Fitting',
      description: 'Safe, certified gas connections for range cookers, hobs, and gas fires. Every installation is fully pressure-tested and commissioned.',
      highlights: ['Gas hobs & range cooker fitting', 'Gas fireplace safety connections', 'Pipework cap-offs & alterations', 'Gas Safe log book updates'],
    },
    {
      title: 'Emergency Plumbing Callouts',
      slug: 'emergency-callouts',
      subtitle: '24/7 Response',
      description: 'Rapid assistance for plumbing emergencies in your home. We isolate major water leaks, repair burst pipes, and restore failed heating.',
      highlights: ['Burst pipes & active leak control', 'Failed boiler diagnostics', 'Central heating system leaks', 'No hidden callout premiums'],
    },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[640px] md:min-h-[700px] lg:min-h-[780px] flex items-center pt-[148px] md:pt-[155px] lg:pt-[170px] pb-12 md:pb-24 lg:pb-32 text-white overflow-hidden border-b border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&q=80" 
              alt="Professional Plumbing & Heating Pipework" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            {/* Dark overlay gradients to ensure content is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full pt-2 md:pt-6">
            <div className="max-w-3xl space-y-6">
              
              {/* Subtitle tag */}
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C03838] animate-fade-in-up">
                Trusted across Dorset, Somerset &amp; Wiltshire
              </p>

              {/* Title heading */}
              <h1 className="font-serif mt-4 text-[40px] leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[56px] font-normal">
                <span className="block overflow-hidden pb-1">
                  <span className="block animate-reveal-text">
                    Dorset plumbing and gas heating,
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span className="block animate-reveal-text delay-100">
                    done properly.
                  </span>
                </span>
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/85 animate-fade-in-up delay-200">
                Boiler servicing, installations, gas cooker fittings, and landlord CP12 certificates. Clear, fixed quotes and reliable service from Rob Holton, based in Gillingham.
              </p>
              
              {/* Trust badges strip, exactly like Marley Moves */}
              <div className="mt-7 flex flex-wrap gap-2 pt-2 animate-fade-in-up delay-300">
                
                {/* 1. Hour Quote Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm text-white/90 transition-colors hover:text-white">
                  <Clock className="h-4 w-4 flex-shrink-0 text-[#C03838]" />
                  <span className="text-[13px] font-semibold">Fixed quotes within the hour</span>
                </div>

                {/* 2. Rating Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm text-white/90 transition-colors hover:text-white">
                  <Star className="h-4 w-4 flex-shrink-0 text-amber-400 fill-amber-400" />
                  <span className="text-[13px] font-semibold">5.0 Google rating</span>
                </div>

                {/* 3. Insurance Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm text-white/90 transition-colors hover:text-white">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0 text-[#C03838]" />
                  <span className="text-[13px] font-semibold">Insured to &pound;2.5M</span>
                </div>

                {/* 4. Local trade Badge */}
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black/40 backdrop-blur-sm text-white/90 transition-colors hover:text-white">
                  <Users className="h-4 w-4 flex-shrink-0 text-[#C03838]" />
                  <span className="text-[13px] font-semibold">Owner-operator only</span>
                </div>

                {/* 5. WhatsApp button */}
                <a 
                  href={`https://wa.me/${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[#075E54] text-white hover:bg-[#054640] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 flex-shrink-0" />
                  <span className="text-[13px] font-semibold">WhatsApp Rob</span>
                </a>

              </div>

              {/* Trust Member Badge Card (Gas Safe Triangle Badge) */}
              <div className="mt-7 animate-fade-in-up delay-400">
                <div className="inline-block rounded-lg bg-white p-4 shadow-md hover:shadow-lg transition-shadow max-w-[240px] border border-slate-100">
                  <div className="flex items-center gap-3">
                    {/* Gas Safe Styled Logo Icon */}
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-[#ff6b00] text-white font-extrabold text-[10px] shadow-[0_2px_4px_rgba(255,107,0,0.3)]">
                      GAS
                    </div>
                    <div className="text-left">
                      <p className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 leading-none">
                        Gas Safe
                      </p>
                      <p className="text-[9px] font-bold uppercase tracking-widest text-[#003366] mt-1">
                        REGISTER &bull; TBC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Desktop Quick Quote Form Overlap Card */}
        <div className="relative z-30 w-full mx-auto max-w-[1400px] px-6 md:px-12 -mt-[80px] lg:-mt-[100px] -mb-[80px] lg:-mb-[100px] hidden md:block">
          <QuickQuoteForm />
        </div>

        {/* Mobile Quick Quote Form (inline block) */}
        <section className="md:hidden bg-slate-50 border-y border-slate-200 py-10 px-6">
          <QuickQuoteForm />
        </section>

        {/* Guarantees / Value Grid */}
        <section className="relative z-10 pt-28 pb-16 bg-white border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {USPs.map((usp, i) => (
                <div key={i} className="flex flex-col gap-3 rounded-2xl border border-border p-6 bg-card">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                    <usp.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-primary">{usp.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{usp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Showcases */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
            
            {/* Intro */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-secondary">Expert Domestic Trades</span>
              <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-primary">
                Heating &amp; Plumbing Capabilities
              </h2>
              <p className="text-[16px] leading-relaxed text-slate-600 max-w-2xl mx-auto">
                As an independent specialist, I carry out all diagnostics, installations, and checks myself. Below is a detailed view of our core areas of service.
              </p>
            </div>

            {/* Service Blocks */}
            <div className="grid gap-12 lg:grid-cols-2">
              {coreServices.map((service) => (
                <div
                  key={service.slug}
                  className="flex flex-col justify-between rounded-2xl border border-border p-8 bg-card shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-secondary">
                        {service.subtitle}
                      </span>
                      <h3 className="font-serif text-[22px] font-medium text-primary mt-1">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid gap-2 text-[13px] text-slate-700 sm:grid-cols-2">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-[13px] font-bold uppercase tracking-[0.12em] text-primary hover:text-secondary transition-colors"
                    >
                      Read full service brief <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-hover transition-colors"
                    >
                      Book
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* E-E-A-T Meet Rob Section */}
        <section className="bg-slate-50/75 py-24 border-y border-slate-200/60">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-stretch">
              
              {/* Story - Left Column (occupies 7 cols on desktop) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
                <div className="space-y-6">
                  <span className="text-[13px] font-bold uppercase tracking-[0.18em] text-secondary">Owner &amp; Lead Engineer</span>
                  <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight tracking-tight text-primary">
                    Hi, I&apos;m Rob Holton
                  </h2>
                  <p className="text-[16px] text-slate-600 leading-relaxed max-w-xl">
                    I founded BMV Plumbing to offer homeowners, landlords, and letting agents across the Blackmore Vale a transparent, local trade service.
                  </p>
                  <p className="text-[16px] text-slate-600 leading-relaxed max-w-xl">
                    I handle every inquiry and on-site job directly. That means when you book a boiler service, appliance installation, or emergency repair, you deal exclusively with me. This eliminates agency overheads and ensures all work is completed to strict safety standards.
                  </p>
                </div>
                
                <div className="pt-4">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-[#121212] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-secondary hover:border-secondary transition-all shadow-sm"
                  >
                    View My Qualifications &amp; Story &rarr;
                  </Link>
                </div>
              </div>

              {/* Service Guarantee Card - Right Column (occupies 5 cols on desktop) */}
              <div className="lg:col-span-5 rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 shadow-xl flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-[22px] font-medium text-primary">
                      My Service &amp; Safety Guarantee
                    </h3>
                  </div>

                  <div className="space-y-5 text-[13px] text-slate-600 leading-relaxed border-t border-slate-100 pt-5">
                    <div className="space-y-1">
                      <strong className="text-primary block text-sm">Gas Safety First</strong>
                      <p>All gas connections, pressure testing, and flue validations are carried out in strict accordance with the UK Gas Safety Regulations (1998).</p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-primary block text-sm">Transparent Pricing</strong>
                      <p>I work on clear, fixed-price quotes. If a job requires additional parts or labor, I explain the issue and gain your approval before proceeding.</p>
                    </div>
                    <div className="space-y-1">
                      <strong className="text-primary block text-sm">Insured Workmanship</strong>
                      <p>Every installation and repair is backed by comprehensive trade insurance, guaranteeing coverage and safety.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Coverage & Linking Blocks */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
          <RelatedAreas />
          <RelatedServices />
          <RelatedPosts />
        </div>
      </main>

      <Footer />
    </div>
  )
}
