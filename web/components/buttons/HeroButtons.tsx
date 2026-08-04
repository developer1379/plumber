'use client'

import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center pt-1">
      <button 
        onClick={() => window.dispatchEvent(new CustomEvent('open-quote-modal'))}
        className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff5500] hover:from-[#e56000] hover:to-[#e54b00] px-6 py-3.5 lg:px-4 lg:py-3 xl:px-6 xl:py-3.5 text-white font-black text-xs sm:text-sm lg:text-xs xl:text-sm uppercase tracking-wider shadow-md shadow-orange-500/20 active:scale-95 transition-all cursor-pointer text-center"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4.5 w-4.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span>Get My Quote</span>
      </button>

      <a 
        href={siteConfig.contact.primaryPhoneHref} 
        className="inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-[#104d96] bg-white hover:bg-slate-50 px-6 py-3.5 lg:px-4 lg:py-3 xl:px-6 xl:py-3.5 text-[#104d96] font-black text-xs sm:text-sm lg:text-xs xl:text-sm uppercase tracking-wider shadow-xs active:scale-95 transition-all cursor-pointer text-center"
      >
        <Phone className="h-4.5 w-4.5 text-[#104d96] fill-[#104d96]" />
        <span>Speak to an Expert</span>
      </a>

      {/* Google Card Speech Bubble */}
      <div className="hidden sm:flex relative bg-white border border-slate-100/80 rounded-2xl px-4 py-3.5 w-[155px] h-[92px] shadow-lg flex-col items-center justify-center text-center select-none ml-2 -rotate-3 hover:-rotate-1 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-l border-b border-slate-100" />
        <div className="relative z-10">
          <span className="text-[17px] font-black tracking-tight font-sans block leading-none">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          <div className="flex text-amber-400 gap-0.5 justify-center mt-1">
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-amber-400 text-xs">★</span>
            <span className="text-amber-400 text-xs">★</span>
          </div>
          <span className="text-[10px] text-slate-400 font-bold block mt-1.5 leading-none">From 120+ reviews</span>
        </div>
      </div>
    </div>
  )
}
