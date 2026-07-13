'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site-config'
import { CheckCircle2 } from 'lucide-react'

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
      <div className="mx-auto max-w-[1400px] rounded-[4px] border-2 border-[#b91c1c] bg-[#faf9f6] p-5 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)] text-center space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="font-serif text-[24px] md:text-[30px] lg:text-[34px] leading-[1.05] tracking-tight text-primary">Thank you! Your quote request has been sent.</h3>
        <p className="text-[13px] text-slate-600 font-medium">Rob will review your details and get back to you with a fixed quote within the hour.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
        >
          Send another request
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-[1400px] rounded-[4px] border-2 border-[#b91c1c] bg-[#faf9f6] p-5 md:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
      
      {/* Title */}
      <div>
        <h2 className="font-serif text-[24px] md:text-[30px] lg:text-[34px] leading-[1.05] tracking-tight text-primary">
          Get a fixed quote within the hour
        </h2>
      </div>

      {/* Form Grid */}
      <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1fr_auto] gap-3 items-end">
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700/85">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="First and last name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-[3px] border border-slate-300 bg-white px-3 h-[44px] text-[14px] text-primary placeholder:text-slate-400 focus:border-slate-800 focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700/85">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-[3px] border border-slate-300 bg-white px-3 h-[44px] text-[14px] text-primary placeholder:text-slate-400 focus:border-slate-800 focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Postcode */}
        <div>
          <label htmlFor="postcode" className="block mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700/85">Your Postcode</label>
          <input
            id="postcode"
            type="text"
            placeholder="e.g. SP8 4WF"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            disabled={status === 'submitting'}
            className="w-full rounded-[3px] border border-slate-300 bg-white px-3 h-[44px] text-[14px] text-primary placeholder:text-slate-400 focus:border-slate-800 focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Service Type */}
        <div>
          <label htmlFor="service" className="block mb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700/85">Service Needed</label>
          <div className="relative">
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              disabled={status === 'submitting'}
              className="w-full rounded-[3px] border border-slate-300 bg-white pl-3 pr-8 h-[44px] text-[14px] text-primary focus:border-slate-800 focus:outline-none transition-colors appearance-none"
            >
              <option value="boiler-service">Boiler Servicing</option>
              <option value="boiler-repair">Boiler Diagnostic / Repair</option>
              <option value="gas-installation">Gas Appliance Fitting</option>
              <option value="landlord-checks">Landlord CP12 Check</option>
              <option value="emergency-plumbing">Emergency Leak Repair</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full md:w-auto md:min-w-[150px] md:px-7 h-[44px] rounded-[3px] text-[13px] font-bold uppercase tracking-[0.1em] text-white bg-[#b91c1c] hover:-translate-y-[1px] hover:shadow-md transition-all active:scale-[0.98]"
          >
            {status === 'submitting' ? 'Sending...' : 'Get My Quote →'}
          </button>
        </div>

      </form>

      {/* Error Message */}
      {status === 'error' && (
        <p className="text-center text-xs font-semibold text-red-600 mt-2">{message}</p>
      )}

      {/* Bottom Trust Line */}
      <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-600/75">
        5.0 <span className="text-[#b91c1c]">★★★★★</span> Google rating &bull; Family-run &bull; Insured to £2.5M &bull; Or call{" "}
        <a href={siteConfig.contact.primaryPhoneHref} className="underline hover:text-slate-900 transition-colors font-semibold">
          {siteConfig.contact.primaryPhone}
        </a>
      </p>

    </div>
  )
}
