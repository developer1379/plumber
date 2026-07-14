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
      
      {/* 1. Deep Crimson Contact Banner */}
      <section className="w-full bg-[#8c1d1d] text-white py-12 border-b border-black/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/5 lg:divide-y-0 lg:divide-x lg:divide-white/10">
            
            {/* Col 1: Get a Quote */}
            <div className="group/contact flex flex-col gap-3 lg:px-6 py-4 lg:py-0 transition-colors duration-200">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white/90">
                <MessageSquare className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover/contact:scale-115 group-hover/contact:rotate-6" />
                <span>Get a Quote</span>
              </div>
              <p className="font-serif text-[18px] md:text-[20px] font-normal leading-snug">
                Free written quote within the hour
              </p>
              <p className="text-[13px] text-white/80">No obligation, no sales pressure.</p>
            </div>

            {/* Col 2: Call or Email */}
            <div className="group/contact flex flex-col gap-3 lg:px-6 pt-6 lg:pt-0 transition-colors duration-200">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white/90">
                <Phone className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover/contact:scale-115 group-hover/contact:rotate-6" />
                <span>Call or Email</span>
              </div>
              <p className="font-serif text-[18px] md:text-[20px] font-normal leading-snug hover:underline">
                <a href={siteConfig.contact.primaryPhoneHref}>
                  {siteConfig.contact.primaryPhone}
                </a>
              </p>
              <p className="text-[13px] text-white/85">
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Col 3: Office Hours */}
            <div className="group/contact flex flex-col gap-3 lg:px-6 pt-6 lg:pt-0 transition-colors duration-200">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white/90">
                <Clock className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover/contact:scale-115 group-hover/contact:rotate-6" />
                <span>Office Hours</span>
              </div>
              <p className="font-serif text-[18px] md:text-[20px] font-normal leading-snug">
                Mon &ndash; Sun
              </p>
              <p className="text-[13px] text-white/80 leading-snug">
                8:00am &ndash; 6:00pm<br />
                <span className="text-[11px] text-white/70 italic">Emergency calls out of hours.</span>
              </p>
            </div>

            {/* Col 4: Address */}
            <div className="group/contact flex flex-col gap-3 lg:px-6 pt-6 lg:pt-0 transition-colors duration-200">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-white/90">
                <MapPin className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover/contact:scale-115 group-hover/contact:rotate-6" />
                <span>Address</span>
              </div>
              <p className="font-serif text-[18px] md:text-[20px] font-normal leading-snug">
                {siteConfig.address.display}
              </p>
              <p className="text-white/70 uppercase text-[9px] tracking-[0.08em] pl-[0.08em]">
                Dorset, Somerset, Wiltshire &bull; UK-wide
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dark Charcoal Footer */}
      <section className="w-full bg-[#0d0d0d] text-gray-400 py-16 border-t border-white/5">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/5">
            
            {/* Col 1: Bio */}
            <div className="space-y-4">
              <span className="font-serif text-[20px] font-medium uppercase tracking-[0.05em] text-white leading-none inline-block">
                {siteConfig.brand.name}
              </span>
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
                className="group/btn rounded-full bg-secondary text-white px-5 py-2.5 font-bold uppercase tracking-[0.05em] text-[11px] hover:bg-secondary-hover transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 flex items-center gap-1.5"
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
