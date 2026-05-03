import type { Metadata } from 'next'
import React from 'react'
import { SiteChrome } from '@/components/SiteChrome'
import { getMediaUrl, getSettings } from '@/lib/payload-helpers'
import './styles.css'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSettings()
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
  const s = (settings || {}) as {
    seoTitle?: string
    seoDescription?: string
    seoKeywords?: string
    ogTitle?: string
    ogDescription?: string
    ogImage?: unknown
    ogImageUrl?: string
  }

  const imageUrl = getMediaUrl(s.ogImage) || s.ogImageUrl || '/media/site/image%201.png'

  return {
    metadataBase: new URL(serverURL),
    title: s.seoTitle || 'Aroha Living — Premium Senior Living Community',
    description:
      s.seoDescription ||
      'A sanctuary of wellness, care and vibrant community life. Thoughtfully designed residences, 24/7 medical care, gourmet dining and a dignified retirement experience.',
    keywords:
      s.seoKeywords ||
      'senior living, retirement home, assisted living, independent living, memory care, Aroha Living',
    openGraph: {
      title: s.ogTitle || 'Aroha Living — Where every sunrise feels like a celebration',
      description:
        s.ogDescription ||
        'A premium senior living community blending warmth of home, resort-grade amenities and 24/7 care.',
      type: 'website',
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteChrome>
          <main>{children}</main>
        </SiteChrome>
      </body>
    </html>
  )
}
