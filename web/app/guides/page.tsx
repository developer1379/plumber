import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { sanityClient } from '@/lib/sanity/client'
import { Phone, Book } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

export const metadata = {
  title: 'Evergreen Plumbing & Heating Guides',
  description: 'Pillar guides and expert instructions on heating maintenance, boiler settings, and winter preparations.',
}

type GuideSummary = {
  title: string
  slug: string
  summary: string
  publishedAt?: string
}

export default async function GuidesPage() {
  // Query posts that belong to the 'guides' category
  const query = `
    *[_type == "post" && status == "published" && category->slug.current == "guides"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, excerpt),
      publishedAt
    }
  `
  let guides = await sanityClient.fetch<GuideSummary[]>(query).catch(() => [])

  if (!guides || guides.length === 0) {
    guides = [
      {
        title: 'The Complete Guide to Boiler Servicing: What\'s Included, Cost and How Often',
        slug: 'complete-guide-boiler-servicing',
        summary: 'A comprehensive review of what a professional boiler service includes, standard UK market cost guides, and why annual scheduling is essential.',
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: 'Landlord Gas Safety Certificates (CP12): The Complete Guide',
        slug: 'complete-guide-landlord-gas-safety-certificate-cp12',
        summary: 'Everything landlords need to know about Gas Safety Certificates, legal obligations, tenant disclosure, renewal times, and cost guidelines.',
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      },
      {
        title: 'What To Do In A Plumbing Or Gas Emergency: Step-by-Step',
        slug: 'what-to-do-plumbing-gas-emergency',
        summary: 'An evergreen homeowner action plan for handling burst pipes, heating breakdowns in winter, and suspected gas leaks safely before the engineer arrives.',
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      }
    ]
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[140px] md:h-[148px] lg:h-[176px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Guides' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Guides Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">Pillar Content</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl">
                  Evergreen Homeowner Guides
                </h1>
                <p className="mt-6 text-lg text-muted leading-relaxed">
                  Deep-dive technical instructions and checklists to help you manage your home plumbing, prevent emergency leaks, and maximize boiler lifespan.
                </p>
              </div>

              {guides.length === 0 ? (
                <div className="rounded-2xl border border-border p-8 bg-card text-center space-y-4">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <Book className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">Guides Coming Soon</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    I am writing detailed guides on bleeding radiators, resetting boiler pressure, and preparing heating systems for winter. Check back soon.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="group flex flex-col justify-between rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
                    >
                      <div>
                        {g.publishedAt && (
                          <time dateTime={g.publishedAt} className="text-xs text-muted">
                            {new Date(g.publishedAt).toLocaleDateString('en-GB', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                            })}
                          </time>
                        )}
                        <h2 className="mt-2 text-xl font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2">
                          {g.title}
                        </h2>
                        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                          {g.summary}
                        </p>
                      </div>
                      <span className="mt-6 block text-sm font-bold text-primary group-hover:text-secondary">
                        Read guide &rarr;
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Need Professional Help?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Call Rob Holton for certified boiler repairs and plumbing installations.
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
