import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { getInsightBySlug, getAllInsightsSummaries } from '@/lib/sanity/queries'
import { blogPostingSchema } from '@/lib/schema/jsonld'
import { PortableText } from 'next-sanity'
import { Phone, ChevronLeft } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const MOCK_POSTS: Record<string, {
  title: string
  summary: string
  publishedAt: string
  body: any
  author: { name: string; jobTitle: string }
}> = {
  'boiler-making-noises-when-to-worry': {
    title: 'Why Your Boiler Makes Strange Noises (And When It\'s Serious)',
    summary: 'Rob Holton talks through the common noises (kettling, banging, gurgling, whistling) and what each usually means, ending with a clear call trigger for the genuinely urgent ones.',
    publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Boilers often make noise as part of their regular heating operations. However, strange or unusually loud noises can be a sign that a component is failing or requires cleaning. As an independent heating engineer based in Gillingham, I see these common boiler sounds regularly.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Common Boiler Noises & What They Mean' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: '1. Kettling or Banging: If your boiler sounds like a boiling kettle, it is typically a sign of "kettling." This occurs when limescale or sludge builds up on the heat exchanger, restricting water flow and causing local boiling and steam bubbles. This needs professional cleaning or power flushing.' }]
      },
      {
        _key: 'p3',
        _type: 'block',
        children: [{ _type: 'span', text: '2. Gurgling: Whistling or gurgling is often caused by trapped air within the boiler system or radiators. Bleeding your radiators can resolve this. If the gurgling persists, it could point to a leak or low system pressure.' }]
      },
      {
        _key: 'p4',
        _type: 'block',
        children: [{ _type: 'span', text: '3. Loud Whirring or Humming: A high-pitched whirring or hum is usually a sign of a failing circulation pump or a malfunctioning fan. Contact me to diagnose the fault before it results in a complete breakdown.' }]
      }
    ]
  },
  'landlord-gas-safety-rules-explained': {
    title: 'What Changes for Landlords: Gas Safety Rules Explained',
    summary: 'A plain-English walkthrough of landlord gas safety obligations (12-month renewal, 28-day tenant disclosure, no grace period), written for local property owners.',
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'Under the UK Gas Safety (Installation and Use) Regulations 1998, landlords have a strict legal duty to ensure all gas appliances, flues, and pipework in their rental properties are safe. This requires obtaining an annual Gas Safety Certificate (CP12) every 12 months.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Key Obligations for Landlords' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: '1. Annual Inspection: Every gas appliance (boiler, cooker, hob, fireplace) must be inspected by a Gas Safe registered engineer once a year.' }]
      },
      {
        _key: 'p3',
        _type: 'block',
        children: [{ _type: 'span', text: '2. Record Keeping: Landlords must keep copies of the CP12 certificate for a minimum of 2 years and provide a copy to their tenants within 28 days of the check.' }]
      },
      {
        _key: 'p4',
        _type: 'block',
        children: [{ _type: 'span', text: '3. Zero Grace Period: The certificate must be renewed before it expires. If a CP12 lapses, you are legally exposed from the day after expiration.' }]
      }
    ]
  },
  'what-to-do-if-you-smell-gas': {
    title: 'What To Do If You Smell Gas In Your Home',
    summary: 'A safety-first, step-by-step guide on what to do if you suspect a gas leak. Turn off the meter, ventilate, call the National Gas Emergency Service, then contact BMV Plumbing.',
    publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    author: { name: 'Rob Holton', jobTitle: 'Owner & Heating Engineer' },
    body: [
      {
        _key: 'p1',
        _type: 'block',
        children: [{ _type: 'span', text: 'A suspected gas leak is a serious emergency. If you smell gas or notice a sudden pressure drop in your gas supply, you must act quickly to ensure your family and property remain safe.' }]
      },
      {
        _key: 'h2-1',
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Safety Steps to Follow Immediately:' }]
      },
      {
        _key: 'p2',
        _type: 'block',
        children: [{ _type: 'span', text: '1. Extinguish all open flames and do not touch any electrical switches, light switches, or appliances (which can create a spark).' }]
      },
      {
        _key: 'p3',
        _type: 'block',
        children: [{ _type: 'span', text: '2. Open all doors and windows to ventilate the property and clear the gas buildup.' }]
      },
      {
        _key: 'p4',
        _type: 'block',
        children: [{ _type: 'span', text: '3. Turn off the gas control valve at the gas meter immediately if it is safe to do so.' }]
      },
      {
        _key: 'p5',
        _type: 'block',
        children: [{ _type: 'span', text: '4. Call the National Gas Emergency Service on 0800 111 999. Once the immediate emergency is secured, contact BMV Plumbing for the follow-up leak location and piping repairs.' }]
      }
    ]
  }
}

export async function generateStaticParams() {
  const posts = await getAllInsightsSummaries().catch(() => [])
  const liveSlugs = posts.map((p) => ({ slug: p.slug }))
  const mockSlugs = Object.keys(MOCK_POSTS).map((slug) => ({ slug }))
  return [...liveSlugs, ...mockSlugs]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post = await getInsightBySlug(slug).catch(() => null)
  if (!post && MOCK_POSTS[slug]) {
    post = MOCK_POSTS[slug] as any
  }
  if (!post) return {}

  return {
    title: post.title,
    description: post.summary,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let post = await getInsightBySlug(slug).catch(() => null)
  if (!post && MOCK_POSTS[slug]) {
    post = MOCK_POSTS[slug] as any
  }

  if (!post) {
    notFound()
  }

  const breadcrumbsTrail = [
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Schema */}
      {blogPostingSchema({
        url: `${siteConfig.url.production}/blog/${slug}`,
        headline: post.title,
        description: post.summary || '',
        datePublished: post.publishedAt || '',
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
                  href="/blog"
                  className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-secondary hover:underline"
                >
                  <ChevronLeft className="h-4 w-4" /> Back to Blog
                </Link>
                <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl leading-tight">
                  {post.title}
                </h1>
                {post.publishedAt && (
                  <time dateTime={post.publishedAt} className="mt-2 block text-xs text-muted">
                    Published: {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </time>
                )}
              </div>

              {/* PortableText body content */}
              <article className="prose max-w-none text-slate-700 leading-relaxed space-y-6">
                {post.body ? (
                  <PortableText value={post.body} />
                ) : (
                  <p>{post.summary}</p>
                )}
              </article>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {post.author && (
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">About the Author</h3>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold text-primary">{post.author.name}</div>
                      <div className="text-xs text-muted">{post.author.jobTitle}</div>
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
