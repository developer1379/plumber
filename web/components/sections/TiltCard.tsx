'use client'

import { useState, useRef } from 'react'
import { Award, CheckCircle, ArrowRight } from 'lucide-react'

interface TiltCardProps {
  className?: string
}

export function TiltCard({ className = '' }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const card = cardRef.current
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    
    // Rotate values (max 8 degrees for a subtle 3D shift)
    const rotateX = -(y / (rect.height / 2)) * 8
    const rotateY = (x / (rect.width / 2)) * 8
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`)
  }

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  const handleCallbackClick = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out',
        transformStyle: 'preserve-3d',
      }}
      className={`transition-shadow duration-300 ${className}`}
    >
      <div className="relative overflow-hidden w-full rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-4 border-t-secondary space-y-6 group">
        {/* SVG Plumbing/Heating Watermark */}
        <div className="absolute -right-6 -bottom-6 w-36 h-36 text-secondary/5 group-hover:text-secondary/8 transition-all duration-500 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="25" strokeDasharray="3 3" />
            <path d="M 50 50 L 68 32" strokeWidth="2" strokeLinecap="round" />
            <path d="M 50 80 L 50 95 M 40 95 L 60 95" strokeWidth="1.5" />
            <path d="M 20 50 L 10 50 L 10 30" strokeWidth="1.5" />
            <path d="M 80 50 L 90 50 L 90 70" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Live Badge */}
        <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Live Status</span>
          </div>
          <span className="text-[10px] font-medium text-slate-400">Gillingham SP8</span>
        </div>

        {/* Shield and Guarantee Header */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 border border-secondary/25 text-secondary-light shadow-[0_4px_20px_rgba(255,107,0,0.15)]">
            <Award className="h-6 w-6" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-secondary-light">Rob Holton's</span>
            <span className="block text-[15px] font-bold text-white leading-tight">Service Guarantee</span>
          </div>
        </div>

        {/* Guarantee Bullets */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-4.5 w-4.5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[12.5px] font-bold text-white">Gas Safe Registered</p>
              <p className="text-[10.5px] text-slate-400 mt-0.5">Rob Holton &bull; Ref TBC</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4.5 w-4.5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[12.5px] font-bold text-white">Fixed Price Quotes</p>
              <p className="text-[10.5px] text-slate-400 mt-0.5">Written within the hour, no hidden fees.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4.5 w-4.5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[12.5px] font-bold text-white">12-Month Warranty</p>
              <p className="text-[10.5px] text-slate-400 mt-0.5">Fully certified parts &amp; workmanship cover.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle className="h-4.5 w-4.5 text-secondary mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-[12.5px] font-bold text-white">Rapid Local Response</p>
              <p className="text-[10.5px] text-slate-400 mt-0.5">Based in Gillingham for fast arrival times.</p>
            </div>
          </div>
        </div>

        {/* Action button inside the 3D card */}
        <div className="relative z-10 pt-2">
          <button
            onClick={handleCallbackClick}
            className="w-full py-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-secondary-light/40 hover:bg-secondary-light/10 text-white font-bold uppercase tracking-wider text-[11px] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Request Callback</span>
            <ArrowRight className="h-3.5 w-3.5 text-secondary-light" />
          </button>
        </div>
      </div>
    </div>
  )
}
