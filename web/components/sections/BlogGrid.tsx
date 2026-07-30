'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, BookOpen } from 'lucide-react'

type Post = {
  _id: string
  title: string
  slug: string
  summary?: string
  publishedAt?: string
  imageUrl?: string
}

export function BlogGrid({ posts, fallbacks }: { posts: Post[], fallbacks: string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // Map slugs to categories
  const getCategory = (slug: string) => {
    if (slug.includes('boiler')) return 'Boilers'
    if (slug.includes('landlord')) return 'Landlords'
    if (slug.includes('gas') || slug.includes('smell')) return 'Safety'
    return 'General'
  }

  // Categories list
  const categories = ['All', 'Boilers', 'Landlords', 'Safety']

  // Filter posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const categoryMatches = selectedCategory === 'All' || getCategory(p.slug) === selectedCategory
      const searchMatches = 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        (p.summary || '').toLowerCase().includes(searchQuery.toLowerCase())
      return categoryMatches && searchMatches
    })
  }, [posts, selectedCategory, searchQuery])

  return (
    <div className="space-y-8">
      {/* Search and Category Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center pb-6 border-b border-slate-100">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-medium text-slate-700 bg-white"
          />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-secondary text-white shadow-xs' 
                    : 'bg-slate-50 border border-slate-100 text-slate-650 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid Display */}
      {filteredPosts.length === 0 ? (
        <div className="rounded-2xl border border-border p-12 bg-card text-center space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <BookOpen className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-primary font-serif">No Articles Found</h3>
          <p className="text-sm text-slate-650 max-w-sm mx-auto leading-relaxed font-semibold">
            We couldn't find any articles matching your search or category filter. Try clearing your inputs or check another category!
          </p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2">
          {filteredPosts.map((p, idx) => {
            const cat = getCategory(p.slug)
            return (
              <Link
                key={p._id}
                href={`/blog/${p.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border/85 p-0 bg-card overflow-hidden hover:border-slate-350 hover:shadow-md hover:-translate-y-1.5 transition-all duration-300 ease-out"
              >
                <div>
                  {/* Image Preview Container */}
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-border/60 relative">
                    <img
                      src={p.imageUrl || fallbacks[idx % 3]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    
                    {/* Category Overlay Tag */}
                    <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1.5 rounded-md border border-white/10">
                      {cat}
                    </span>
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
                    <h2 className="text-xl font-serif font-normal text-slate-900 group-hover:text-secondary transition-colors line-clamp-2 leading-snug">
                      {p.title}
                    </h2>
                    {p.summary && (
                      <p className="text-sm text-slate-650 leading-relaxed line-clamp-3 pt-1 font-semibold">
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
            )
          })}
        </div>
      )}
    </div>
  )
}
