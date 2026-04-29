import React from 'react'
import { Icon } from './Icon'
import { EnquiryForm } from './EnquiryForm'

type Props = {
  phone?: string
  email?: string
  address?: string
  whatsapp?: string
  eyebrow?: string
  title?: string
  intro?: string
  callLabel?: string
  emailLabel?: string
  whatsappLabel?: string
  visitLabel?: string
  hoursLabel?: string
  hoursValue?: string
  imageUrl?: string
}

export const Contact: React.FC<Props> = ({
  phone,
  email,
  address,
  whatsapp,
  eyebrow = 'Begin the Conversation',
  title = 'Visit us — experience it for yourself',
  intro = 'Words can only describe so much. Come spend an afternoon with us, share a meal, meet our residents, and feel the warmth of Aroha for yourself.',
  callLabel = 'Call Us',
  emailLabel = 'Email Us',
  whatsappLabel = 'WhatsApp',
  visitLabel = 'Visit Us',
  hoursLabel = 'Hours',
  hoursValue = 'Visits by appointment · 9am – 7pm daily',
  imageUrl = '/media/site/image6.png',
}) => {
  const waDigits = whatsapp?.replace(/[^\d+]/g, '').replace('+', '')

  return (
    <section className="section section-dark" id="contact">
      <div className="container">
        <div className="contact-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <div className="divider" />
          <p className="contact-intro">{intro}</p>
        </div>
        <div className="contact-grid">
          <div>
            {phone && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="phone" size={18} /></span>
                <div>
                  <div className="contact-info-label">{callLabel}</div>
                  <a className="contact-info-value" href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                </div>
              </div>
            )}
            {email && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="mail" size={18} /></span>
                <div>
                  <div className="contact-info-label">{emailLabel}</div>
                  <a className="contact-info-value" href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
            )}
            {whatsapp && waDigits && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="whatsapp" size={18} /></span>
                <div>
                  <div className="contact-info-label">{whatsappLabel}</div>
                  <a
                    className="contact-info-value"
                    href={`https://wa.me/${waDigits}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {whatsapp}
                  </a>
                </div>
              </div>
            )}
            {address && (
              <div className="contact-info-item">
                <span className="contact-icon"><Icon name="mapPin" size={18} /></span>
                <div>
                  <div className="contact-info-label">{visitLabel}</div>
                  <div className="contact-info-value contact-address">{address}</div>
                </div>
              </div>
            )}
            <div className="contact-info-item">
              <span className="contact-icon"><Icon name="star" size={18} /></span>
              <div>
                <div className="contact-info-label">{hoursLabel}</div>
                <div className="contact-info-value">{hoursValue}</div>
              </div>
            </div>
          </div>
          <div className="contact-form-column">
            {imageUrl ? (
              <div className="contact-image-card">
                <img className="contact-image" src={imageUrl} alt={title} />
              </div>
            ) : null}
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  )
}
