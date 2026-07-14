'use client'

import { ArrowRight } from 'lucide-react'

export function EnquiryButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-quote-modal'))
  }

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2.5 rounded-xl bg-secondary text-white px-5 py-2.5 hover:bg-secondary-hover hover:shadow-secondary/20 hover:shadow-lg transition-all duration-300 shadow-md text-[12px] font-bold uppercase tracking-wider active:scale-95 cursor-pointer group/enq"
    >
      <span>Online Enquiry</span>
      <ArrowRight className="h-4 w-4 group-hover/enq:translate-x-1 transition-transform" />
    </button>
  )
}
