import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { sanityClient } from '@/lib/sanity/client'
import { Phone, Book, ArrowRight, Wrench } from 'lucide-react'
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
  imageUrl?: string
}

export default async function GuidesPage() {
  // Query posts that belong to the 'guides' category
  const query = `
    *[_type == "post" && status == "published" && category->slug.current == "guides"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, excerpt),
      publishedAt,
      "imageUrl": mainImage.asset->url
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
            <Breadcrumbs trail={[{ label: 'Guides' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Guides Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Pillar Content</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif">
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
                  <h3 className="text-lg font-bold text-primary font-serif">Guides Coming Soon</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    I am writing detailed guides on bleeding radiators, resetting boiler pressure, and preparing heating systems for winter. Check back soon.
                  </p>
                </div>
              ) : (
                <div className="grid gap-8 sm:grid-cols-2">
                  {guides.map((g, idx) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}`}
                      className="group flex flex-col justify-between rounded-2xl border border-border/80 p-0 bg-card overflow-hidden hover:border-slate-300 hover:shadow-[0_16px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1.5 transition-all duration-300 ease-out"
                    >
                      <div>
                        {/* Image Preview Container */}
                        <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-border/60 relative">
                          <img
                            src={g.imageUrl || fallbacks[idx % 3]}
                            alt={g.title}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                          />
                        </div>

                        {/* Details */}
                        <div className="p-6 md:p-8 space-y-3">
                          {g.publishedAt && (
                            <time dateTime={g.publishedAt} className="text-[10px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-[#a16207]">
                              {new Date(g.publishedAt).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                              }).toUpperCase()}
                            </time>
                          )}
                          <h2 className="text-xl font-serif font-normal text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                            {g.title}
                          </h2>
                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 pt-1">
                            {g.summary}
                          </p>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.06em] pl-[0.06em] text-primary group-hover:text-secondary transition-colors">
                          <span>Read guide</span>
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
                  <Wrench className="h-6 w-6 transition-transform duration-300 group-hover/sidebar:rotate-12" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary font-serif">Need Professional Help?</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Call Rob Holton for certified boiler repairs and plumbing installations.
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
