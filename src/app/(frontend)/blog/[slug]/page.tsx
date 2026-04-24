import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '@/lib/payload-helpers'
import { RichText } from '@payloadcms/richtext-lexical/react'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = (await getPostBySlug(slug)) as { title?: string; excerpt?: string } | null
  if (!post) return { title: 'Article — Aroha Living' }
  return {
    title: `${post.title ?? 'Article'} — Aroha Living`,
    description: post.excerpt ?? '',
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = (await getPostBySlug(slug)) as null | {
    title: string
    excerpt?: string
    category?: string
    publishedDate?: string
    content?: unknown
    featuredImage?: { url?: string } | string | null
  }
  if (!post) notFound()

  const img =
    typeof post.featuredImage === 'string'
      ? post.featuredImage
      : post.featuredImage && typeof post.featuredImage === 'object' && post.featuredImage.url
        ? post.featuredImage.url
        : 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1600&q=80'

  return (
    <>
      <header className="page-header">
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="breadcrumbs">
            <Link href="/blog">Insights</Link>
            {post.category && ` · ${post.category}`}
          </div>
          <h1 style={{ marginTop: 16 }}>{post.title}</h1>
          {post.publishedDate && (
            <p style={{ opacity: 0.7, fontSize: 14 }}>
              {new Date(post.publishedDate).toLocaleDateString('en-IN', {
                month: 'long', day: 'numeric', year: 'numeric',
              })}
            </p>
          )}
        </div>
      </header>
      <section className="section" style={{ background: 'var(--c-cream)', paddingTop: 0 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              height: 380,
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              marginTop: -60,
              marginBottom: 48,
              borderRadius: 2,
            }}
          />
          <div style={{ fontSize: 17, lineHeight: 1.8 }}>
            {post.excerpt && (
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontStyle: 'italic', color: 'var(--c-muted)', marginBottom: 32 }}>
                {post.excerpt}
              </p>
            )}
            {post.content ? (
              <RichText data={post.content as never} />
            ) : (
              <p>Full article coming soon.</p>
            )}
          </div>
          <hr style={{ border: 0, borderTop: '1px solid var(--c-border)', margin: '48px 0' }} />
          <Link href="/blog" className="btn btn-outline" style={{ color: 'var(--c-gold-dark)', borderColor: 'var(--c-gold-dark)' }}>
            ← All Insights
          </Link>
        </div>
      </section>
    </>
  )
}
