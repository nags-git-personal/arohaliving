'use client'

import React, { useState } from 'react'

type FaqItem = {
  id?: string | number
  question: string
  answer: string
}

type Props = { items?: FaqItem[] }

const fallback: FaqItem[] = [
  {
    question: 'Who is Aroha Living designed for?',
    answer: 'Aroha Living welcomes active seniors (typically 55+) as well as those who benefit from assisted living or memory care. Our residences are designed to support independent, dignified living with the reassurance of round-the-clock care when needed.',
  },
  {
    question: 'Is there a doctor on site at all times?',
    answer: 'Yes. A resident doctor, trained nurses and a rapid response team are available 24/7. We also have tie-ups with leading multi-speciality hospitals for specialised care and emergencies.',
  },
  {
    question: 'What is included in the monthly fee?',
    answer: 'The monthly community fee covers all meals, housekeeping, utilities, maintenance, wellness programs, transport, 24/7 security, doctor on call, and access to all community amenities. Specialised medical care is billed separately.',
  },
  {
    question: 'Can my family stay over when visiting?',
    answer: 'Absolutely. Our guest suites can be booked for family members who wish to stay over. We welcome grandchildren, friends and family — Aroha is always open to the people you love.',
  },
  {
    question: 'Are pets allowed?',
    answer: 'Yes, we are a pet-friendly community. Small, well-behaved pets are warmly welcomed after a brief review. We even have a landscaped pet walk area.',
  },
  {
    question: 'How do I schedule a visit?',
    answer: 'Simply fill in the enquiry form on this page, call us, or WhatsApp us. Our lifestyle consultant will arrange a guided tour and a complimentary meal so you can experience community life first-hand.',
  },
]

export const FaqAccordion: React.FC<Props> = ({ items }) => {
  const data = items && items.length > 0 ? items : fallback
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="faq-layout">
          <aside className="faq-heading-panel">
            <span className="eyebrow">Frequently Asked</span>
            <h2>Your questions, answered with care</h2>
            <div className="divider" />
            <p className="faq-intro">
              Choosing the right home is a thoughtful journey. Here are the answers families
              most often seek — and we welcome every other question, too.
            </p>
            <a href="#contact" className="faq-cta">
              Still curious? Talk to a consultant <span aria-hidden>→</span>
            </a>
          </aside>
          <div className="faq-list">
            {data.map((item, i) => (
              <div key={item.id ?? i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  aria-expanded={openIdx === i ? 'true' : 'false'}
                >
                  <span className="faq-marker" aria-hidden>Q.</span>
                  <span className="faq-q-text">{item.question}</span>
                  <span className="faq-chevron" aria-hidden>▾</span>
                </button>
                <div className="faq-a">
                  <span className="faq-marker faq-marker-a" aria-hidden>A.</span>
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
