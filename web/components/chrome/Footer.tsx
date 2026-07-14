import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { Phone, Clock, MapPin, MessageSquare, Mail, ArrowRight } from 'lucide-react'

export function Footer() {
  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Insights', href: '/insights' },
    { label: 'Guides', href: '/guides' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Areas we cover', href: '/#areas' },
    { label: 'Contact', href: '/contact' },
  ]

  const services = [
    { label: 'Boiler Servicing & Repair', href: '/services/boiler-servicing-installation-repairs' },
    { label: 'Landlord Gas Safety Check', href: '/services/landlord-safety-checks' },
    { label: 'Gas Appliance Installation', href: '/services/gas-installations' },
    { label: 'Emergency Plumbing', href: '/services/emergency-callouts' },
  ]

  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* 1. Interactive 3D Contact Banner */}
      <section className="relative w-full bg-gradient-to-br from-[#060b13] via-primary to-[#0f1d35] text-white py-16 md:py-20 border-b border-white/5 overflow-hidden">
        {/* Subtle SVG Grid/Piping Pattern Backdrop */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="pipe-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="3" fill="currentColor" />
              <circle cx="60" cy="0" r="3" fill="currentColor" />
              <circle cx="0" cy="60" r="3" fill="currentColor" />
              <path d="M 30 0 L 30 60 M 0 30 L 60 30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pipe-grid)" />
          </svg>
        </div>

        {/* Diagonal Light Beam Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-secondary-light/10 pointer-events-none" />

        <div className="mx-auto max-w-[1400px] px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Col 1: Get a Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between h-full transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-4deg)_translateY(-8px)] hover:border-secondary/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(255,107,0,0.15)] group/contact min-h-[190px]">
              {/* SVG Watermark Boiler / Pressure Gauge */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 text-secondary/10 group-hover/contact:text-secondary/15 transition-all duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="35" />
                  <circle cx="50" cy="50" r="5" fill="currentColor" />
                  <path d="M 50 50 L 70 30" strokeWidth="2" strokeLinecap="round" />
                  <path d="M 30 30 A 28 28 0 0 1 70 30" strokeDasharray="3 3" />
                  <path d="M 50 85 L 50 95 M 45 95 L 55 95" />
                </svg>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-secondary transition-all duration-500 group-hover/contact:bg-secondary group-hover/contact:text-white group-hover/contact:[transform:rotateY(180deg)]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-300 group-hover/contact:text-secondary transition-colors duration-300">
                    Get a Quote
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-[18px] md:text-[20px] font-medium leading-snug text-white">
                    Free written quote within the hour
                  </p>
                  <p className="text-[12.5px] text-slate-400 font-medium">No obligation, no sales pressure.</p>
                </div>
              </div>
            </div>

            {/* Col 2: Call or Email */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between h-full transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-4deg)_translateY(-8px)] hover:border-secondary-light/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group/contact min-h-[190px]">
              {/* SVG Watermark Pipe System */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 text-secondary-light/10 group-hover/contact:text-secondary-light/15 transition-all duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 10 30 L 90 30" />
                  <path d="M 50 30 L 50 70" />
                  <path d="M 50 70 L 80 70" />
                  <rect x="44" y="27" width="12" height="6" rx="1" fill="currentColor" />
                  <rect x="44" y="67" width="12" height="6" rx="1" fill="currentColor" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-secondary-light transition-all duration-500 group-hover/contact:bg-secondary-light group-hover/contact:text-white group-hover/contact:[transform:rotateY(180deg)]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-300 group-hover/contact:text-secondary-light transition-colors duration-300">
                    Call or Email
                  </span>
                </div>
                <div className="space-y-1.5">
                  <p className="font-serif text-[18px] md:text-[20px] font-medium leading-snug text-white hover:text-secondary-light transition-colors">
                    <a href={siteConfig.contact.primaryPhoneHref} className="focus:outline-none">
                      {siteConfig.contact.primaryPhone}
                    </a>
                  </p>
                  <p className="text-[12.5px] text-slate-400 font-medium hover:text-white transition-colors">
                    <a href={`mailto:${siteConfig.contact.email}`} className="focus:outline-none">
                      {siteConfig.contact.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Col 3: Office Hours */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between h-full transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-4deg)_translateY(-8px)] hover:border-secondary/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(255,107,0,0.15)] group/contact min-h-[190px]">
              {/* SVG Watermark Valve */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 text-secondary/10 group-hover/contact:text-secondary/15 transition-all duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="50" cy="50" r="32" />
                  <circle cx="50" cy="50" r="10" />
                  <path d="M 50 18 L 50 40 M 50 60 L 50 82 M 18 50 L 40 50 M 60 50 L 82 50" strokeWidth="2" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-secondary transition-all duration-500 group-hover/contact:bg-secondary group-hover/contact:text-white group-hover/contact:[transform:rotateY(180deg)]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-300 group-hover/contact:text-secondary transition-colors duration-300">
                    Office Hours
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-[18px] md:text-[20px] font-medium leading-snug text-white">
                    Mon &ndash; Sun
                  </p>
                  <p className="text-[12.5px] text-slate-400 font-medium leading-normal">
                    8:00am &ndash; 6:00pm <br />
                    <span className="text-[10px] text-secondary-light font-bold uppercase tracking-wider block mt-1">Emergency calls out of hours</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Col 4: Address */}
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between h-full transition-all duration-500 ease-out [transform-style:preserve-3d] [perspective:1000px] hover:[transform:perspective(1000px)_rotateX(8deg)_rotateY(-4deg)_translateY(-8px)] hover:border-secondary-light/30 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group/contact min-h-[190px]">
              {/* SVG Watermark Tools */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 text-secondary-light/10 group-hover/contact:text-secondary-light/15 transition-all duration-500 pointer-events-none">
                <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 20 80 L 80 20" strokeWidth="3" />
                  <path d="M 72 28 C 76 22 84 22 88 28 C 91 32 90 38 86 42 L 78 34 Z" fill="currentColor" />
                  <path d="M 20 20 L 80 80" strokeWidth="2" />
                  <circle cx="50" cy="50" r="6" fill="currentColor" />
                </svg>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-secondary-light transition-all duration-500 group-hover/contact:bg-secondary-light group-hover/contact:text-white group-hover/contact:[transform:rotateY(180deg)]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.12em] text-slate-300 group-hover/contact:text-secondary-light transition-colors duration-300">
                    Address
                  </span>
                </div>
                <div className="space-y-1">
                  <p className="font-serif text-[18px] md:text-[20px] font-medium leading-snug text-white">
                    {siteConfig.address.display}
                  </p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.08em]">
                    Dorset, Somerset, Wiltshire &bull; UK-wide
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Midnight Slate Footer */}
      <section className="w-full bg-[#060b13] text-gray-400 py-16 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/5">
            
            {/* Col 1: Bio */}
            <div className="space-y-4">
              <Link href="/" className="inline-block text-white hover:opacity-90 focus:outline-none">
                <svg className="h-12 md:h-14 w-auto" viewBox="0 0 180 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="18" y="52" className="font-serif text-[44px] font-extrabold" fill="currentColor">R</text>
                  <path 
                    d="M 83 58 C 78 54 76 45 79 35 C 82 25 86 18 86 8 C 86 16 91 23 96 32 C 100 40 99 50 96 56 C 93 62 86 60 83 58 Z" 
                    fill="url(#footer-logo-flame)" 
                  />
                  <path 
                    d="M 91 58 C 97 58 102 54 102 47 C 102 40 94 30 91 25 C 88 30 80 40 80 47 C 80 54 85 58 91 58 Z" 
                    fill="url(#footer-logo-drop)" 
                  />
                  <text x="114" y="52" className="font-serif text-[44px] font-extrabold" fill="currentColor">H</text>
                  <text 
                    x="90" 
                    y="74" 
                    textAnchor="middle" 
                    style={{ letterSpacing: '0.15em', fontWeight: 900 }} 
                    className="font-sans text-[11px]" 
                    fill="currentColor"
                  >
                    PLUMBING &amp; HEATING
                  </text>
                  <defs>
                    <linearGradient id="footer-logo-flame" x1="78" y1="8" x2="98" y2="58" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="40%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                    <linearGradient id="footer-logo-drop" x1="80" y1="25" x2="102" y2="58" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="60%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Family-run plumbing and gas heating across Gillingham, Shaftesbury, Wincanton, and Sturminster Newton. Fixed written quotes and local response.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-2 text-[10px] text-emerald-400 font-bold uppercase tracking-[0.08em] pl-[0.08em] shadow-[0_2px_10px_rgba(16,185,129,0.05)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Gas Safe Registered &bull; TBC</span>
                </div>
              </div>
            </div>

            {/* Col 2: Services Link List */}
            <div className="group/col space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white">
                  Services
                </span>
                {/* Expanding Red Accent Line */}
                <div className="relative mt-2 h-[2px] bg-white/5 overflow-hidden w-8">
                  <div className="absolute left-0 top-0 h-full w-full bg-secondary origin-left scale-x-0 group-hover/col:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </div>
              <ul className="space-y-3 pt-2 text-[13px]">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link 
                      href={s.href} 
                      className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company Link List */}
            <div className="group/col space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white">
                  Company
                </span>
                {/* Expanding Red Accent Line */}
                <div className="relative mt-2 h-[2px] bg-white/5 overflow-hidden w-8">
                  <div className="absolute left-0 top-0 h-full w-full bg-secondary origin-left scale-x-0 group-hover/col:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </div>
              <ul className="space-y-3 pt-2 text-[13px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="inline-block hover:text-white hover:translate-x-1.5 transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact details with Icons */}
            <div className="group/col space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white">
                  Contact
                </span>
                {/* Expanding Red Accent Line */}
                <div className="relative mt-2 h-[2px] bg-white/5 overflow-hidden w-8">
                  <div className="absolute left-0 top-0 h-full w-full bg-secondary origin-left scale-x-0 group-hover/col:scale-x-100 transition-transform duration-500 ease-out" />
                </div>
              </div>
              <div className="space-y-3 pt-2 text-[13px] text-gray-500">
                <p className="flex items-center gap-2 text-[15px] font-bold text-white tracking-tight">
                  <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                  <a href={siteConfig.contact.primaryPhoneHref} className="hover:text-secondary-light transition-colors">
                    {siteConfig.contact.primaryPhone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p className="flex items-start gap-2 pt-1 text-[13px] leading-relaxed">
                  <MapPin className="h-4 w-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.brand.legalName}<br />
                    Based in Gillingham, Dorset
                  </span>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Legal links */}
          <div className="mt-8 flex flex-col items-center justify-between gap-6 sm:flex-row text-[11px] text-gray-600">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.brand.legalName}. All rights reserved.
            </p>
            
            {/* Middle: Links */}
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>

            {/* Right: Get a Quote Pill Button */}
            <div className="flex items-center gap-3">
              <Link 
                href="/contact" 
                className="group/btn rounded-full bg-secondary text-white px-5 py-2.5 font-bold uppercase tracking-[0.05em] text-[11px] hover:bg-secondary-hover hover:shadow-secondary/20 hover:shadow-lg transition-all duration-300 active:scale-95 flex items-center gap-1.5"
              >
                <span>Get a Quote</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </section>

    </footer>
  )
}
