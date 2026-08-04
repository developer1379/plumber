import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { siteConfig } from '@/lib/site-config'
import { Check, Phone, Mail, Star, Quote, ArrowRight, HelpCircle, Droplets, Flame, Thermometer, Siren, Wrench } from 'lucide-react'
import { HeroButtons } from '@/components/buttons/HeroButtons'
import { HeroQuoteForm } from '@/components/forms/HeroQuoteForm'
import { BottomQuoteForm } from '@/components/forms/BottomQuoteForm'

const RelatedAreas = dynamic(() => import('@/components/sections/RelatedBlocks').then((mod) => mod.RelatedAreas))
const RelatedServices = dynamic(() => import('@/components/sections/RelatedBlocks').then((mod) => mod.RelatedServices))
const RelatedPosts = dynamic(() => import('@/components/sections/RelatedBlocks').then((mod) => mod.RelatedPosts))
const PartnerLogosSection = dynamic(() => import('@/components/sections/PartnerLogos').then((mod) => mod.PartnerLogosSection))
const AccreditedTradeLogosSection = dynamic(() => import('@/components/sections/PartnerLogos').then((mod) => mod.AccreditedTradeLogosSection))

export default function Home() {

  const servicesList = [
    {
      title: 'Plumbing',
      description: 'From leaks and drips to general plumbing repairs.',
      icon: Droplets,
      color: 'text-blue-500 bg-blue-50 border-blue-100',
      slug: 'emergency-callouts'
    },
    {
      title: 'Boiler Repairs',
      description: 'Expert diagnostics and repairs for all boiler makes.',
      icon: Flame,
      color: 'text-orange-500 bg-orange-50 border-orange-100',
      slug: 'boiler-servicing-installation-repairs'
    },
    {
      title: 'Heating Services',
      description: 'Keep your home warm with our heating solutions.',
      icon: Thermometer,
      color: 'text-red-500 bg-red-50 border-red-100',
      slug: 'boiler-servicing-installation-repairs'
    },
    {
      title: 'Emergency Callouts',
      description: '24/7 callout for urgent plumbing & heating issues.',
      icon: Siren,
      color: 'text-red-600 bg-red-50 border-red-100',
      slug: 'emergency-callouts'
    },
    {
      title: 'Installations',
      description: 'Boilers, gas appliances, and heating system installations.',
      icon: Wrench,
      color: 'text-blue-600 bg-blue-50 border-blue-100',
      slug: 'gas-installations'
    }
  ]

  return (    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 pt-[72px] md:pt-[80px]">
        
        {/* HERO SECTION */}
        <section className="relative bg-white pt-6 pb-8 lg:pt-8 lg:pb-10 overflow-hidden">
          {/* Family Plumber Background Image (Exact Match to Reference Screenshot) */}
          <div className="absolute right-[4%] lg:right-[4%] xl:right-[10%] 2xl:right-[12%] top-0 bottom-0 w-[56%] lg:w-[52%] xl:w-[52%] h-full z-0 lg:block hidden overflow-hidden pointer-events-none">
            <div className="relative w-full h-full">
              <Image 
                src="/rob-hero.webp" 
                alt="Rob Holton - Professional plumber in kitchen" 
                fill
                priority
                fetchPriority="high"
                unoptimized
                className="object-cover object-top"
              />
              {/* Left smooth gradient overlay fading kitchen background behind text */}
              <div className="absolute inset-y-0 left-0 w-48 sm:w-60 lg:w-72 bg-gradient-to-r from-white via-white/95 via-white/70 to-transparent z-10" />
              {/* Right subtle gradient overlay fading background into quote card */}
              <div className="absolute inset-y-0 right-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
              {/* Bottom fade into white background */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />
            </div>
          </div>

          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-8 xl:px-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 xl:gap-8 items-start">
              
              {/* LEFT COLUMN: Header, Copy, Buttons & Trust Bar */}
              <div className="lg:col-span-7 space-y-5 pt-1">
                                {/* Tagline Row */}
                <div className="flex items-center">
                  <p className="text-xs sm:text-xs xl:text-sm 2xl:text-base font-black uppercase tracking-wider text-[#ff5500]">
                    YOUR LOCAL PLUMBING &amp; HEATING EXPERTS
                  </p>
                </div> 

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl lg:text-[28px] xl:text-[32px] 2xl:text-[44px] font-black leading-[1.08] text-slate-900 tracking-tight">
                  Trusted by Families.<br />
                  Recommended by Locals.
                </h1>

                {/* Paragraph */}
                <p className="max-w-xl text-base lg:text-xs xl:text-sm 2xl:text-base leading-relaxed text-slate-600 font-medium">
                  RH Plumbing &amp; Heating is a family-run business delivering honest advice, quality workmanship and reliable service across our local community.
                </p>
                {/* Hero Action Buttons */}
                <HeroButtons />

                {/* Horizontal Trust Bar (Super Responsive: 2x2 on Mobile, 1x4 on Desktop) */}
                <div className="pt-5 lg:pt-2 xl:pt-3 2xl:pt-5 max-w-[640px] w-full">
                  <div className="bg-white border border-slate-200/80 rounded-xl p-3.5 sm:p-5 lg:p-3 xl:p-4 2xl:p-5 shadow-lg shadow-slate-200/50">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
                      
                      {/* Item 1 */}
                      <div className="px-2 pt-2 sm:pt-0 space-y-1.5 lg:space-y-1 xl:space-y-1 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 lg:h-5 lg:w-5 xl:h-5.5 xl:w-5.5 2xl:h-6 2xl:w-6">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-slate-900 leading-tight">Local &amp; Family Run</h4>
                        <p className="text-[11px] sm:text-[12px] lg:text-[10px] xl:text-[10.5px] 2xl:text-[12px] text-slate-500 font-semibold leading-tight">Proudly serving our community</p>
                      </div>
 
                      {/* Item 2 */}
                      <div className="px-2 pt-2 sm:pt-0 space-y-1.5 lg:space-y-1 xl:space-y-1 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 lg:h-5 lg:w-5 xl:h-5.5 xl:w-5.5 2xl:h-6 2xl:w-6">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="m9 11 2 2 4-4" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-slate-900 leading-tight">Trusted &amp; Rated</h4>
                        <p className="text-[11px] sm:text-[12px] lg:text-[10px] xl:text-[10.5px] 2xl:text-[12px] text-slate-500 font-semibold leading-tight">5★ reviews from happy customers</p>
                      </div>
 
                      {/* Item 3 */}
                      <div className="px-2 pt-3 sm:pt-0 space-y-1.5 lg:space-y-1 xl:space-y-1 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 lg:h-5 lg:w-5 xl:h-5.5 xl:w-5.5 2xl:h-6 2xl:w-6">
                            <circle cx="9" cy="12" r="3" />
                            <path d="M15 9l6-6M9 21v-6" />
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-slate-900 leading-tight">Upfront Pricing</h4>
                        <p className="text-[11px] sm:text-[12px] lg:text-[10px] xl:text-[10.5px] 2xl:text-[12px] text-slate-500 font-semibold leading-tight">No surprises, just honest prices</p>
                      </div>
 
                      {/* Item 4 */}
                      <div className="px-2 pt-3 sm:pt-0 space-y-1.5 lg:space-y-1 xl:space-y-1 flex flex-col items-center">
                        <div className="text-[#104d96] flex justify-center">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6 lg:h-5 lg:w-5 xl:h-5.5 xl:w-5.5 2xl:h-6 2xl:w-6">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        </div>
                        <h4 className="font-black text-xs sm:text-[14px] lg:text-[11px] xl:text-[12px] 2xl:text-[14px] text-slate-900 leading-tight">Reliable &amp; Tidy</h4>
                        <p className="text-[11px] sm:text-[12px] lg:text-[10px] xl:text-[10.5px] 2xl:text-[12px] text-slate-500 font-semibold leading-tight">Respect for your home</p>
                      </div>

                    </div>
                  </div>
                </div>

              </div>



              {/* RIGHT COLUMN: Free Quote Form Card & Dark Blue Callout Box */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start space-y-3 relative z-10 w-full" id="quote-form">
                
                {/* Mobile Family Image Card */}
                <div className="lg:hidden flex justify-center w-full">
                  <div className="relative w-full max-w-[440px] aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src="/family-hero-mobile.webp" 
                      alt="RH Plumbing &amp; Heating family" 
                      width="440"
                      height="275"
                      fetchPriority="high"
                      decoding="sync"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Google rating overlay for mobile */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-slate-100 rounded-xl p-2 px-3 shadow-md">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-black text-slate-900">5.0</span>
                        <div className="flex text-amber-400 gap-0.5">
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                          <Star className="h-3 w-3 fill-current text-amber-400 stroke-none" />
                        </div>
                      </div>
                      <span className="text-[9px] text-slate-500 font-semibold block">From 120+ reviews</span>
                    </div>
                  </div>
                </div>

                {/* Quote Form Card */}
                <HeroQuoteForm />

                {/* Need Help Now Dark Blue Callout Box */}
                <a 
                  href={siteConfig.contact.primaryPhoneHref}
                  className="w-full max-w-[380px] lg:max-w-[285px] xl:max-w-[285px] 2xl:max-w-[380px] bg-[#0c4c92] hover:bg-[#093c75] text-white rounded-2xl p-3.5 px-5 lg:p-2.5 lg:px-4 xl:p-2.5 xl:px-4 2xl:p-3.5 2xl:px-5 shadow-lg transition-all cursor-pointer group flex items-center justify-between gap-4"
                >
                  <div className="space-y-0.5">
                    <p className="text-xs lg:text-[11px] xl:text-[11px] 2xl:text-xs font-black text-white uppercase tracking-wider">Need Help Now?</p>
                    <p className="text-[10.5px] lg:text-[9.5px] xl:text-[9.5px] 2xl:text-[10.5px] text-blue-200 font-medium">We offer same-day callouts</p>
                    <p className="text-lg sm:text-xl lg:text-[15px] xl:text-[15px] 2xl:text-xl font-black text-white tracking-tight flex items-center gap-2 pt-0.5">
                      <Phone className="h-4.5 w-4.5 text-white fill-white" />
                      <span>{siteConfig.contact.primaryPhone}</span>
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-[#104d96] border border-blue-400/20 flex items-center justify-center text-white shadow-inner group-hover:scale-105 transition-all">
                    <ArrowRight className="h-5 w-5 stroke-[2.5]" />
                  </div>
                </a>

              </div>

            </div>
          </div>
        </section>

        {/* LEADING BOILER BRANDS SECTION (Directly Under Hero) */}
        <PartnerLogosSection />

        {/* EMERGENCY REPAIRS & 6-GRID VALUE PROPS 2-CARD SPLIT BANNER SECTION */}
        <section className="py-12 md:py-16 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden bg-white shadow-xl border border-slate-200/80 flex flex-col justify-between p-6 sm:p-9 min-h-[380px]">
                {/* Background Layer with Van Photo & Slanted Mask with Motion Blur Edge (Hidden on Mobile) */}
                <div className="absolute inset-0 z-0 hidden sm:block">
                  <Image 
                    src="/van-hero.webp" 
                    alt="RH Plumbing &amp; Heating Service Van" 
                    fill
                    sizes="100vw"
                    quality={98}
                    className="object-cover object-right"
                  />
                  {/* White Left Background Mask with Angled Slanted Cut */}
                  <div className="absolute inset-y-0 left-0 w-[78%] sm:w-[68%] lg:w-[62%] bg-white z-10 [clip-path:polygon(0_0,100%_0,84%_100%,0_100%)] sm:[clip-path:polygon(0_0,100%_0,74%_100%,0_100%)]" />
                  
                  {/* Soft Motion Blur Overlay Transition along the Diagonal Cut */}
                  <div className="absolute inset-y-0 left-0 w-[84%] sm:w-[74%] lg:w-[68%] bg-gradient-to-r from-transparent via-white/80 to-transparent z-10 blur-[10px] [clip-path:polygon(78%_0,100%_0,86%_100%,50%_100%)] sm:[clip-path:polygon(66%_0,100%_0,78%_100%,44%_100%)] pointer-events-none" />
                </div>

                {/* Live Card Content (Headline, Subtitle & Checklist) */}
                <div className="relative z-20 max-w-md space-y-3.5">
                  <h3 className="text-2xl sm:text-[32px] font-black text-slate-900 leading-[1.12] tracking-tight">
                    Emergency Plumbing<br />&amp; Boiler Repairs
                  </h3>
                  <p className="text-xs sm:text-[13.5px] font-semibold text-slate-600 leading-relaxed">
                    Fast response. Expert solutions.<br />
                    We&apos;re available 24/7.
                  </p>

                  {/* Live Checklist */}
                  <ul className="space-y-2.5 pt-1.5">
                    {[
                      'Rapid response – we aim to be with you fast',
                      'Boiler breakdowns & no heating issues',
                      'Burst pipes, leaks & blockages',
                      'Gas safe engineers you can trust'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-bold text-slate-800">
                        <div className="w-5 h-5 rounded-full bg-[#104d96] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Live Interactive Red Callout Button */}
                <div className="relative z-20 pt-6 flex justify-start sm:justify-end">
                  <a 
                    href={siteConfig.contact.primaryPhoneHref}
                    className="inline-flex items-center gap-3.5 bg-gradient-to-r from-[#e53935] to-[#d32f2f] hover:from-[#c62828] hover:to-[#b71c1c] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl shadow-xl shadow-red-500/25 active:scale-95 transition-all cursor-pointer group"
                  >
                    <div className="w-9 h-9 rounded-full bg-white text-[#d32f2f] flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <div className="text-base sm:text-lg font-black leading-tight tracking-tight">
                        {siteConfig.contact.primaryPhone}
                      </div>
                      <div className="text-[10px] sm:text-[10.5px] font-bold text-red-100 uppercase tracking-wider leading-none mt-0.5">
                        Call Now – 24/7
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* RIGHT CARD: 6 Grid Value Props Card (5 Cols) */}
              <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-center">
                <div className="grid grid-cols-3 gap-y-8 gap-x-4 divide-x divide-slate-100 text-center">
                  
                  {/* Row 1, Col 1 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <circle cx="12" cy="7" r="4" />
                        <path d="M5.5 21a8.5 8.5 0 0 1 13 0" />
                        <path d="M12 2v2M4.9 4.9l1.4 1.4M19.1 4.9l-1.4 1.4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Local &amp; Reliable</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Proudly serving our local community</p>
                  </div>

                  {/* Row 1, Col 2 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <rect x="3" y="6" width="18" height="12" rx="2" />
                        <circle cx="12" cy="12" r="2" />
                        <path d="M6 12h.01M18 12h.01" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Transparent Pricing</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">No hidden costs, just honest quotes</p>
                  </div>

                  {/* Row 1, Col 3 */}
                  <div className="px-2 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Experienced Engineers</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Highly trained &amp; Gas Safe registered</p>
                  </div>

                  {/* Row 2, Col 1 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="m15 12-3-3 3-3" />
                        <path d="M9 18l3-3-3-3" />
                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Quality Workmanship</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Standards you can trust, every time</p>
                  </div>

                  {/* Row 2, Col 2 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 11 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Fully Insured</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Complete peace of mind for your home</p>
                  </div>

                  {/* Row 2, Col 3 */}
                  <div className="px-2 pt-6 space-y-2 flex flex-col items-center">
                    <div className="text-[#104d96] flex justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-7 w-7">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
                    <h4 className="font-black text-xs sm:text-[13px] text-slate-900 leading-tight">Satisfaction Guaranteed</h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">We won&apos;t leave until you&apos;re happy</p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* Heading block */}
            <div className="text-center space-y-2 pb-12 max-w-4xl mx-auto">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff6b00]">
                OUR SERVICES
              </p>
              <h2 className="text-3xl md:text-[38px] font-black text-slate-800 leading-tight">
                Complete Plumbing &amp; Heating Solutions
              </h2>
            </div>

            {/* 5-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {servicesList.map((service, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="group rounded-xl border border-slate-100 p-8 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-slate-200 flex flex-col items-center text-center justify-between min-h-[285px]"
                  >
                    <div className="space-y-4 flex flex-col items-center w-full">
                      {/* Clean Icon sitting directly on the card */}
                      <div className={`w-16 h-16 flex items-center justify-center rounded-2xl border ${service.color} transition-transform duration-300 group-hover:scale-105`}>
                        <service.icon className="w-8 h-8" />
                      </div>

                      {/* Info */}
                      <div className="space-y-2 w-full">
                        <h3 className="font-extrabold text-[17px] text-slate-800 tracking-tight leading-snug">
                          {service.title}
                        </h3>
                        <p className="text-[12.5px] leading-relaxed text-slate-400 font-semibold">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <Link 
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-[13.5px] font-bold text-blue-600 hover:text-blue-800 transition-colors mt-4"
                    >
                      <span>Learn More &rarr;</span>
                    </Link>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        {/* DEDICATED ACCREDITATION TRUST BANNER (Directly Under OUR SERVICES Section) */}
        <AccreditedTradeLogosSection />

        {/* THREE-COLUMN INFO SECTION */}
        <section className="py-20 bg-[#fafafa] border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
              
              {/* Col 1: Why Choose Us */}
              <div className="lg:pr-8 space-y-8 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff6b00]">
                    WHY CHOOSE US?
                  </p>
                </div>

                {/* Checklist */}
                <ul className="space-y-4 pt-2">
                  {[
                    'Experienced & Qualified Engineers',
                    'Transparent Pricing, No Hidden Fees',
                    'High Quality Workmanship',
                    'Friendly, Local & Reliable',
                    'Work Guaranteed for Peace of Mind'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 text-[#0d4c92] flex items-center justify-center flex-shrink-0 shadow-2xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className="text-[13.5px] text-slate-700 font-bold tracking-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 10 Year Guarantee card */}
                <div className="rounded-2xl border border-blue-100 bg-[#f8fafc] overflow-hidden flex items-stretch max-w-sm mt-8 shadow-xs hover:shadow-sm transition-shadow duration-300">
                  {/* Blue left-side icon badge */}
                  <div className="w-16 bg-[#0c4c92] text-white flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-6 w-6">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <polyline points="9 11 11 13 15 9" strokeWidth="2.5" />
                    </svg>
                  </div>
                  {/* Right-side text */}
                  <div className="p-4 flex flex-col justify-center">
                    <h4 className="font-extrabold text-[14px] text-slate-900 leading-tight">10 Year Guarantee</h4>
                    <p className="text-[11px] text-slate-500 font-semibold mt-1">On selected boiler installations*</p>
                  </div>
                </div>
              </div>

              {/* Col 2: Our Simple Process */}
              <div className="lg:px-10 pt-8 lg:pt-0 space-y-8 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff6b00]">
                    OUR SIMPLE PROCESS
                  </p>
                </div>

                {/* Timeline block */}
                <div className="relative pl-10 space-y-8 pt-2">
                  {/* Dotted vertical line */}
                  <div className="absolute left-[15px] top-4 bottom-4 w-0.5 border-l-2 border-dashed border-slate-200" />

                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-7.5 h-7.5 rounded-full bg-blue-50 border-2 border-[#0d4c92] text-[#0d4c92] flex items-center justify-center text-xs font-black shadow-2xs">
                      1
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-950 leading-tight">Get in Touch</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-500 font-semibold">
                        Call us or fill out our quick form and tell us what you need.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-7.5 h-7.5 rounded-full bg-orange-50 border-2 border-[#f97316] text-[#f97316] flex items-center justify-center text-xs font-black shadow-2xs">
                      2
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-950 leading-tight">We Assess</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-500 font-semibold">
                        We&apos;ll assess the issue and provide clear options and pricing.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-10 top-0 w-7.5 h-7.5 rounded-full bg-red-50 border-2 border-[#d9383a] text-[#d9383a] flex items-center justify-center text-xs font-black shadow-2xs">
                      3
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[14px] font-extrabold text-slate-950 leading-tight">We Get It Done</h4>
                      <p className="text-[12.5px] leading-relaxed text-slate-500 font-semibold">
                        Our expert team gets the job done right, on time.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Col 3: Testimonial */}
              <div className="lg:pl-10 pt-8 lg:pt-0 space-y-8 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff6b00]">
                    WHAT OUR CUSTOMERS SAY
                  </p>
                </div>

                {/* Testimonial Card */}
                <div className="relative rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-xs hover:shadow-sm transition-shadow duration-300 space-y-5 flex flex-col justify-between h-full">
                  <div>
                    {/* Top line with Stars and Quote mark */}
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400 gap-0.5">
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                        <Star className="h-4.5 w-4.5 fill-current" />
                      </div>
                      <Quote className="h-8 w-8 text-slate-100 stroke-[2.5]" />
                    </div>

                    {/* Review Text */}
                    <p className="text-[13.5px] leading-relaxed text-slate-600 font-semibold italic mt-4">
                      Brilliant service from start to finish. Quick response, great communication and the work was completed to a very high standard. Highly recommended!
                    </p>
                  </div>

                  {/* Author footer */}
                  <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-900 leading-tight">Sarah T.</h5>
                      <p className="text-[11.5px] text-slate-400 font-semibold mt-0.5">Bedford</p>
                    </div>

                    {/* Google G Logo */}
                    <div className="w-6.5 h-6.5 flex items-center justify-center rounded-full bg-slate-50 border border-slate-100 flex-shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* GET A FREE QUOTE FORM SECTION */}
        <section id="quote-form" className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 md:px-12">
            
            {/* The single grey-blue container card enclosing both columns */}
            <div className="bg-[#f4f7f9] border border-slate-200/40 rounded-3xl p-8 md:p-12 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.015)]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Info Column */}
                <div className="lg:col-span-5 space-y-6">
                  
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#ff6b00]">
                    GET A FREE QUOTE
                  </p>

                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
                    Let&apos;s Get Your Job Sorted
                  </h2>

                  <p className="text-[13.5px] leading-relaxed text-slate-600 font-medium">
                    Fill out the form and we&apos;ll get back to you as soon as possible with a free, no-obligation quote.
                  </p>

                  {/* Contact detail blocks */}
                  <div className="space-y-5 pt-4 border-t border-slate-200/60 max-w-md">
                    
                    {/* Phone block */}
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-slate-850 flex-shrink-0 mt-1" />
                      <div>
                        <a href={siteConfig.contact.primaryPhoneHref} className="font-extrabold text-[15px] text-slate-850 hover:text-[#ff6b00] transition-colors block leading-tight">
                          {siteConfig.contact.primaryPhone}
                        </a>
                        <span className="text-[11px] text-[#ff6b00] font-semibold mt-1 block">24/7 Emergency Callout</span>
                      </div>
                    </div>

                    {/* Email block */}
                    <div className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-slate-850 flex-shrink-0 mt-1" />
                      <div>
                        <a href={`mailto:${siteConfig.contact.email}`} className="font-extrabold text-[15px] text-slate-850 hover:text-[#ff6b00] transition-colors block leading-tight">
                          {siteConfig.contact.email}
                        </a>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right Form Column */}
                <div className="lg:col-span-7">
                  <BottomQuoteForm />
                </div>

              </div>
            </div>
          </div>
        </section>



        {/* Linking Blocks */}
        <div className="mx-auto max-w-7xl px-6 md:px-12 pb-16 pt-8 border-t border-slate-50">
          <RelatedServices />
          <RelatedPosts />
        </div>
      </main>

      <Footer />
    </div>
  )
}
