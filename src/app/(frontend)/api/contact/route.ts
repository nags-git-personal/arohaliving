/* eslint-disable @typescript-eslint/no-explicit-any */
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const ALLOWED_INTEREST = ['independent', 'assisted', 'memory', 'visit', 'general', 'other'] as const
type Interest = (typeof ALLOWED_INTEREST)[number]

const NAME_MAX = 50
const PHONE_MAX = 20
const MESSAGE_MAX = 1000

type Body = {
  name?: unknown
  phone?: unknown
  email?: unknown
  interest?: unknown
  message?: unknown
}

const trim = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

export async function POST(req: Request) {
  let body: Body
  try {
    body = (await req.json()) as Body
  } catch {
    return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const name = trim(body.name)
  const phone = trim(body.phone)
  const email = trim(body.email)
  const message = trim(body.message)
  const interestRaw = trim(body.interest)
  const interest: Interest = (ALLOWED_INTEREST as readonly string[]).includes(interestRaw)
    ? (interestRaw as Interest)
    : 'general'

  if (!name) return Response.json({ error: 'Name is required' }, { status: 400 })
  if (name.length > NAME_MAX) {
    return Response.json({ error: `Name must be ${NAME_MAX} characters or fewer` }, { status: 400 })
  }
  if (!phone) return Response.json({ error: 'Phone is required' }, { status: 400 })
  if (phone.length > PHONE_MAX) {
    return Response.json({ error: `Phone must be ${PHONE_MAX} characters or fewer` }, { status: 400 })
  }
  const phoneDigits = phone.replace(/[^0-9]/g, '')
  if (phoneDigits.length < 7 || !/^[+]?[0-9\s\-()]+$/.test(phone)) {
    return Response.json({ error: 'Please provide a valid phone number' }, { status: 400 })
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide a valid email address' }, { status: 400 })
  }
  if (message.length > MESSAGE_MAX) {
    return Response.json({ error: `Message must be ${MESSAGE_MAX} characters or fewer` }, { status: 400 })
  }

  try {
    const payload = await getPayload({ config: configPromise })
    const data: Record<string, unknown> = { name, phone, interest, status: 'new' }
    if (email) data.email = email
    if (message) data.message = message

    await (payload.create as any)({ collection: 'enquiries', data })

    return Response.json({ ok: true }, { status: 201 })
  } catch (err) {
    const msg = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/contact] failed to save enquiry:', msg)
    return Response.json({ error: 'Failed to save enquiry' }, { status: 500 })
  }
}
