import React from 'react'
import { SiteChrome } from '@/components/SiteChrome'
import './styles.css'

export const metadata = {
  title: 'Aroha Living — Premium Senior Living Community',
  description:
    'A sanctuary of wellness, care and vibrant community life. Thoughtfully designed residences, 24/7 medical care, gourmet dining and a dignified retirement experience.',
  keywords: 'senior living, retirement home, assisted living, independent living, memory care, Aroha Living',
  openGraph: {
    title: 'Aroha Living — Where every sunrise feels like a celebration',
    description:
      'A premium senior living community blending warmth of home, resort-grade amenities and 24/7 care.',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteChrome>
          <main>{children}</main>
        </SiteChrome>
      </body>
    </html>
  )
}
