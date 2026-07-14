import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { getAllInsightsSummaries } from '@/lib/sanity/queries'
import { Phone, BookOpen, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Heating & Plumbing Insights',
  description: 'Expert advice and helpful guides on boiler maintenance, gas safety, and plumbing from Rob Holton.',
}

export default async function InsightsPage() {
  let posts = await getAllInsightsSummaries().catch(() => [])

  if (!posts || posts.length === 0) {
    posts = [
      {
        _id: 'mock-1',
        title: 'Why Your Boiler Makes Strange Noises (And When It\'s Serious)',
        slug: 'boiler-making-noises-when-to-worry',
        summary: 'Rob Holton talks through the common noises (kettling, banging, gurgling, whistling) and what each usually means, ending with a clear call trigger for the genuinely urgent ones.',
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        _id: 'mock-2',
        title: 'What Changes for Landlords: Gas Safety Rules Explained',
        slug: 'landlord-gas-safety-rules-explained',
        summary: 'A plain-English walkthrough of landlord gas safety obligations (12-month renewal, 28-day tenant disclosure, no grace period), written for local property owners.',
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        _id: 'mock-3',
        title: 'What To Do If You Smell Gas In Your Home',
        slug: 'what-to-do-if-you-smell-gas',
        summary: 'A safety-first, step-by-step guide on what to do if you suspect a gas leak. Turn off the meter, ventilate, call the National Gas Emergency Service, then contact BMV Plumbing.',
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      }
    ] as any
  }

  const fallbacks = [
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    '/hero-bg.png',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Insights' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Articles Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Expert Resources</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif">
                  Heating &amp; Plumbing Insights
                </h1>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  Browse my collection of articles, tips, and safety guides to keep your home warm and your plumbing operating efficiently.
                </p>
              </div>

              {posts.length === 0 ? (
                <div className="rounded-2xl border border-border p-8 bg-card text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary font-serif">Articles Coming Soon</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    I am currently drafting guides on boiler efficiency and plumbing maintenance. Check back soon for safety tips and advice.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2">
                  {posts.map((p, idx) => (
                    <Link
                      key={p._id}
                      href={`/insights/${p.slug}`}
                      className="group flex flex-col justify-between rounded-2xl border border-border/80 p-0 bg-card overflow-hidden hover:border-slate-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out"
                    >
                      <div>
                        {/* Image Preview Container */}
                        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-border/60 relative">
                          <img
                            src={p.imageUrl || fallbacks[idx % 3]}
                            alt={p.title}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>

                        {/* Text Details */}
                        <div className="p-6 md:p-8 space-y-3">
                          {p.publishedAt && (
                            <time dateTime={p.publishedAt} className="text-[10px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-[#a16207]">
                              {new Date(p.publishedAt).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }).toUpperCase()}
                            </time>
                          )}
                          <h2 className="text-xl font-serif font-normal text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                            {p.title}
                          </h2>
                          {p.summary && (
                            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                              {p.summary}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] pl-[0.06em] text-primary group-hover:text-secondary transition-colors">
                          <span>Read article</span>
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="group/sidebar rounded-2xl border border-border bg-white p-8 border-t-4 border-t-secondary shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300/80 transition-all duration-300 ease-out">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/5 text-secondary transition-all duration-300 group-hover/sidebar:bg-secondary/10 group-hover/sidebar:scale-105">
                  <Phone className="h-6 w-6 transition-transform duration-300 group-hover/sidebar:rotate-12" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary font-serif">Have a Heating Issue?</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Call Rob Holton for direct boiler servicing, safety checks, and emergency repairs.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-secondary active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" />
                  <span>{siteConfig.contact.primaryPhone}</span>
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
