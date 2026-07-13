import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { Phone, Clock, MapPin, MessageSquare } from 'lucide-react'

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
      
      {/* 1. Red Contact Banner (Marley Moves Style) */}
      <section className="w-full bg-[#b91c1c] text-white py-12 border-b border-black/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Col 1: Get a Quote */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                <MessageSquare className="h-4 w-4" />
                <span>Get a Quote</span>
              </div>
              <p className="font-serif text-[18px] md:text-[20px] font-normal leading-snug">
                Free written quote within the hour
              </p>
              <p className="text-[13px] text-white/80">No obligation, no sales pressure.</p>
            </div>

            {/* Col 2: Call or Email */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                <Phone className="h-4 w-4" />
                <span>Call or Email</span>
              </div>
              <p className="font-serif text-[15px] font-normal leading-snug">
                <a href={siteConfig.contact.primaryPhoneHref} className="hover:underline">
                  {siteConfig.contact.primaryPhone} (Gillingham)
                </a>
              </p>
              <p className="text-[13px] text-white/80">
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>

            {/* Col 3: Office Hours */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                <Clock className="h-4 w-4" />
                <span>Office Hours</span>
              </div>
              <p className="font-serif text-[15px] font-normal leading-snug">
                Mon &ndash; Sun<br />
                8:00am &ndash; 6:00pm
              </p>
              <p className="text-[13px] text-white/80">Emergency calls out of hours.</p>
            </div>

            {/* Col 4: Address */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
                <MapPin className="h-4 w-4" />
                <span>Address</span>
              </div>
              <p className="font-serif text-[15px] font-normal leading-snug">
                {siteConfig.brand.legalName}<br />
                {siteConfig.address.display}
              </p>
              <p className="text-white/70 uppercase text-[9px] tracking-[0.2em]">
                Dorset, Somerset, Wiltshire &bull; UK-wide
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Dark Charcoal Footer (Marley Moves Style) */}
      <section className="w-full bg-[#121212] text-gray-400 py-16">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          
          {/* Main Footer Links Grid */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4 pb-12 border-b border-white/5">
            
            {/* Col 1: Bio */}
            <div className="space-y-4">
              <span className="font-serif text-[18px] font-normal uppercase tracking-[0.32em] text-white leading-none pl-[0.08em] inline-block">
                {siteConfig.brand.name}
              </span>
              <p className="text-[13px] leading-relaxed text-gray-500">
                Family-run plumbing and gas heating across Gillingham, Shaftesbury, Wincanton, and Sturminster Newton. Fixed written quotes and local response.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 rounded-[3px] bg-white/5 border border-white/10 px-3.5 py-2 text-[10px] text-gray-300 font-bold uppercase tracking-[0.14em]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Gas Safe Registered
                </div>
              </div>
            </div>

            {/* Col 2: Services */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white border-b border-[#b91c1c] pb-1.5 inline-block">
                Services
              </span>
              <ul className="space-y-3 pt-2 text-[13px]">
                {services.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-white transition-colors">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white border-b border-[#b91c1c] pb-1.5 inline-block">
                Company
              </span>
              <ul className="space-y-3 pt-2 text-[13px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white border-b border-[#b91c1c] pb-1.5 inline-block">
                Contact
              </span>
              <div className="space-y-3 pt-2 text-[13px] text-gray-500">
                <p className="text-[15px] font-bold text-white tracking-tight">{siteConfig.contact.primaryPhone}</p>
                <p>
                  <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p className="pt-2 text-[13px] leading-relaxed">
                  {siteConfig.brand.legalName}<br />
                  Based in Gillingham, Dorset
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Action Bar */}
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
                className="rounded-full bg-[#b91c1c] text-white px-5 py-2.5 font-bold uppercase tracking-[0.1em] text-[11px] hover:bg-[#991b1b] transition-all shadow-lg active:scale-95"
              >
                Get a Quote &rarr;
              </Link>
            </div>

          </div>

        </div>
      </section>

    </footer>
  )
}
