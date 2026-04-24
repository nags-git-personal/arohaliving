import React from 'react'
import Link from 'next/link'
import { getPosts } from '@/lib/payload-helpers'

export const metadata = {
  title: 'Insights & Stories — Aroha Living',
  description: 'Articles, stories and wisdom from the Aroha Living community.',
}

type Post = {
  id?: string | number
  title: string
  slug: string
  excerpt?: string | null
  category?: string | null
  publishedDate?: string | null
  featuredImage?: { url?: string | null } | string | null
}

const fallbackImage = 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80'

function imageUrl(p: Post): string {
  if (typeof p.featuredImage === 'string') return p.featuredImage
  if (p.featuredImage && typeof p.featuredImage === 'object' && p.featuredImage.url)
    return p.featuredImage.url
  return fallbackImage
}

export default async function BlogListPage() {
  const posts = (await getPosts(50)) as unknown as Post[]

  return (
    <>
      <header className="page-header">
        <div className="container">
          <div className="breadcrumbs">Insights</div>
          <h1 style={{ marginTop: 16 }}>Stories, ideas &amp; wisdom</h1>
          <p style={{ maxWidth: 680, margin: '16px auto 0', opacity: 0.85 }}>
            Reflections on wellness, family, community and the art of living fully in the golden years.
          </p>
        </div>
      </header>
      <section className="section" style={{ background: 'var(--c-cream)' }}>
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--c-muted)' }}>
              No articles yet. Check back soon.
            </div>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => (
                <article key={p.id ?? p.slug} className="blog-card">
                  <div className="blog-image" style={{ backgroundImage: `url(${imageUrl(p)})` }} />
                  <div className="blog-body">
                    <div className="blog-meta">
                      {p.category || 'Article'}
                      {p.publishedDate && ' · ' + new Date(p.publishedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <h3>{p.title}</h3>
                    <p>{p.excerpt}</p>
                    <Link href={`/blog/${p.slug}`} className="blog-read">
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
