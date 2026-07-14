import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.production

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/faqs',
    '/privacy-policy',
    '/terms-conditions',
    '/reviews',
    '/services',
    '/insights',
    '/guides',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  const services = [
    'boiler-servicing-installation-repairs',
    'landlord-safety-checks',
    'gas-installations',
    'emergency-callouts',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const areas = [
    'shaftesbury',
    'wincanton',
    'sturminster-newton',
  ].map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const guides = [
    'complete-guide-boiler-servicing',
    'complete-guide-landlord-gas-safety-certificate-cp12',
    'what-to-do-plumbing-gas-emergency',
  ].map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const insights = [
    'boiler-making-noises-when-to-worry',
    'landlord-gas-safety-rules-explained',
    'what-to-do-if-you-smell-gas',
  ].map((slug) => ({
    url: `${baseUrl}/insights/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...services, ...areas, ...guides, ...insights]
}
