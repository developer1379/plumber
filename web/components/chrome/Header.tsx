'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/site-config'
import { ChevronDown, Menu, X, Flame, ShieldCheck, Wrench, AlertTriangle, Phone } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const services = [
    {
      label: 'Boiler Servicing, Installation & Repairs',
      title: 'Boiler Servicing & Repairs',
      description: 'Annual safety checks, diagnostic maintenance, and emergency boiler repairs.',
      href: '/services/boiler-servicing-installation-repairs',
      icon: Flame,
    },
    {
      label: 'Landlord Safety Checks',
      title: 'Landlord Safety Checks',
      description: 'Gas safety inspections, appliance testing, and official CP12 certificates.',
      href: '/services/landlord-safety-checks',
      icon: ShieldCheck,
    },
    {
      label: 'Gas Installations',
      title: 'Gas Installations',
      description: 'New boiler upgrades, cookers, hobs, and system gas pipework.',
      href: '/services/gas-installations',
      icon: Wrench,
    },
    {
      label: 'Emergency Callouts',
      title: 'Emergency Callouts',
      description: 'Rapid, same-day local response for burst pipes and heating failures.',
      href: '/services/emergency-callouts',
      icon: AlertTriangle,
    },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white text-slate-800 border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      {/* Main Logo & Action Bar */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-3.5 flex items-center justify-between">
        {/* Left: Brand Logo / Identity */}
        <Link href="/" className="group flex items-center focus:outline-none">
          <img 
            src="/logo-new.png" 
            alt="RH Plumbing & Heating" 
            className="h-11 md:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-x-7 text-[15px] font-bold text-slate-800 tracking-tight">
          <Link href="/" className="nav-link relative py-1 hover:text-[#104d96] transition-colors">
            Home
          </Link>
          <Link href="/about" className="nav-link relative py-1 hover:text-[#104d96] transition-colors">
            About Us
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 nav-link relative py-1 focus:outline-none cursor-pointer hover:text-[#104d96] transition-colors"
            >
              <span>Services</span>
              <ChevronDown className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#ff5500]' : ''}`} />
              {/* Active / Hover Orange Indicator Bar */}
              {(servicesOpen || pathname.startsWith('/services')) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#ff5500] rounded-full" />
              )}
            </button>

            {/* Invisible Hover Bridge */}
            {servicesOpen && (
              <div className="absolute top-full left-0 -translate-x-12 pt-2 w-[440px] z-50">
                <div className="rounded-2xl border border-slate-100/90 bg-white p-4 shadow-[0_20px_60px_rgba(0,0,0,0.09)] text-slate-800">
                  <div className="grid gap-1.5">
                    {services.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-4 rounded-xl p-3 transition-all duration-200 group/item hover:bg-slate-50/80 cursor-pointer"
                        >
                          <div className="mt-0.5 rounded-xl p-2.5 transition-all duration-200 bg-blue-50/60 text-[#104d96] group-hover/item:bg-[#104d96] group-hover/item:text-white flex-shrink-0">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="text-[12.5px] font-extrabold uppercase tracking-[0.05em] text-[#104d96] group-hover/item:text-[#ff5500] transition-colors">
                              {s.title}
                            </h4>
                            <p className="mt-0.5 text-[11.5px] leading-relaxed text-slate-500 font-medium group-hover/item:text-slate-700">
                              {s.description}
                            </p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/reviews" className="nav-link relative py-1 hover:text-[#104d96] transition-colors">
            Reviews
          </Link>

          <Link href="/blog" className="nav-link relative py-1 hover:text-[#104d96] transition-colors">
            Blog
          </Link>

          <Link href="/contact" className="nav-link relative py-1 hover:text-[#104d96] transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right: Contact Info */}
        <div className="hidden lg:flex flex-col items-end text-right">
          <span className="text-[11px] text-slate-450 tracking-wide font-medium lowercase">
            {siteConfig.url.productionHost}
          </span>
          <a
            href={siteConfig.contact.primaryPhoneHref}
            className="flex items-center gap-1.5 text-[21px] font-extrabold text-slate-900 hover:text-[#ff6b00] transition-colors leading-tight mt-0.5"
          >
            <Phone className="h-5 w-5 text-slate-900 fill-slate-900" />
            <span>{siteConfig.contact.primaryPhone}</span>
          </a>
          <span className="text-[11.5px] font-bold text-[#ff6b00] tracking-wide mt-0.5">
            24/7 Emergency Callout
          </span>
        </div>

        {/* Mobile View Elements: Phone Callout & Menu Drawer Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={siteConfig.contact.primaryPhoneHref}
            className="p-2 text-slate-700 hover:text-secondary transition-colors"
            title="Call"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-1.5 text-slate-600 hover:bg-slate-50 focus:outline-none transition-colors duration-300"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Sidebar */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 animate-fade-in" 
            onClick={() => setIsOpen(false)} 
          />

          <div className="fixed inset-y-0 right-0 w-[300px] max-w-[85vw] z-50 shadow-2xl animate-slide-in bg-white text-slate-800 border-l border-slate-100 flex flex-col">
            {/* Drawer Header */}
            <div className="p-5 flex items-center justify-between border-b border-slate-100">
              <Link href="/" onClick={() => setIsOpen(false)} className="focus:outline-none">
                <img 
                  src="/logo-new.png" 
                  alt="RH Plumbing & Heating" 
                  className="h-9 w-auto object-contain" 
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 hover:bg-slate-100 text-slate-600 focus:outline-none transition-colors duration-300"
                aria-label="Close Mobile Menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Body - Scrollable Links */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-slate-700 hover:text-secondary transition-colors"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-slate-700 hover:text-secondary transition-colors"
              >
                About Us
              </Link>

              {/* Collapsible Services Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-left text-slate-700 hover:text-secondary transition-colors focus:outline-none cursor-pointer"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`space-y-1 pl-4 transition-all duration-300 overflow-hidden ${
                  mobileServicesOpen ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}>
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 text-[11px] font-bold uppercase tracking-[0.05em] pl-[0.05em] text-slate-500 hover:text-secondary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/reviews"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-slate-700 hover:text-secondary transition-colors"
              >
                Reviews
              </Link>

              <Link
                href="/blog"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-slate-700 hover:text-secondary transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-slate-700 hover:text-secondary transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/50 space-y-3.5">
              <a
                href={siteConfig.contact.primaryPhoneHref}
                className="flex items-center justify-center gap-2.5 rounded-full border border-slate-200 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-100/50 transition-colors duration-300"
              >
                <Phone className="h-4 w-4 text-[#ff6b00] fill-[#ff6b00]" />
                <span>{siteConfig.contact.primaryPhone}</span>
              </a>
              
              <div className="text-center text-[11px] text-slate-400 font-medium">
                {siteConfig.url.productionHost}
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
