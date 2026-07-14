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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <Link href="/" className={`group flex items-center focus:outline-none transition-colors duration-300 ${isLight ? 'text-primary' : 'text-white'}`}>
          <svg className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="12" y="52" className="font-serif text-[42px] font-extrabold" fill="currentColor">R</text>
            <path 
              d="M 75 58 C 70 54 68 45 71 35 C 74 25 78 18 78 8 C 78 16 83 23 88 32 C 92 40 91 50 88 56 C 85 62 78 60 75 58 Z" 
              fill="url(#logo-flame-grad)" 
            />
            <path 
              d="M 83 58 C 89 58 94 54 94 47 C 94 40 86 30 83 25 C 80 30 72 40 72 47 C 72 54 77 58 83 58 Z" 
              fill="url(#logo-drop-grad)" 
            />
            <text x="100" y="52" className="font-serif text-[42px] font-extrabold" fill="currentColor">H</text>
            <text x="12" y="73" className="font-sans text-[9px] font-black tracking-[0.16em]" fill="currentColor">PLUMBING &amp; HEATING</text>
            <defs>
              <linearGradient id="logo-flame-grad" x1="70" y1="8" x2="90" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="40%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#ea580c" />
              </linearGradient>
              <linearGradient id="logo-drop-grad" x1="72" y1="25" x2="94" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>
          </svg>
        </Link>

        {/* Center: Desktop Navigation Bar */}
        <nav className="hidden lg:flex items-center gap-x-7 text-[11px] font-bold uppercase tracking-[0.1em]">
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

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div className={`lg:hidden border-t px-4 py-4 space-y-2 shadow-2xl transition-all duration-300 ${
          isLight ? 'border-slate-100 bg-white' : 'border-white/10 bg-[#0f0f0f]'
        }`}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            Home
          </Link>
          
          <div className="space-y-1">
            <span className="block px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md pl-6 pr-3 py-2 text-xs font-medium ${
                  isLight ? 'hover:bg-slate-50 text-slate-700' : 'hover:bg-white/5 text-gray-300'
                }`}
              >
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            About
          </Link>

          <Link
            href="/insights"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            Insights
          </Link>

          <Link
            href="/guides"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            Guides
          </Link>

          <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider ${
              isLight ? 'hover:bg-slate-50 text-primary' : 'hover:bg-white/5 text-white'
            }`}
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-slate-100 mt-2">
            <button
              onClick={() => {
                setIsOpen(false)
                window.dispatchEvent(new CustomEvent('open-quote-modal'))
              }}
              className="group/btn flex w-full justify-center items-center rounded-full bg-secondary text-white py-3 text-xs font-bold uppercase tracking-wider hover:bg-secondary-hover hover:shadow-secondary/20 hover:shadow-lg transition-all gap-1.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
