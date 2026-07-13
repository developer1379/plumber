import Link from 'next/link'
import { sanityClient } from '@/lib/sanity/client'
import { MapPin, ArrowRight } from 'lucide-react'

// ─────────────────────────────────────────────────────────
// RelatedAreas (renders nearby areas covered, excluding current)
// ─────────────────────────────────────────────────────────

type Area = {
  _id: string
  title: string
  slug: string
  county?: string
  distanceFromHqMiles?: number
}

export async function RelatedAreas({ excludeSlug }: { excludeSlug?: string } = {}) {
  // Query top areas, ordered by distance
  const query = `*[_type == "area" ${excludeSlug ? '&& slug.current != $exclude' : ''}] | order(distanceFromHqMiles asc)[0...4]{
    _id,
    title,
    "slug": slug.current,
    county,
    distanceFromHqMiles
  }`

  const items = await sanityClient.fetch<Area[]>(query, excludeSlug ? { exclude: excludeSlug } : {}).catch(() => [])

  if (!items || items.length === 0) return null

  return (
    <section className="mt-16 border-t border-border pt-12">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
        <MapPin className="h-4 w-4" />
        <span>Areas We Cover</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">
        Need a local engineer in your area?
      </h2>
      <p className="mt-2 text-muted text-sm max-w-2xl">
        Based in Gillingham, we provide fast response times for heating and plumbing emergencies across North Dorset, South Wiltshire, and Somerset.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {items.map((a) => (
          <Link
            key={a._id}
            href={`/areas/${a.slug}`}
            className="group block rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition-all duration-200"
          >
            <div className="text-lg font-bold text-primary group-hover:text-secondary transition-colors">
              {a.title}
            </div>
            <div className="mt-1 text-xs text-muted">
              {a.county || 'Dorset'}
              {a.distanceFromHqMiles !== undefined && ` · ~${a.distanceFromHqMiles} road miles`}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// RelatedServices (renders other trade services, excluding current)
// ─────────────────────────────────────────────────────────

type Service = {
  _id: string
  title: string
  slug: string
  summary?: string
}

export async function RelatedServices({ excludeSlug }: { excludeSlug?: string } = {}) {
  const query = `*[_type == "service" ${excludeSlug ? '&& slug.current != $exclude' : ''}] | order(order asc, title asc)[0...4]{
    _id,
    title,
    "slug": slug.current,
    summary
  }`

  const items = await sanityClient.fetch<Service[]>(query, excludeSlug ? { exclude: excludeSlug } : {}).catch(() => [])

  if (!items || items.length === 0) return null

  return (
    <section className="mt-16 border-t border-border pt-12">
      <span className="text-xs font-bold uppercase tracking-wider text-secondary">Related Services</span>
      <h2 className="mt-3 text-2xl font-bold text-primary md:text-3xl">Other services you might need</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s) => (
          <Link
            key={s._id}
            href={`/services/${s.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border p-6 hover:border-primary hover:shadow-lg transition-all duration-200"
          >
            <div>
              <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                {s.title}
              </h3>
              {s.summary && (
                <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3">
                  {s.summary}
                </p>
              )}
            </div>
            <span className="mt-6 flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-secondary">
              View service details <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────
// RelatedPosts (renders latest guides & insights, excluding current)
// ─────────────────────────────────────────────────────────

type Post = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt?: string
  imageUrl?: string
  _type: 'post'
}

export async function RelatedPosts({ excludeSlug }: { excludeSlug?: string } = {}) {
  // Query both insights (posts) and guides, ordered by creation/publish date
  const query = `*[_type in ["post"] ${excludeSlug ? '&& slug.current != $exclude' : ''} && status == "published"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    "imageUrl": mainImage.asset->url,
    _type
  }`

  let items = await sanityClient.fetch<Post[]>(query, excludeSlug ? { exclude: excludeSlug } : {}).catch(() => [])

  if (!items || items.length === 0) {
    items = [
      {
        _id: 'mock-1',
        title: 'Why Your Boiler Makes Strange Noises (And When It\'s Serious)',
        slug: 'boiler-making-noises-when-to-worry',
        excerpt: 'Rob Holton talks through the common noises (kettling, banging, gurgling, whistling) and what each usually means, ending with a clear call trigger for the genuinely urgent ones.',
        publishedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        _type: 'post'
      },
      {
        _id: 'mock-2',
        title: 'What Changes for Landlords: Gas Safety Rules Explained',
        slug: 'landlord-gas-safety-rules-explained',
        excerpt: 'A plain-English walkthrough of landlord gas safety obligations (12-month renewal, 28-day tenant disclosure, no grace period), written for local property owners.',
        publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
        _type: 'post'
      },
      {
        _id: 'mock-3',
        title: 'What To Do If You Smell Gas In Your Home',
        slug: 'what-to-do-if-you-smell-gas',
        excerpt: 'A safety-first, step-by-step guide on what to do if you suspect a gas leak. Turn off the meter, ventilate, call the National Gas Emergency Service, then contact BMV Plumbing.',
        publishedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
        _type: 'post'
      }
    ]
  }

  // Beautiful stock plumbing visual fallbacks in case mainImage is missing from CMS
  const fallbacks = [
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  ]

  const getHref = (p: Post) => {
    return `/insights/${p.slug}`
  }

  return (
    <section className="mt-20 border-t border-slate-100 pt-16">
      
      {/* Section Header Row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
        <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] text-primary font-normal leading-[1.05] tracking-tight">
          Practical <span className="text-[#b91c1c]">heating &amp; plumbing advice.</span>
        </h2>
        <Link 
          href="/insights" 
          className="text-[13px] font-semibold uppercase tracking-[0.14em] text-primary hover:text-[#b91c1c] transition-colors border-b border-primary hover:border-[#b91c1c] pb-1 whitespace-nowrap self-start md:self-auto"
        >
          All Articles &rarr;
        </Link>
      </div>

      {/* Grid of Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, idx) => (
          <Link
            key={p._id}
            href={getHref(p)}
            className="group flex flex-col border border-slate-200 bg-white rounded-[2px] hover:border-slate-800 transition-colors duration-300 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
          >
            {/* Post Image Container */}
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-150 border-b border-slate-100">
              <img 
                src={p.imageUrl || fallbacks[idx % 3]} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Post Details Wrapper */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                {/* Published Date */}
                {p.publishedAt && (
                  <time dateTime={p.publishedAt} className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a16207]">
                    {new Date(p.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    }).toUpperCase()}
                  </time>
                )}

                {/* Heading */}
                <h3 className="font-serif text-[18px] md:text-[20px] font-normal text-primary group-hover:text-[#b91c1c] transition-colors mt-3 leading-snug line-clamp-2">
                  {p.title}
                </h3>

                {/* Excerpt */}
                {p.excerpt && (
                  <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500 line-clamp-3">
                    {p.excerpt}
                  </p>
                )}
              </div>

              {/* Read trigger link */}
              <span className="text-[12px] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#b91c1c] transition-colors mt-5 inline-block">
                Read &rarr;
              </span>
            </div>

          </Link>
        ))}
      </div>

    </section>
  )
}
