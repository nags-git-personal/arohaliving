import React from 'react'
import { Icon } from './Icon'
import { EnquiryForm } from './EnquiryForm'

type Props = {
  phone?: string
  email?: string
  address?: string
}

export const Contact: React.FC<Props> = ({ phone, email, address }) => {
  return (
    <section className="section section-dark" id="contact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span className="eyebrow">Begin the Conversation</span>
          <h2>Visit us — experience it for yourself</h2>
          <div className="divider" style={{ margin: '20px auto' }} />
          <p style={{ maxWidth: 640, margin: '0 auto', opacity: 0.85 }}>
            Words can only describe so much. Come spend an afternoon with us, share a meal,
            meet our residents, and feel the warmth of Aroha for yourself.
          </p>
        </div>
        <div className="contact-grid">
          <div>
            {phone && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="phone" size={18} /></span>
                <div>
                  <div className="contact-info-label">Call Us</div>
                  <a className="contact-info-value" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </div>
              </div>
            )}
            {email && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="mail" size={18} /></span>
                <div>
                  <div className="contact-info-label">Email Us</div>
                  <a className="contact-info-value" href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            )}
            {address && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="mapPin" size={18} /></span>
                <div>
                  <div className="contact-info-label">Visit Us</div>
                  <div className="contact-info-value" style={{ whiteSpace: 'pre-line' }}>{address}</div>
                </div>
              </div>
            )}
            <div className="contact-info-item">
              <span className="contact-icon"><Icon name="star" size={18} /></span>
              <div>
                <div className="contact-info-label">Hours</div>
                <div className="contact-info-value">Visits by appointment · 9am – 7pm daily</div>
              </div>
            </div>
          </div>
          <div>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
