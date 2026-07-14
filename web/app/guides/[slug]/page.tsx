import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { sanityClient } from '@/lib/sanity/client'
import { blogPostingSchema } from '@/lib/schema/jsonld'
import { PortableText } from 'next-sanity'
import { Phone, ChevronLeft } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

type GuideFull = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  body?: any
  publishedAt?: string
  author?: {
    name: string
    jobTitle: string
  }
}

const MOCK_GUIDES: Record<string, {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  author: { name: string; jobTitle: string }
  body: any
}> = {
  'complete-guide-boiler-servicing': {
    _id: 'mock-guide-1',
    title: 'The Complete Guide to Boiler Servicing: What\'s Included, Cost and How Often',
    slug: 'complete-guide-boiler-servicing',
    excerpt: 'A comprehensive review of what a professional boiler service includes, standard UK market cost guides, and why annual scheduling is essential.',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Boiler servicing is the key to keeping your home warm, energy bills low, and ensuring gas safety. In this guide, we walk through exactly what happens during an annual check, standard UK industry pricing, and maintenance checklists.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What is checked during a boiler service?' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: 'A registered engineer conducts several checks:\n1. Visual Inspection: Examining the casing, seals, and piping for leaks.\n2. Flue & Ventilation: Verifying that exhaust gases vent safely without leaks.\n3. Gas Pressure: Checking burner pressure matches manufacturer specifications.\n4. Combustion Safety: Testing flues for Carbon Monoxide (CO) levels.\n5. Casing Seals: Verifying water-tight seals on internal chambers.' }]
      }
    ]
  },
  'complete-guide-landlord-gas-safety-certificate-cp12': {
    _id: 'mock-guide-2',
    title: 'Landlord Gas Safety Certificates (CP12): The Complete Guide',
    slug: 'complete-guide-landlord-gas-safety-certificate-cp12',
    excerpt: 'Everything landlords need to know about Gas Safety Certificates, legal obligations, tenant disclosure, renewal times, and cost guidelines.',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'As a landlord in the UK, you carry strict legal safety duties under the Gas Safety Regulations (1998). This comprehensive guide explains your obligations, CP12 paperwork, and inspection protocols.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'What are a landlord\'s primary duties?' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: '1. Annual Checks: Schedule an annual gas safety check every 12 months.\n2. Tenant Copy: Provide the certificate to tenants within 28 days of check.\n3. Record Retention: Retain safety records for at least 2 years.' }]
      }
    ]
  },
  'what-to-do-plumbing-gas-emergency': {
    _id: 'mock-guide-3',
    title: 'What To Do In A Plumbing Or Gas Emergency: Step-by-Step',
    slug: 'what-to-do-plumbing-gas-emergency',
    excerpt: 'An evergreen homeowner action plan for handling burst pipes, heating breakdowns in winter, and suspected gas leaks safely before the engineer arrives.',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Plumbing or heating emergencies can happen when least expected. Knowing the immediate safety steps can prevent extensive water damage or secure your home during a gas leak.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Step-by-Step Emergency Checklists' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: '1. Burst Water Pipes: Locate your main stopcock valve (often under the sink or stairs) and turn it clockwise immediately to shut off the water supply. Open taps to drain system pressure.\n2. Gas Smell: Do not use matches, open flames, or light switches. Open doors and windows. Isolate gas supply at meter. Call 0800 111 999.' }]
      }
    ]
  }
}

export async function generateStaticParams() {
  const query = `*[_type == "post" && status == "published" && category->slug.current == "guides"]{ "slug": slug.current }`
  const guides = await sanityClient.fetch<{ slug: string }[]>(query).catch(() => [])
  const liveSlugs = guides.map((g) => ({ slug: g.slug }))
  const mockSlugs = Object.keys(MOCK_GUIDES).map((slug) => ({ slug }))
  return [...liveSlugs, ...mockSlugs]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const query = `*[_type == "post" && slug.current == $slug && status == "published" && category->slug.current == "guides"][0]{ title, excerpt }`
  let guide = await sanityClient.fetch<{ title: string; excerpt?: string }>(query, { slug }).catch(() => null)
  if (!guide && MOCK_GUIDES[slug]) {
    guide = MOCK_GUIDES[slug] as any
  }
  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.excerpt,
    alternates: {
      canonical: `/guides/${slug}`,
    },
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const query = `
    *[_type == "post" && slug.current == $slug && status == "published" && category->slug.current == "guides"][0]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      body,
      publishedAt,
      author-> {
        name,
        jobTitle
      }
    }
  `

  let guide = await sanityClient.fetch<GuideFull>(query, { slug }).catch(() => null)
  if (!guide && MOCK_GUIDES[slug]) {
    guide = MOCK_GUIDES[slug] as any
  }

  if (!guide) {
    notFound()
  }

  const breadcrumbsTrail = [
    { label: 'Guides', href: '/guides' },
    { label: guide.title },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schema */}
      {blogPostingSchema({
        url: `${siteConfig.url.production}/guides/${slug}`,
        headline: guide.title,
        description: guide.excerpt || '',
        datePublished: guide.publishedAt || '',
      })}

      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={breadcrumbsTrail} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to Guides
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl leading-tight">
                  {guide.title}
                </h1>
                {guide.publishedAt && (
                  <time dateTime={guide.publishedAt} className="mt-2 block text-xs text-muted">
                    Published: {new Date(guide.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </div>

              {/* PortableText body content */}
              <article className="prose max-w-none text-slate-700 leading-relaxed space-y-6">
                {guide.body ? (
                  <PortableText value={guide.body} />
                ) : (
                  <p>{guide.excerpt}</p>
                )}
              </article>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {guide.author && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">About the Author</h3>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-primary">{guide.author.name}</div>
                      <div className="text-xs text-muted">{guide.author.jobTitle}</div>
                    </div>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-primary">Need an Engineer?</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  Call Rob Holton for direct support, servicing, or repairs.
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
