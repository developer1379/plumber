import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { reviewSchema } from '@/lib/schema/jsonld'
import { Phone, Star } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Customer Reviews',
  description: 'Read customer reviews and feedback for Rob Holton\'s boiler servicing, gas repairs, and heating work in Gillingham.',
}

const REVIEWS = [
  {
    authorName: 'Sarah M.',
    rating: 5,
    body: 'Rob was excellent. He arrived exactly when he said he would, quickly diagnosed our boiler issue, and had the heating back on in no time. Highly professional and fair pricing.',
    datePublished: '2026-06-15',
  },
  {
    authorName: 'David T.',
    rating: 5,
    body: 'Very thorough boiler service. Rob explained everything clearly and didn\'t try to upsell any unnecessary parts. Will definitely use BMV Plumbing for my annual service going forward.',
    datePublished: '2026-05-20',
  },
  {
    authorName: 'James L. (Landlord)',
    rating: 5,
    body: 'I have used Rob for gas safety checks across my rental properties. The CP12 certificates are issued immediately and the communication is always excellent. Highly recommended for landlords.',
    datePublished: '2026-04-10',
  },
]

export default function ReviewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schemas */}
      {REVIEWS.map((r, i) => (
        <span key={i}>
          {reviewSchema({
            authorName: r.authorName,
            rating: r.rating,
            body: r.body,
            datePublished: r.datePublished,
          })}
        </span>
      ))}

      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Reviews' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Reviews list */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Customer Feedback</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  Client Reviews & Testimonials
                </h1>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  We believe in local, reliable plumbing services. Here is what my clients say about their experience with BMV Plumbing.
                </p>
              </div>

              <div className="space-y-6">
                {REVIEWS.map((r, idx) => (
                  <div key={idx} className="rounded-2xl border border-border bg-white p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="font-bold text-primary">{r.authorName}</div>
                      <div className="flex items-center text-amber-500">
                        {Array.from({ length: r.rating }).map((_, starIdx) => (
                          <Star key={starIdx} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed italic">
                      "{r.body}"
                    </p>
                    <div className="text-xs text-muted">
                      Published: {new Date(r.datePublished).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Leave a Review</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  If you have recently had work done by Rob Holton, we would appreciate your feedback.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors shadow-sm"
                >
                  Contact Rob
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
