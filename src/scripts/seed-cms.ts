/**
 * Direct-SQL seed script — updates the live Turso/LibSQL database.
 *
 * Run with:  npm run seed:cms
 *
 * Uses the same @libsql/client the project already has as a dependency.
 * Safe to run multiple times (idempotent UPDATE + upsert logic).
 */
import { createClient } from '@libsql/client'
import * as dotenv from 'dotenv'

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN

if (!DATABASE_URL) {
  console.error('❌  DATABASE_URL is not set in .env')
  process.exit(1)
}

const client = createClient({
  url: DATABASE_URL,
  ...(DATABASE_AUTH_TOKEN ? { authToken: DATABASE_AUTH_TOKEN } : {}),
})

const PROMISE_BODY = [
  'Aroha represents a graceful rise into a life of comfort, security, and companionship.',
  'The **Park by Aroha offers 150 premium, tech-enabled senior residences** near **Medchal** in a serene setting.',
  'Set across **two acres**, it delivers modern, independent living within beautifully landscaped surroundings.',
].join('\n\n')

const HERO_META = '150 Premium Residences · Medchal · Hyderabad · Launching Soon'

console.log('⏳  Connecting to database…')

// Update flat fields on site_settings
await client.execute({
  sql: `
    UPDATE site_settings
    SET
      hero_meta    = :heroMeta,
      promise_body = :promiseBody
  `,
  args: {
    heroMeta: HERO_META,
    promiseBody: PROMISE_BODY,
  },
})

// Fix promise stat: 147 → 150
await client.execute({
  sql: `UPDATE site_settings_promise_stats SET value = '150' WHERE value = '147'`,
  args: [],
})

console.log('✅  site-settings updated in database.')
console.log('    hero_meta  →', HERO_META)
console.log('    promiseBody paragraph count:', PROMISE_BODY.split('\n\n').length)
