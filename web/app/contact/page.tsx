import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ContactForm } from '@/components/sections/ContactForm'
import { RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { Phone, Mail, MapPin, AlertCircle } from 'lucide-react'

export const metadata = {
  title: 'Contact Rob Holton',
  description: 'Get in touch with Rob Holton at BMV Plumbing for boiler repairs, safety inspections, gas hobs and pipe installations in Gillingham.',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Contact Rob Holton' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Form Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Get in Touch</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif">
                  Contact BMV Plumbing
                </h1>
                <p className="mt-4 text-slate-600 text-sm max-w-xl leading-relaxed">
                  Use the form below to describe your trade heating or plumbing job, and I will get back to you with a clear, fixed quote.
                </p>
              </div>

              <div className="rounded-2xl border border-border/80 bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              
              {/* Direct Contacts Card */}
              <div className="rounded-2xl border border-border bg-white p-8 border-t-4 border-t-secondary shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
                <h3 className="text-xl font-bold text-primary font-serif">Direct Contacts</h3>
                
                <div className="space-y-6 mt-6">
                  
                  {/* Phone */}
                  <div className="group/contact flex items-start gap-4 text-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/5 text-secondary flex-shrink-0 transition-all duration-300 group-hover/contact:bg-secondary/10 group-hover/contact:scale-105">
                      <Phone className="h-4.5 w-4.5 transition-transform duration-300 group-hover/contact:rotate-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Phone Number</div>
                      <a 
                        href={siteConfig.contact.primaryPhoneHref} 
                        className="text-slate-600 hover:text-secondary font-medium transition-colors mt-1.5 block"
                      >
                        {siteConfig.contact.primaryPhone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/contact flex items-start gap-4 text-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/5 text-secondary flex-shrink-0 transition-all duration-300 group-hover/contact:bg-secondary/10 group-hover/contact:scale-105">
                      <Mail className="h-4.5 w-4.5 transition-transform duration-300 group-hover/contact:rotate-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Email Address</div>
                      <a 
                        href={`mailto:${siteConfig.contact.email}`} 
                        className="text-slate-600 hover:text-secondary font-medium transition-colors mt-1.5 block"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="group/contact flex items-start gap-4 text-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/5 text-secondary flex-shrink-0 transition-all duration-300 group-hover/contact:bg-secondary/10 group-hover/contact:scale-105">
                      <MapPin className="h-4.5 w-4.5 transition-transform duration-300 group-hover/contact:rotate-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Service Area Base</div>
                      <span className="text-slate-600 mt-1.5 block leading-relaxed">
                        {siteConfig.address.display}
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Disclaimer Notice Card */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-2.5 text-slate-800 font-bold uppercase tracking-wider text-[11px] pl-[0.08em]">
                  <AlertCircle className="h-4.5 w-4.5 text-secondary flex-shrink-0" />
                  <span>No Map Iframe Notice</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  To provide a fast page experience, we do not load map tracking cookies. Our service area extends across a 10-mile radius from Gillingham base, covering Dorset, Somerset, and Wiltshire borders.
                </p>
              </div>

            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-border">
            <RelatedAreas />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
