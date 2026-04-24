import { getPayload } from 'payload'
import config from '@/payload.config'

/* eslint-disable @typescript-eslint/no-explicit-any */
// The payload-types.ts is regenerated after the first successful run. Until then,
// we access collections/globals as loose types so builds don't fail when this
// file is edited before types are regenerated.

async function client() {
  return getPayload({ config: await config })
}

export async function getSettings() {
  try {
    const payload = await client()
    const settings = await (payload.findGlobal as any)({ slug: 'site-settings' })
    return settings as Record<string, unknown>
  } catch (err) {
    console.error('[getSettings] failed', err)
    return null
  }
}

export async function getAmenities() {
  try {
    const payload = await client()
    const res = await (payload.find as any)({
      collection: 'amenities',
      limit: 100,
      sort: 'order',
    })
    return res.docs as any[]
  } catch {
    return []
  }
}

export async function getTestimonials() {
  try {
    const payload = await client()
    const res = await (payload.find as any)({
      collection: 'testimonials',
      limit: 50,
    })
    return res.docs as any[]
  } catch {
    return []
  }
}

export async function getFaqs() {
  try {
    const payload = await client()
    const res = await (payload.find as any)({
      collection: 'faq',
      limit: 100,
      sort: 'order',
    })
    return res.docs as any[]
  } catch {
    return []
  }
}

export async function getPosts(limit = 20) {
  try {
    const payload = await client()
    const res = await (payload.find as any)({
      collection: 'posts',
      limit,
      sort: '-publishedDate',
      where: { status: { equals: 'published' } },
    })
    return res.docs as any[]
  } catch {
    return []
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const payload = await client()
    const res = await (payload.find as any)({
      collection: 'posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    return (res.docs[0] || null) as any
  } catch {
    return null
  }
}
