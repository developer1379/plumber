/**
 * GROQ queries used by the site. Shape your Sanity studio schemas to
 * match these field names (the bootstrap schemas already do).
 */

import { sanityClient } from '@/lib/sanity/client'
import type { PersonInput } from '@/lib/schema/jsonld'

// ───────── Person (owner) — global schema graph ─────────

const ownerPersonQuery = /* groq */ `
  *[_type == "author" && isOwner == true][0]{
    name,
    jobTitle,
    knowsAbout,
    "image": image.asset->url,
    bio
  }
`

export const getOwnerPerson = async (): Promise<PersonInput | null> => {
  const data = await sanityClient.fetch<PersonInput | null>(ownerPersonQuery)
  return data
}

// ───────── llms.txt summaries ─────────

export type AreaSummary = { title: string; slug: string; summary: string }
export type ServiceSummary = { title: string; slug: string; summary: string }
export type InsightsSummary = { _id: string; title: string; slug: string; summary: string; publishedAt?: string; imageUrl?: string }

export const getAllAreas = async (): Promise<AreaSummary[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "area"] | order(title asc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, intro)
    }
  `)

export const getAllServices = async (): Promise<ServiceSummary[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "service"] | order(order asc, title asc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, summary)
    }
  `)

export const getAllInsightsSummaries = async (): Promise<InsightsSummary[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "post" && status == "published"] | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, excerpt),
      publishedAt,
      "imageUrl": mainImage.asset->url
    }
  `)

// ───────── llms-full.txt full bodies ─────────

export type AreaFull = AreaSummary & { body?: any }
export type ServiceFull = ServiceSummary & { body?: any }
export type InsightsFull = InsightsSummary & { body?: any }
export type Faq = { question: string; answer: string }

export const getAllAreasFull = async (): Promise<AreaFull[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "area"] | order(title asc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, intro),
      body
    }
  `)

export const getAllServicesFull = async (): Promise<ServiceFull[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "service"] | order(order asc, title asc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, summary),
      body
    }
  `)

export const getAllInsightsFull = async (): Promise<InsightsFull[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "post" && status == "published"] | order(publishedAt desc){
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, excerpt),
      body
    }
  `)

export const getAllFaqs = async (): Promise<Faq[]> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "faq"] | order(order asc, _createdAt asc){
      question,
      answer
    }
  `)

export type InsightFull = InsightsSummary & {
  body?: any
  publishedAt?: string
  author?: {
    name: string
    jobTitle: string
  }
}

export const getInsightBySlug = async (slug: string): Promise<InsightFull | null> =>
  sanityClient.fetch(/* groq */ `
    *[_type == "post" && slug.current == $slug && status == "published"][0]{
      title,
      "slug": slug.current,
      "summary": coalesce(seo.description, excerpt),
      body,
      publishedAt,
      author->{
        name,
        jobTitle
      }
    }
  `, { slug })

