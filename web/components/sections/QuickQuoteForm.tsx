'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle2, ChevronDown } from 'lucide-react'

export function QuickQuoteForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [postcode, setPostcode] = useState('')
  const [service, setService] = useState('boiler-service')
  
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !postcode) {
      setStatus('error')
      setMessage('Please fill in all fields.')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, details: `Postcode: ${postcode} | Requested Service: ${service}` }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setPostcode('')
      } else {
        throw new Error()
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try calling us directly.')
    }
  }

  if (status === 'success') {
    return (
      <div className="w-full max-w-[460px] rounded-2xl border border-border border-t-[5px] border-t-[#C03838] bg-[#faf9f6] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)] text-center space-y-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="font-serif text-[24px] leading-snug tracking-tight text-primary">
          Quote Request Received!
        </h3>
        <p className="text-[13px] text-slate-600 font-medium leading-relaxed">
          Thanks, Rob will review your details and send you a fixed quote within the hour.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-secondary-hover transition-colors"
        >
          Send Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[460px] rounded-2xl border border-border border-t-[5px] border-t-[#C03838] bg-[#faf9f6] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      {/* Title & Description */}
      <div>
        <h2 className="font-serif text-[26px] leading-[1.1] tracking-tight text-primary font-normal">
          Get a Fixed Quote
        </h2>
        <p className="text-xs text-slate-500 mt-1.5 leading-normal font-medium">
          Free written quote within the hour, no obligation.
        </p>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-[#C03838] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-[#C03838] focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Grid: Postcode & Service Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Postcode */}
          <div>
            <label htmlFor="postcode" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
              Your Postcode
            </label>
            <input
              id="postcode"
              type="text"
              placeholder="e.g. SP8 4WF"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full rounded-lg border border-slate-200 bg-white px-3.5 h-[44px] text-[13px] text-primary placeholder:text-slate-400 focus:border-[#C03838] focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Service Needed */}
          <div>
            <label htmlFor="service" className="block mb-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-700/85">
              Service Needed
            </label>
            <div className="relative">
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                disabled={status === 'submitting'}
                className="w-full rounded-lg border border-slate-200 bg-white pl-3.5 pr-8 h-[44px] text-[13px] text-primary focus:border-[#C03838] focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="boiler-service">Boiler Servicing</option>
                <option value="boiler-repair">Boiler Repair</option>
                <option value="gas-installation">Gas Appliance Fitting</option>
                <option value="landlord-checks">Landlord CP12 Check</option>
                <option value="emergency-plumbing">Emergency Plumbing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full h-[46px] rounded-full text-[12px] font-bold uppercase tracking-[0.1em] text-white bg-[#C03838] hover:bg-[#a8221c] transition-all duration-300 shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
          >
            {status === 'submitting' ? 'Sending...' : 'Get My Quote →'}
          </button>
        </div>
      </form>

      {/* Error Message */}
      {status === 'error' && (
        <p className="text-center text-xs font-semibold text-red-600 mt-3">{message}</p>
      )}

      {/* Bottom Trust Context */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center text-[10px] text-slate-400 font-medium">
        <span>5.0 ★★★★★ Rating</span>
        <span>&bull;</span>
        <span>Insured to £2.5M</span>
        <span>&bull;</span>
        <a href={siteConfig.contact.primaryPhoneHref} className="hover:text-primary transition-colors underline">
          Call {siteConfig.contact.primaryPhone}
        </a>
      </div>
    </div>
  )
}
