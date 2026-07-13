import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { getAllInsightsSummaries } from '@/lib/sanity/queries'
import { Phone, BookOpen } from 'lucide-react'
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

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

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
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Expert Resources</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  Heating & Plumbing Insights
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
                  <h3 className="text-lg font-bold text-primary">Articles Coming Soon</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    I am currently drafting guides on boiler efficiency and plumbing maintenance. Check back soon for safety tips and advice.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2">
                  {posts.map((p) => (
                    <Link
                      key={p._id}
                      href={`/insights/${p.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
                    >
                      <div>
                        {p.publishedAt && (
                          <time dateTime={p.publishedAt} className="text-xs text-muted">
                            {new Date(p.publishedAt).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </time>
                        )}
                        <h2 className="mt-2 text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                          {p.title}
                        </h2>
                        {p.summary && (
                          <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                            {p.summary}
                          </p>
                        )}
                      </div>
                      <span className="mt-6 block text-sm font-bold text-primary group-hover:text-secondary">
                        Read article &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Have a Heating Issue?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Call Rob Holton for direct boiler servicing, inspections, and repairs.
                </p>
                <a
                  href={siteConfig.contact.primaryPhoneHref}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-secondary py-3 text-sm font-semibold text-white hover:bg-secondary-hover transition-colors shadow-sm"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.contact.primaryPhone}
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
