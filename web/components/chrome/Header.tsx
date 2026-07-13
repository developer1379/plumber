'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { ChevronDown, MessageCircle, Mail, Menu, X, Flame, ShieldCheck, Wrench, AlertTriangle } from 'lucide-react'

export function Header() {
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

  const isLight = isScrolled || isHovered

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
          ? 'bg-white text-primary border-slate-150 shadow-[0_2px_12px_rgba(0,0,0,0.06)]' 
          : 'bg-[#121212]/95 backdrop-blur-md text-white border-white/5'
      }`}
    >
      {/* Top USP Bar */}
      <div className={`w-full py-2 text-center text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
        isLight ? 'bg-[#0a0a0a] text-gray-300' : 'bg-[#000000]/60 text-gray-400'
      }`}>
        <span className="opacity-90">Written Fixed Quotes Within The Hour</span>
        <span className="mx-3 opacity-40">&middot;</span>
        <span className="opacity-90">Gas Safe Registered</span>
        <span className="mx-3 opacity-40">&middot;</span>
        <span className="opacity-90">No Obligation, No Sales Pressure</span>
      </div>

      {/* Main Logo & Action Bar */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-3 md:py-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between relative">
          
          {/* Left: Phone */}
          <div className="flex items-center gap-2 md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2">
            <a
              href={siteConfig.contact.primaryPhoneHref}
              className={`text-[24px] md:text-[28px] lg:text-[30px] font-medium tracking-tight transition-colors duration-300 font-sans ${
                isLight ? 'text-primary hover:text-secondary' : 'text-white hover:text-secondary'
              }`}
            >
              {siteConfig.contact.primaryPhone}
            </a>
          </div>

          {/* Center: Logo/Brand */}
          <div className="text-center mx-auto">
            <Link href="/" className="group block">
              <span className={`font-serif text-xl md:text-2xl font-normal uppercase leading-none tracking-[0.32em] pl-[0.32em] transition-colors duration-300 group-hover:text-secondary inline-block ${
                isLight ? 'text-primary' : 'text-white'
              }`}>
                BMV Plumbing
              </span>
              <span className={`block text-[9px] md:text-[10px] font-semibold uppercase opacity-75 tracking-[0.28em] transition-colors duration-300 mt-1.5 ${
                isLight ? 'text-slate-500' : 'text-gray-300'
              }`}>
                Plumbing &amp; Heating &middot; Gillingham, SP8
              </span>
            </Link>
          </div>

          {/* Right: WhatsApp / Email */}
          <div className={`flex items-center gap-6 text-xs font-semibold uppercase tracking-wider md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 transition-colors duration-300 ${
            isLight ? 'text-slate-600' : 'text-gray-300'
          }`}>
            <a
              href={`https://wa.me/${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <MessageCircle className="h-4 w-4 text-emerald-500" />
              <span>WhatsApp</span>
            </a>
            <span className={isLight ? 'text-slate-200' : 'text-white/20'}>|</span>
            <Link href="/contact" className="flex items-center gap-1.5 hover:text-secondary transition-colors">
              <Mail className="h-4 w-4 text-slate-400" />
              <span>Email us</span>
            </Link>
          </div>
        </div>

        {/* Desktop Centered Navigation Bar */}
        <div className={`mt-5 border-t pt-3 hidden lg:block transition-colors duration-300 ${
          isLight ? 'border-slate-100' : 'border-white/10'
        }`}>
          <nav className="flex items-center justify-center gap-x-5 text-[12px] font-semibold uppercase tracking-[0.14em]">
            <Link href="/" className="nav-link">
              Home
            </Link>
            
            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className="flex items-center gap-1.5 nav-link focus:outline-none py-1 uppercase"
              >
                Services <ChevronDown className="h-3.5 w-6" />
              </button>

              {servicesOpen && (
                <div
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[420px] rounded-xl border p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-50 transition-all duration-200 normal-case ${
                    isLight 
                      ? 'border-slate-150 bg-white shadow-slate-200/50' 
                      : 'border-white/10 bg-[#121212] shadow-black/80'
                  }`}
                >
                  <div className="grid gap-2">
                    {services.map((s) => {
                      const Icon = s.icon
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-start gap-4 rounded-lg p-3 transition-all duration-200 group/item ${
                            isLight 
                              ? 'hover:bg-slate-50' 
                              : 'hover:bg-white/5'
                          }`}
                        >
                          <div className={`mt-0.5 rounded-lg p-2 transition-colors ${
                            isLight 
                              ? 'bg-slate-100 text-slate-600 group-hover/item:bg-secondary/10 group-hover/item:text-secondary' 
                              : 'bg-white/5 text-gray-400 group-hover/item:bg-secondary/20 group-hover/item:text-secondary'
                          }`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                              isLight 
                                ? 'text-primary group-hover/item:text-secondary' 
                                : 'text-white group-hover/item:text-secondary'
                            }`}>
                              {s.title}
                            </h4>
                            <p className="mt-1.5 text-[11px] text-muted leading-relaxed font-medium">
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

            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>

            <Link href="/about" className="nav-link">
              About
            </Link>

            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>

            <Link href="/insights" className="nav-link">
              Insights
            </Link>

            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>

            <Link href="/guides" className="nav-link">
              Guides
            </Link>

            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>

            <Link href="/faqs" className="nav-link">
              FAQs
            </Link>

            <span aria-hidden="true" className={`opacity-30 text-[10px] transition-colors duration-300 ${
              isLight ? 'text-slate-300' : 'text-white/20'
            }`}>&middot;</span>

            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile menu toggle */}
        <div className={`mt-4 flex items-center justify-between border-t pt-4 lg:hidden transition-colors duration-300 ${
          isLight ? 'border-slate-100' : 'border-white/10'
        }`}>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Navigation</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-md p-1.5 focus:outline-none transition-colors duration-300 ${
              isLight ? 'text-slate-600 hover:bg-slate-50' : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className={`lg:hidden border-t px-4 py-4 space-y-2 shadow-2xl ${
          isLight ? 'border-slate-100 bg-[#f8fafc]' : 'border-white/10 bg-[#0f0f0f]'
        }`}>
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            Home
          </Link>
          
          <div className="space-y-1">
            <span className="block px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Services
            </span>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md pl-6 pr-3 py-2 text-xs font-medium hover:bg-slate-100"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            About
          </Link>

          <Link
            href="/insights"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            Insights
          </Link>

          <Link
            href="/guides"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            Guides
          </Link>

          <Link
            href="/faqs"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            FAQs
          </Link>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-md px-3 py-2 text-sm font-bold uppercase tracking-wider hover:bg-slate-100"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  )
}
