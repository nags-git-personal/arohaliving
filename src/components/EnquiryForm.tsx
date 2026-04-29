'use client'

import React, { useState } from 'react'

const NAME_MAX = 50
const MESSAGE_MAX = 1000
const PHONE_PATTERN = '[+]?[0-9\\s\\-()]{7,20}'

export const EnquiryForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'general',
    message: '',
  })

  const update = (k: keyof typeof form, max?: number) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const v = max ? e.target.value.slice(0, max) : e.target.value
      setForm({ ...form, [k]: v })
    }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = (await res.json().catch(() => null)) as { error?: string } | null
      if (!res.ok) throw new Error(json?.error || 'Failed')
      setStatus({ type: 'success', message: 'Thank you. Our team will be in touch within 24 hours.' })
      setForm({ name: '', phone: '', email: '', interest: 'general', message: '' })
    } catch (err) {
      const message =
        err instanceof Error && err.message && err.message !== 'Failed'
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      setStatus({ type: 'error', message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="form-grid" onSubmit={onSubmit} noValidate={false}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="ef-name">Full Name *</label>
          <input
            id="ef-name"
            required
            maxLength={NAME_MAX}
            minLength={2}
            autoComplete="name"
            value={form.name}
            onChange={update('name', NAME_MAX)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="ef-phone">Phone *</label>
          <input
            id="ef-phone"
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            pattern={PHONE_PATTERN}
            title="7–20 digits; spaces, dashes, parentheses and a leading + are allowed"
            value={form.phone}
            onChange={update('phone')}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="ef-email">Email</label>
          <input
            id="ef-email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={update('email')}
          />
        </div>
        <div className="form-field">
          <label htmlFor="ef-interest">I&apos;m interested in</label>
          <select id="ef-interest" value={form.interest} onChange={update('interest')}>
            <option value="general">General Enquiry</option>
            <option value="active-adult">Active Adult Community</option>
            <option value="residences">Residence Details</option>
            <option value="wellness">Wellness &amp; Medical Services</option>
            <option value="visit">Schedule a Visit</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="ef-message">
          Message <span className="form-counter">{form.message.length}/{MESSAGE_MAX}</span>
        </label>
        <textarea
          id="ef-message"
          rows={4}
          maxLength={MESSAGE_MAX}
          value={form.message}
          onChange={update('message', MESSAGE_MAX)}
        />
      </div>
      <button className="btn form-submit" type="submit" disabled={submitting}>
        {submitting ? 'Sending…' : 'Submit Enquiry'}
      </button>
      {status && (
        <div className={`form-msg ${status.type === 'error' ? 'error' : ''}`}>{status.message}</div>
      )}
    </form>
  )
}
