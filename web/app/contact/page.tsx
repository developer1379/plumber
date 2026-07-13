import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { ContactForm } from '@/components/sections/ContactForm'
import { RelatedAreas } from '@/components/sections/RelatedBlocks'
import { siteConfig } from '@/lib/site-config'
import { Phone, Mail, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Rob Holton',
  description: 'Get in touch with Rob Holton at BMV Plumbing for boiler repairs, safety inspections, gas hobs and pipe installations in Gillingham.',
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

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
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Get in Touch</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  Contact BMV Plumbing
                </h1>
                <p className="mt-4 text-muted text-sm max-w-xl">
                  Use the form below to describe your trade heating or plumbing job, and I will get back to you with a clear, fixed quote.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-primary">Direct Contacts</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 text-sm">
                    <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-primary">Phone Number</div>
                      <a href={siteConfig.contact.primaryPhoneHref} className="text-muted hover:underline mt-1 block">
                        {siteConfig.contact.primaryPhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-primary">Email Address</div>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-muted hover:underline mt-1 block">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-primary">Service Area Base</div>
                      <span className="text-muted mt-1 block">
                        {siteConfig.address.display}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border p-6 bg-white space-y-3 text-xs text-muted leading-relaxed">
                <div className="font-bold text-primary uppercase tracking-wider">No Map Iframe Notice</div>
                <p>
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
