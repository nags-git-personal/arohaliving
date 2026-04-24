'use client'

import React, { useState } from 'react'

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

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setStatus(null)
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus({ type: 'success', message: 'Thank you. Our team will be in touch within 24 hours.' })
      setForm({ name: '', phone: '', email: '', interest: 'general', message: '' })
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="form-grid" onSubmit={onSubmit}>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="ef-name">Full Name *</label>
          <input id="ef-name" required value={form.name} onChange={update('name')} />
        </div>
        <div className="form-field">
          <label htmlFor="ef-phone">Phone *</label>
          <input id="ef-phone" required type="tel" value={form.phone} onChange={update('phone')} />
        </div>
      </div>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="ef-email">Email</label>
          <input id="ef-email" type="email" value={form.email} onChange={update('email')} />
        </div>
        <div className="form-field">
          <label htmlFor="ef-interest">I&apos;m interested in</label>
          <select id="ef-interest" value={form.interest} onChange={update('interest')}>
            <option value="general">General Enquiry</option>
            <option value="independent">Independent Living</option>
            <option value="assisted">Assisted Living</option>
            <option value="memory">Memory Care</option>
            <option value="visit">Schedule a Visit</option>
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="ef-message">Message</label>
        <textarea id="ef-message" rows={4} value={form.message} onChange={update('message')} />
      </div>
      <button className="btn" type="submit" disabled={submitting} style={{ justifySelf: 'start', marginTop: 8 }}>
        {submitting ? 'Sending…' : 'Submit Enquiry'}
      </button>
      {status && (
        <div className={`form-msg ${status.type === 'error' ? 'error' : ''}`}>{status.message}</div>
      )}
    </form>
  )
}
