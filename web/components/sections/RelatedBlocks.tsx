'use client'

import { useState, useEffect } from 'react'
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

const defaultAreas: Area[] = [
  { _id: 'a1', title: 'Gillingham', slug: 'gillingham', county: 'Dorset', distanceFromHqMiles: 0 },
  { _id: 'a2', title: 'Shaftesbury', slug: 'shaftesbury', county: 'Dorset', distanceFromHqMiles: 5 },
  { _id: 'a3', title: 'Wincanton', slug: 'wincanton', county: 'Somerset', distanceFromHqMiles: 7 },
  { _id: 'a4', title: 'Sturminster Newton', slug: 'sturminster-newton', county: 'Dorset', distanceFromHqMiles: 9 },
]

export function RelatedAreas({ excludeSlug }: { excludeSlug?: string } = {}) {
  const [items, setItems] = useState<Area[]>(defaultAreas)

  useEffect(() => {
    const query = `*[_type == "area" ${excludeSlug ? '&& slug.current != $exclude' : ''}] | order(distanceFromHqMiles asc)[0...4]{
      _id,
      title,
      "slug": slug.current,
      county,
      distanceFromHqMiles
    }`

    sanityClient
      .fetch<Area[]>(query, excludeSlug ? { exclude: excludeSlug } : {})
      .then((res) => {
        if (res && res.length > 0) setItems(res)
      })
      .catch(() => {})
  }, [excludeSlug])

  const filteredItems = excludeSlug ? items.filter(i => i.slug !== excludeSlug) : items

  if (!filteredItems || filteredItems.length === 0) return null

  return (
    <section className="mt-16 border-t border-slate-100 pt-12">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-secondary">
        <MapPin className="h-4 w-4 text-[#ff6b00]" />
        <span>Areas We Cover</span>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
        Need a local engineer in your area?
      </h2>
      <p className="mt-2 text-slate-500 text-sm max-w-2xl">
        Based in Gillingham, we provide fast response times for heating and plumbing emergencies across North Dorset, South Wiltshire, and Somerset.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {filteredItems.map((a) => (
          <Link
            key={a._id}
            href={`/areas/${a.slug}`}
            className="group block rounded-xl border border-slate-200 p-5 hover:border-slate-800 hover:shadow-md transition-all duration-200 bg-white"
          >
            <div className="text-base font-bold text-slate-900 group-hover:text-[#ff6b00] transition-colors">
              {a.title}
            </div>
            <div className="mt-1 text-xs text-slate-400">
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

const defaultServices: Service[] = [
  { _id: 's1', title: 'Boiler Servicing & Repairs', slug: 'boiler-servicing-installation-repairs', summary: 'Annual safety checks, diagnostic maintenance, and emergency boiler repairs.' },
  { _id: 's2', title: 'Landlord Safety Checks', slug: 'landlord-safety-checks', summary: 'Gas safety inspections, appliance testing, and official CP12 certificates.' },
  { _id: 's3', title: 'Gas Installations', slug: 'gas-installations', summary: 'New boiler upgrades, cookers, hobs, and system gas pipework.' },
  { _id: 's4', title: 'Emergency Callouts', slug: 'emergency-callouts', summary: 'Rapid, same-day local response for burst pipes and heating failures.' },
]

export function RelatedServices({ excludeSlug }: { excludeSlug?: string } = {}) {
  const [items, setItems] = useState<Service[]>(defaultServices)

  useEffect(() => {
    const query = `*[_type == "service" ${excludeSlug ? '&& slug.current != $exclude' : ''}] | order(order asc, title asc)[0...4]{
      _id,
      title,
      "slug": slug.current,
      summary
    }`

    sanityClient
      .fetch<Service[]>(query, excludeSlug ? { exclude: excludeSlug } : {})
      .then((res) => {
        if (res && res.length > 0) setItems(res)
      })
      .catch(() => {})
  }, [excludeSlug])

  const filteredItems = excludeSlug ? items.filter(s => s.slug !== excludeSlug) : items

  if (!filteredItems || filteredItems.length === 0) return null

  return (
    <section className="mt-16 border-t border-slate-100 pt-12">
      <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">Related Services</span>
      <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">Other services you might need</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((s) => (
          <Link
            key={s._id}
            href={`/services/${s.slug}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-100 p-6 hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 transition-all duration-300 bg-white min-h-[290px] shadow-xs"
          >
            <div className="space-y-4">
              {/* Clean Icon */}
              <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={
                    s.slug === 'boiler-servicing-installation-repairs' ? '/icons/boiler.png' :
                    s.slug === 'landlord-safety-checks' ? '/icons/usp_gassafe.png' :
                    s.slug === 'gas-installations' ? '/icons/installations.png' :
                    s.slug === 'emergency-callouts' ? '/icons/emergency.png' : '/icons/plumbing.png'
                  } 
                  alt={s.title} 
                  className="w-10 h-10 object-contain"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-[17px] font-black text-slate-850 group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
                  {s.title}
                </h3>
                {s.summary && (
                  <p className="text-[12.5px] text-slate-450 font-semibold leading-relaxed line-clamp-3">
                    {s.summary}
                  </p>
                )}
              </div>
            </div>

            <span className="inline-flex items-center gap-1 text-[13px] font-bold text-blue-600 group-hover:text-blue-800 transition-colors mt-4">
              <span>View details &rarr;</span>
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

const defaultPosts: Post[] = [
  {
    _id: 'mock-1',
    title: 'Why Your Boiler Makes Strange Noises (And When It\'s Serious)',
    slug: 'boiler-making-noises-when-to-worry',
    excerpt: 'Rob Holton talks through the common noises (kettling, banging, gurgling, whistling) and what each usually means, ending with a clear call trigger for the genuinely urgent ones.',
    publishedAt: '2026-07-19T12:00:00.000Z',
    _type: 'post'
  },
  {
    _id: 'mock-2',
    title: 'What Changes for Landlords: Gas Safety Rules Explained',
    slug: 'landlord-gas-safety-rules-explained',
    excerpt: 'A plain-English walkthrough of landlord gas safety obligations (12-month renewal, 28-day tenant disclosure, no grace period), written for local property owners.',
    publishedAt: '2026-07-18T12:00:00.000Z',
    _type: 'post'
  },
  {
    _id: 'mock-3',
    title: 'What To Do If You Smell Gas In Your Home',
    slug: 'what-to-do-if-you-smell-gas',
    excerpt: 'A safety-first, step-by-step guide on what to do if you suspect a gas leak. Turn off the meter, ventilate, call the National Gas Emergency Service, then contact BMV Plumbing.',
    publishedAt: '2026-07-17T12:00:00.000Z',
    _type: 'post'
  }
]

export function RelatedPosts({ excludeSlug }: { excludeSlug?: string } = {}) {
  const [items, setItems] = useState<Post[]>(defaultPosts)

  useEffect(() => {
    const query = `*[_type in ["post"] ${excludeSlug ? '&& slug.current != $exclude' : ''} && status == "published"] | order(publishedAt desc)[0...3]{
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      _type
    }`

    sanityClient
      .fetch<Post[]>(query, excludeSlug ? { exclude: excludeSlug } : {})
      .then((res) => {
        if (res && res.length > 0) setItems(res)
      })
      .catch(() => {})
  }, [excludeSlug])

  const fallbacks = [
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80'
  ]

  const filteredItems = excludeSlug ? items.filter(p => p.slug !== excludeSlug) : items

  if (!filteredItems || filteredItems.length === 0) return null

  return (
    <section className="mt-20 border-t border-slate-100 pt-16">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 pb-4 border-b border-slate-100">
        <h2 className="font-serif text-[28px] md:text-[32px] lg:text-[36px] text-slate-900 font-normal leading-[1.05] tracking-tight">
          Practical <span className="text-[#ff6b00]">heating &amp; plumbing advice.</span>
        </h2>
        <Link 
          href="/insights" 
          className="text-[13px] font-semibold uppercase tracking-[0.06em] text-slate-900 hover:text-[#ff6b00] transition-colors border-b border-slate-900 hover:border-[#ff6b00] pb-1 whitespace-nowrap self-start md:self-auto"
        >
          All Articles &rarr;
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((p, idx) => (
          <Link
            key={p._id}
            href={`/insights/${p.slug}`}
            className="group flex flex-col border border-slate-200 bg-white rounded-xl hover:border-slate-800 transition-colors duration-300 overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-slate-100 border-b border-slate-100">
              <img 
                src={p.imageUrl || fallbacks[idx % 3]} 
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                {p.publishedAt && (
                  <time dateTime={p.publishedAt} className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#a16207]">
                    {new Date(p.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    }).toUpperCase()}
                  </time>
                )}

                <h3 className="font-serif text-[18px] md:text-[20px] font-normal text-slate-900 group-hover:text-[#ff6b00] transition-colors mt-3 leading-snug line-clamp-2">
                  {p.title}
                </h3>

                {p.excerpt && (
                  <p className="mt-2.5 text-[13px] leading-relaxed text-slate-500 line-clamp-3">
                    {p.excerpt}
                  </p>
                )}
              </div>

              <span className="text-[12px] font-bold uppercase tracking-wider text-slate-800 group-hover:text-[#ff6b00] transition-colors mt-5 inline-block">
                Read &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
