import { Header } from '@/components/chrome/Header'
import { Footer } from '@/components/chrome/Footer'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { getAllInsightsSummaries } from '@/lib/sanity/queries'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { BlogGrid } from '@/components/sections/BlogGrid'

export const metadata = {
  title: 'Plumbing Tips & Expert Advice Blog',
  description: 'Explore expert plumbing tips, boiler maintenance advice, energy-saving guides, and home care insights from our experienced plumbing professionals.',
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogPage() {
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
    '/boiler-advice.webp',
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
    '/plumber-hero.webp'
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div aria-hidden="true" className="h-[92px] md:h-[100px] lg:h-[112px] block" />

      <main className="flex-1 py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs trail={[{ label: 'Blog' }]} />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Articles Column */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className="text-[13px] font-bold uppercase tracking-[0.08em] pl-[0.08em] text-secondary">Expert Resources</span>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl font-serif animate-fade-in">
                  Heating &amp; Plumbing Blog
                </h1>
                <p className="mt-6 text-lg text-slate-650 leading-relaxed font-medium">
                  Browse my collection of articles, tips, and safety guides to keep your home warm and your plumbing operating efficiently.
                </p>
              </div>

              <BlogGrid posts={posts} fallbacks={fallbacks} />
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
