'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/lib/site-config'
import { ChevronDown, MessageCircle, Mail, Menu, X, Flame, ShieldCheck, Wrench, AlertTriangle, Phone, ArrowRight } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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

  // On home page, the header starts transparent and turns white on scroll/hover.
  // On all other pages, it is always in the white/light theme.
  const isLight = !isHome || isScrolled || isHovered

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
    <header 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        isLight 
          ? 'bg-white text-primary border-slate-150 shadow-[0_4px_20px_rgba(0,0,0,0.08)]' 
          : 'bg-black/25 backdrop-blur-[6px] text-white border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.05)]'
      }`}
    >
      {/* Top USP Bar */}
      <div className="w-full py-2 text-center text-[10px] md:text-[10.5px] font-bold uppercase tracking-[0.09em] bg-gradient-to-r from-primary via-[#0d1e36] to-primary text-slate-200 border-b border-white/5 flex items-center justify-center gap-1.5 flex-wrap">
        <span className="opacity-95">Written Fixed Quotes Within The Hour</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse mx-2" />
        <span className="opacity-95">Gas Safe Registered</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse mx-2" />
        <span className="opacity-95">No Obligation</span>
      </div>

      {/* Main Logo & Action Bar */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
        {/* Left: Brand Logo / Identity */}
        <Link href="/" className="group flex items-center focus:outline-none">
          <img 
            src={isLight ? '/logo-dark-text.png' : '/logo-white-text-transparent.png'} 
            alt="R&H Plumbing & Heating" 
            className="h-12 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-x-7 text-[13px] font-bold uppercase tracking-[0.1em]">
          <Link href="/" className="nav-link">
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 nav-link focus:outline-none py-1 uppercase cursor-pointer"
            >
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] rounded-2xl border p-5 shadow-[0_24px_64px_rgba(0,0,0,0.12)] z-50 transition-all duration-300 normal-case ${
                  isLight 
                    ? 'border-slate-100 bg-white/95 backdrop-blur-md text-primary shadow-slate-200/60' 
                    : 'border-white/10 bg-black/95 backdrop-blur-md text-white shadow-black/80'
                }`}
              >
                <div className="grid gap-2.5">
                  {services.map((s) => {
                    const Icon = s.icon
                    return (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-start gap-4 rounded-xl p-3.5 transition-all duration-300 group/item ${
                          isLight 
                            ? 'hover:bg-slate-50/80 hover:shadow-[0_4px_16px_rgba(0,0,0,0.02)]' 
                            : 'hover:bg-white/5 hover:shadow-[0_4px_16px_rgba(255,255,255,0.02)]'
                        }`}
                      >
                        <div className={`mt-0.5 rounded-xl p-2.5 transition-all duration-300 flex-shrink-0 ${
                          isLight 
                            ? 'bg-slate-50 text-slate-600 group-hover/item:bg-secondary/10 group-hover/item:text-secondary group-hover/item:scale-110' 
                            : 'bg-white/5 text-gray-300 group-hover/item:bg-secondary-light/10 group-hover/item:text-secondary-light group-hover/item:scale-110'
                        }`}>
                          <Icon className="h-5 w-5 transition-transform duration-300 group-hover/item:rotate-6" />
                        </div>
                        <div>
                          <h4 className={`text-[12px] font-bold uppercase tracking-[0.06em] pl-[0.06em] transition-colors duration-300 ${
                            isLight 
                              ? 'text-primary group-hover/item:text-secondary' 
                              : 'text-white group-hover/item:text-secondary-light'
                          }`}>
                            {s.title}
                          </h4>
                          <p className={`mt-1 text-[11px] leading-relaxed transition-colors duration-300 ${
                            isLight 
                              ? 'text-slate-500 group-hover/item:text-slate-700' 
                              : 'text-gray-400 group-hover/item:text-gray-200'
                          }`}>
                            {s.description}
                          </p>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/insights" className="nav-link">
            Insights
          </Link>

          <Link href="/guides" className="nav-link">
            Guides
          </Link>

          <Link href="/faqs" className="nav-link">
            FAQs
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* Right: Contact Info & CTA Button */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href={siteConfig.contact.primaryPhoneHref}
            className={`flex items-center gap-2 text-sm font-bold tracking-tight transition-colors duration-300 ${
              isLight ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
            }`}
          >
            <Phone className="h-4 w-4 text-secondary" />
            <span>{siteConfig.contact.primaryPhone}</span>
          </a>

          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
            className="group/btn rounded-full bg-secondary text-white px-5 py-2.5 font-bold uppercase tracking-[0.05em] text-[11px] hover:bg-secondary-hover hover:shadow-secondary/20 hover:shadow-lg transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>

        {/* Mobile View Elements: Phone Callout & Menu Drawer Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <a
            href={siteConfig.contact.primaryPhoneHref}
            className={`p-2 transition-colors ${
              isLight ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
            }`}
            title="Call BMV Plumbing"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-1.5 focus:outline-none transition-colors duration-300 ${
              isLight ? 'text-slate-600 hover:bg-slate-50' : 'text-gray-300 hover:bg-white/5'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setIsOpen(false)} 
      />

      <div 
        className={`fixed inset-y-0 right-0 w-[300px] max-w-[85vw] z-50 shadow-2xl transition-transform duration-300 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ${
          isLight ? 'bg-white text-primary border-l border-slate-100' : 'bg-[#0b0f17] text-white border-l border-white/5'
        } flex flex-col`}
      >
        {/* Drawer Header */}
        <div className="p-5 flex items-center justify-between border-b border-white/5">
          <Link href="/" onClick={() => setIsOpen(false)} className="focus:outline-none">
            <img 
              src={isLight ? '/logo-dark-text.png' : '/logo-white-text-transparent.png'} 
              alt="R&H Plumbing & Heating" 
              className="h-10 w-auto object-contain" 
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className={`rounded-full p-2 focus:outline-none transition-colors duration-300 ${
              isLight ? 'hover:bg-slate-100 text-slate-600' : 'hover:bg-white/5 text-gray-400'
            }`}
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
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            Home
          </Link>

          {/* Collapsible Services Accordion */}
          <div className="space-y-2">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex w-full items-center justify-between py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-left transition-colors focus:outline-none cursor-pointer ${
                isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
              }`}
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
                  className={`block py-2 text-[11px] font-bold uppercase tracking-[0.05em] pl-[0.05em] transition-colors ${
                    isLight ? 'text-slate-500 hover:text-secondary' : 'text-gray-400 hover:text-secondary-light'
                  }`}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            About
          </Link>

          <Link
            href="/insights"
            onClick={() => setIsOpen(false)}
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            Insights
          </Link>

          <Link
            href="/guides"
            onClick={() => setIsOpen(false)}
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            Guides
          </Link>

          <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] transition-colors ${
              isLight ? 'hover:text-secondary' : 'hover:text-secondary-light'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Drawer Footer Actions */}
        <div className={`p-5 border-t space-y-3.5 ${isLight ? 'border-slate-100 bg-slate-50/50' : 'border-white/5 bg-black/20'}`}>
          <a
            href={siteConfig.contact.primaryPhoneHref}
            className={`flex items-center justify-center gap-2.5 rounded-full border py-3 text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
              isLight 
                ? 'border-slate-200 text-primary hover:border-slate-350 hover:bg-slate-100/50' 
                : 'border-white/10 text-white hover:border-white/20 hover:bg-white/5'
            }`}
          >
            <Phone className="h-4 w-4 text-secondary" />
            <span>{siteConfig.contact.primaryPhone}</span>
          </a>

          <button
            onClick={() => {
              setIsOpen(false)
              window.dispatchEvent(new CustomEvent('open-quote-modal'))
            }}
            className="group/btn flex w-full justify-center items-center rounded-full bg-secondary text-white py-3.5 text-xs font-bold uppercase tracking-wider hover:bg-secondary-hover hover:shadow-secondary/20 hover:shadow-lg transition-all gap-1.5 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </header>
  )
}
