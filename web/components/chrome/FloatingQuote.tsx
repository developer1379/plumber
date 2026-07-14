'use client'

import { useState, useEffect } from 'react'
import { FileText, X } from 'lucide-react'
import { QuickQuoteForm } from '../sections/QuickQuoteForm'

export function FloatingQuote() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-quote-modal', handleOpen)
    return () => window.removeEventListener('open-quote-modal', handleOpen)
  }, [])

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-secondary text-white px-5 py-3.5 font-bold uppercase tracking-wider text-[11px] shadow-[0_12px_24px_rgba(192,56,56,0.3)] hover:bg-[#a8221c] active:scale-95 hover:shadow-[0_16px_32px_rgba(192,56,56,0.4)] transition-all duration-300 animate-bounce cursor-pointer"
        style={{ animationDuration: '3s' }}
      >
        <FileText className="h-4 w-4" />
        <span>Get a Quote</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          <div className="relative w-full max-w-[460px] animate-scale-up">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-slate-100/80 hover:bg-slate-200 text-slate-600 hover:text-slate-800 transition-colors shadow-sm cursor-pointer"
              title="Close Quote Form"
            >
              <X className="h-4 w-4" />
            </button>
            
            {/* Render Quote Form */}
            <QuickQuoteForm />
          </div>
        </div>
      )}
    </>
  )
}
