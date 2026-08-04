'use client'

import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export function HeroQuoteForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [heroService, setHeroService] = useState('')
  const [heroDetails, setHeroDetails] = useState('')
  const [heroStatus, setHeroStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [heroError, setHeroError] = useState('')

  const handleHeroFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !email || !heroService || !heroDetails) {
      setHeroStatus('error')
      setHeroError('Please fill in all fields.')
      return
    }

    setHeroStatus('submitting')
    setHeroError('')

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name, 
          phone,
          email, 
          message: `Hero Quote Request:\nService: ${heroService}\nDetails: ${heroDetails}`,
        }),
      })

      const data = await res.json()

      if (res.ok && data.ok) {
        setHeroStatus('success')
        setName('')
        setPhone('')
        setEmail('')
        setHeroService('')
        setHeroDetails('')
      } else {
        throw new Error(data.error || 'Server error')
      }
    } catch (err: any) {
      setHeroStatus('error')
      setHeroError(err.message || 'Something went wrong. Please try calling us directly.')
    }
  }

  if (heroStatus === 'success') {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 lg:p-4 xl:p-4 2xl:p-6 shadow-2xl text-center space-y-4 lg:space-y-3 xl:space-y-3 2xl:space-y-4 w-full max-w-[380px] lg:max-w-[285px] xl:max-w-[285px] 2xl:max-w-[380px]">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 border border-emerald-100">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-lg font-extrabold text-slate-800">Quote Request Received!</h3>
        <p className="text-xs text-slate-500 font-medium leading-relaxed">
          Thanks, we will get back to you with a free, no-obligation quote as soon as possible.
        </p>
        <button 
          onClick={() => setHeroStatus('idle')}
          className="rounded-xl border border-slate-200 hover:bg-slate-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 transition-all cursor-pointer"
        >
          Send Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white border border-slate-200/80 rounded-3xl p-4 sm:p-5 lg:p-3.5 xl:p-3.5 2xl:p-5 shadow-xl space-y-3 lg:space-y-2 xl:space-y-2 2xl:space-y-3 w-full max-w-[380px] lg:max-w-[285px] xl:max-w-[285px] 2xl:max-w-[380px]">
      <div className="text-center">
        <h3 className="text-lg font-extrabold text-[#104d96] tracking-tight">Get Your Free Quote</h3>
        <p className="text-[11px] text-slate-500 font-medium mt-0.5">Fast, friendly &amp; no obligation</p>
      </div>

      <form onSubmit={handleHeroFormSubmit} className="space-y-2.5 lg:space-y-2 xl:space-y-2 2xl:space-y-2.5">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 text-slate-400">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 lg:py-1.5 xl:py-1.5 2xl:py-2 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
          />
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Phone className="h-3.5 w-3.5 text-slate-400" />
          </span>
          <input
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 lg:py-1.5 xl:py-1.5 2xl:py-2 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
          />
        </div>

        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Mail className="h-3.5 w-3.5 text-slate-400" />
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 py-2 lg:py-1.5 xl:py-1.5 2xl:py-2 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all shadow-2xs"
          />
        </div>

        <div className="relative">
          <select
            required
            value={heroService}
            onChange={(e) => setHeroService(e.target.value)}
            className={`w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all appearance-none shadow-2xs ${heroService ? 'text-slate-800 font-medium' : 'text-slate-400 font-medium'}`}
          >
            <option value="" disabled>What do you need help with?</option>
            <option value="Plumbing Repairs">Plumbing Repairs</option>
            <option value="Boiler Servicing &amp; Installation">Boiler Servicing &amp; Installation</option>
            <option value="Heating Installations">Heating Installations</option>
            <option value="Emergency Callouts">Emergency Callouts</option>
          </select>
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 text-slate-400">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
        </div>

        <div>
          <textarea
            required
            rows={2}
            value={heroDetails}
            onChange={(e) => setHeroDetails(e.target.value)}
            placeholder="Tell us a few details..."
            className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 lg:py-1.5 xl:py-1.5 2xl:py-2 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm text-slate-800 placeholder-slate-400 focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20 focus:outline-none transition-all resize-none shadow-2xs"
          />
        </div>

        {heroStatus === 'error' && (
          <div className="text-[11px] font-bold text-red-500 bg-red-50 px-2.5 py-1.5 rounded-xl border border-red-100 text-center animate-shake">
            <span>{heroError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={heroStatus === 'submitting'}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#ff6b00] to-[#ff5500] hover:from-[#e56000] hover:to-[#e54b00] text-white py-3 lg:py-2.5 xl:py-2.5 2xl:py-3 text-xs sm:text-sm lg:text-xs xl:text-xs 2xl:text-sm font-black tracking-wider transition-all duration-300 shadow-md shadow-orange-500/20 active:scale-98 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {heroStatus === 'submitting' ? (
            <span>Sending...</span>
          ) : (
            <>
              <span className="uppercase font-black text-xs sm:text-xs xl:text-xs tracking-wider">Send Request</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  )
}
