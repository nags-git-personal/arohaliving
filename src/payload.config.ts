import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Amenities } from './collections/Amenities'
import { Testimonials } from './collections/Testimonials'
import { FAQ } from './collections/FAQ'
import { Enquiries } from './collections/Enquiries'
import { Posts } from './collections/Posts'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    suppressHydrationWarning: true,
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: '— Aroha Living',
    },
  },
  collections: [Users, Media, Amenities, Testimonials, FAQ, Posts, Enquiries],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
      authToken: process.env.DATABASE_AUTH_TOKEN,
    },
  }),
  sharp,
  plugins: [],
})
