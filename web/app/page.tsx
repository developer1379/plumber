import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { RelatedAreas, RelatedServices, RelatedPosts } from '@/components/sections/RelatedBlocks'
import { TypingHeading } from '@/components/sections/TypingHeading'
import { TiltCard } from '@/components/sections/TiltCard'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle, Shield, Award, ArrowRight, HardHat, MessageCircle, Clock, ShieldCheck } from 'lucide-react'

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
        <section className="relative min-h-[640px] md:min-h-[700px] lg:min-h-[780px] flex items-center pt-[120px] md:pt-[130px] lg:pt-[150px] pb-16 md:pb-24 lg:pb-32 text-white overflow-hidden border-b border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero-bg.png" 
              alt="Professional Plumbing & Heating Pipework" 
              className="w-full h-full object-cover animate-slow-zoom"
            />
            {/* Dark overlay gradients to ensure content is readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#121212]/90" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Heading Copy, Accreditations & Key USPs */}
              <div className="lg:col-span-8 space-y-6">
                
                {/* Subtitle tag */}
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-secondary-light animate-fade-in-up">
                  Trusted across Dorset, Somerset &amp; Wiltshire
                </p>

                {/* Title heading */}
                <TypingHeading />

                {/* Description */}
                <p className="max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-white/85 animate-fade-in-up delay-200">
                  Boiler servicing, installations, gas cooker fittings, and landlord CP12 certificates. Clear, fixed quotes and reliable service from Rob Holton, based in Gillingham.
                </p>
                
                {/* Gas Safe & Call actions */}
                <div className="pt-2 flex flex-wrap gap-4 items-center animate-fade-in-up delay-300">
                  {/* Official looking Gas Safe Badge */}
                  <div className="inline-flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/10 px-4 py-2.5 backdrop-blur-sm">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-[#ff6b00] text-white font-extrabold text-[9px] shadow-[0_2px_8px_rgba(255,107,0,0.4)]">
                      GAS
                    </div>
                    <div className="text-left leading-none">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-white">Gas Safe Registered</span>
                      <span className="block text-[8px] font-bold uppercase tracking-widest text-slate-300 mt-0.5">Rob Holton &bull; Ref TBC</span>
                    </div>
                  </div>

                  {/* WhatsApp button */}
                  <a 
                    href={`https://wa.me/${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md px-5 py-2.5 text-white hover:border-[#25D366]/40 hover:bg-[#25D366]/10 hover:text-white transition-all duration-300 shadow-md text-[12px] font-bold uppercase tracking-wider active:scale-95 group/wa"
                  >
                    <MessageCircle className="h-4.5 w-4.5 flex-shrink-0 text-emerald-400 group-hover/wa:scale-110 transition-transform" />
                    <span>WhatsApp Rob</span>
                  </a>
                </div>

                {/* Emergency Callout Line */}
                <div className="pt-6 border-t border-white/10 animate-fade-in-up delay-400 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <p className="text-[15px] sm:text-[17px] font-bold text-white tracking-wide font-sans">
                    Need a Plumber Fast? <span className="text-secondary-light">We're Here 24/7!</span>
                  </p>
                </div>

              </div>

              {/* Right Column: 3D Tilt Assurance Card */}
              <div className="lg:col-span-4 hidden lg:flex justify-end animate-float">
                <TiltCard className="w-full max-w-[360px]" />
              </div>
            </div>
          </div>
        </section>

        {/* Guarantees / Value Grid */}
        <section className="relative z-10 pt-16 pb-16 bg-gradient-to-b from-[#fcfcfd] to-slate-50 border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {USPs.map((usp, i) => (
                <div 
                  key={i} 
                  className="relative overflow-hidden group flex flex-col gap-4 rounded-2xl border border-border/80 p-6 bg-card transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(6deg)_rotateY(-3deg)_translateY(-6px)] hover:shadow-xl hover:shadow-secondary/5 hover:border-secondary/25"
                >
                  {/* Decorative SVGs */}
                  {i === 0 && (
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary/5 group-hover:text-secondary/10 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M 50 15 C 65 30 75 45 75 65 C 75 80 63 90 50 90 C 37 90 25 80 25 65 C 25 45 35 30 50 15 Z" />
                        <path d="M 50 35 C 57 45 63 53 63 65 C 63 73 57 78 50 78 C 43 78 37 73 37 65 C 37 53 43 45 50 35 Z" fill="currentColor" fillOpacity="0.1" />
                      </svg>
                    </div>
                  )}
                  {i === 1 && (
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary-light/5 group-hover:text-secondary-light/10 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M 50 15 L 80 25 C 80 55 65 75 50 85 C 35 75 20 55 20 25 Z" />
                        <path d="M 38 48 L 46 56 L 62 38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                  {i === 2 && (
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary/5 group-hover:text-secondary/10 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="50" cy="50" r="30" />
                        <path d="M 50 20 L 50 50 L 70 50" strokeWidth="2" />
                        <path d="M 25 25 L 35 35 M 75 75 L 65 65" />
                      </svg>
                    </div>
                  )}
                  {i === 3 && (
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 text-secondary-light/5 group-hover:text-secondary-light/10 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M 25 65 L 45 45 C 50 40 60 40 65 45 L 75 55" strokeWidth="2" />
                        <path d="M 35 55 L 55 35 C 60 30 70 30 75 35 L 85 45" strokeWidth="2" />
                        <circle cx="50" cy="50" r="35" strokeDasharray="3 3" />
                      </svg>
                    </div>
                  )}

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-secondary border border-secondary/10 transition-all duration-500 group-hover:bg-secondary group-hover:text-white group-hover:[transform:rotateY(180deg)]">
                    <usp.icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-primary transition-colors duration-300 group-hover:text-secondary relative z-10">
                    {usp.title
                  }</h3>
                  <p className="text-[14px] text-muted leading-relaxed relative z-10">
                    {usp.text}
                  </p>
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
              <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Expert Domestic Trades</span>
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
                  className="relative overflow-hidden group/card flex flex-col justify-between rounded-2xl border border-border/80 p-8 bg-card shadow-sm transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(4deg)_rotateY(-2deg)_translateY(-6px)] hover:shadow-xl hover:shadow-secondary/5 hover:border-secondary/20"
                >
                  {/* Decorative SVGs for Plumbing & Heating Services */}
                  {service.slug === 'boiler-servicing-installation-repairs' && (
                    <div className="absolute -right-6 -bottom-6 w-36 h-36 text-secondary/5 group-hover/card:text-secondary/8 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <rect x="30" y="15" width="40" height="70" rx="3" />
                        <line x1="30" y1="30" x2="70" y2="30" />
                        <line x1="30" y1="70" x2="70" y2="70" />
                        <circle cx="50" cy="50" r="10" />
                        <line x1="50" y1="50" x2="55" y2="45" strokeWidth="1.5" />
                        <path d="M 38 85 L 38 95 M 50 85 L 50 95 M 62 85 L 62 95" />
                      </svg>
                    </div>
                  )}
                  {service.slug === 'landlord-safety-checks' && (
                    <div className="absolute -right-6 -bottom-6 w-36 h-36 text-secondary-light/5 group-hover/card:text-secondary-light/8 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <rect x="25" y="20" width="50" height="65" rx="3" />
                        <rect x="40" y="13" width="20" height="7" rx="1" fill="currentColor" fillOpacity="0.05" />
                        <line x1="35" y1="35" x2="65" y2="35" />
                        <line x1="35" y1="50" x2="65" y2="50" />
                        <line x1="35" y1="65" x2="65" y2="65" />
                        <path d="M 30 35 L 32 37 L 37 32" strokeWidth="1.5" />
                        <path d="M 30 50 L 32 52 L 37 47" strokeWidth="1.5" />
                        <path d="M 30 65 L 32 67 L 37 62" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                  {service.slug === 'gas-installations' && (
                    <div className="absolute -right-6 -bottom-6 w-36 h-36 text-secondary/5 group-hover/card:text-secondary/8 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <circle cx="50" cy="50" r="28" />
                        <circle cx="50" cy="50" r="16" />
                        <circle cx="50" cy="27" r="1.5" fill="currentColor" />
                        <circle cx="50" cy="73" r="1.5" fill="currentColor" />
                        <circle cx="27" cy="50" r="1.5" fill="currentColor" />
                        <circle cx="73" cy="50" r="1.5" fill="currentColor" />
                        <path d="M 15 50 L 25 50 M 75 50 L 85 50 M 50 15 L 50 25 M 50 75 L 50 85" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}
                  {service.slug === 'emergency-callouts' && (
                    <div className="absolute -right-6 -bottom-6 w-36 h-36 text-secondary-light/5 group-hover/card:text-secondary-light/8 transition-all duration-500 pointer-events-none">
                      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M 30 30 L 60 30 C 65 30 70 34 70 40 L 70 50" strokeLinecap="round" />
                        <circle cx="70" cy="62" r="8" />
                        <path d="M 70 78 L 70 88 M 66 84 L 66 86 M 74 84 L 74 86" strokeWidth="1.5" strokeLinecap="round" />
                        <rect x="50" y="20" width="10" height="20" rx="1" transform="rotate(45 55 30)" />
                      </svg>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-secondary">
                        {service.subtitle}
                      </span>
                      {/* Underline expansion effect */}
                      <div className="relative mt-2 h-[2px] bg-slate-100 overflow-hidden w-16">
                        <div className="absolute left-0 top-0 h-full w-full bg-secondary origin-left scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 ease-out" />
                      </div>
                      <h3 className="font-serif text-[22px] font-medium text-primary mt-4 transition-colors duration-300 group-hover/card:text-secondary">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[15px] text-slate-600 leading-relaxed relative z-10">
                      {service.description}
                    </p>
                    <ul className="grid gap-2 text-[13px] text-slate-700 sm:grid-cols-2 relative z-10">
                      {service.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 transition-transform duration-350 hover:translate-x-1">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0 transition-transform duration-300 group-hover/card:scale-105" />
                          <span className="transition-colors duration-300 group-hover/card:text-slate-800">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between relative z-10">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.06em] pl-[0.06em] text-primary hover:text-secondary transition-colors"
                    >
                      <span>Read full service brief</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover/card:translate-x-1.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md"
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
                  <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Owner &amp; Lead Engineer</span>
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
