import React from 'react'
import Link from 'next/link'

type Post = {
  id?: string | number
  title: string
  slug: string
  excerpt?: string | null
  category?: string | null
  publishedDate?: string | null
  featuredImage?: { url?: string | null } | string | null
}

type Props = { posts?: Post[] }

const fallback: Post[] = [
  {
    title: 'Gentle mornings — movement that honours the body',
    slug: 'gentle-exercises-70s',
    excerpt: 'A quiet walk, a few asanas at sunrise, a stretch before tea — the small rituals that keep body and spirit supple.',
    category: 'Wellness',
    publishedDate: new Date().toISOString(),
  },
  {
    title: 'The joy of shared afternoons',
    slug: 'science-of-community',
    excerpt: 'Laughter at the garden bench, a cup of chai with old friends — studies show connection is the real fountain of youth.',
    category: 'Community',
    publishedDate: new Date().toISOString(),
  },
  {
    title: 'A family conversation, held with care',
    slug: 'family-conversation-guide',
    excerpt: 'Choosing a new chapter together is never rushed. A gentle guide for families planning the move, with empathy at its heart.',
    category: 'Family',
    publishedDate: new Date().toISOString(),
  },
]

const images = [
  'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1585637071663-799845ad5212?auto=format&fit=crop&w=900&q=80',
]

function getImage(p: Post, i: number): string {
  if (typeof p.featuredImage === 'string') return p.featuredImage
  if (p.featuredImage && typeof p.featuredImage === 'object' && p.featuredImage.url)
    return p.featuredImage.url
  return images[i % images.length]
}

export const BlogPreview: React.FC<Props> = ({ posts }) => {
  const data = posts && posts.length > 0 ? posts.slice(0, 3) : fallback
  return (
    <section className="section journal-section" id="insights">
      <div className="container section-center">
        <span className="eyebrow">The Wisdom Journal</span>
        <h2>Wisdom for the golden years</h2>
        <div className="divider" />
        <blockquote className="journal-quote">
          <span aria-hidden>“</span>
          Every silver strand, every laugh line, every story told twice —
          these are the quiet gifts of a life richly lived.
        </blockquote>
        <div className="journal-grid">
          {data.map((p, i) => (
            <article key={p.id ?? p.slug} className="journal-card">
              <div className="journal-image" style={{ backgroundImage: `url(${getImage(p, i)})` }}>
                <span className="journal-tag">{p.category || 'Article'}</span>
              </div>
              <div className="journal-body">
                {p.publishedDate && (
                  <div className="journal-date">
                    {new Date(p.publishedDate).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                )}
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="journal-read">
                  Continue reading <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: 56 }}>
          <Link href="/blog" className="btn btn-outline" style={{ color: 'var(--c-gold-dark)', borderColor: 'var(--c-gold-dark)' }}>
            View all stories
          </Link>
        </div>
      </div>
    </section>
  )
}
