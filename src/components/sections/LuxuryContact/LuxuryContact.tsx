import { useEffect, useRef, useState } from 'react'
import '../../../styles/luxuryContact.css'

// ──────────────────────────────────────────
// WhatsApp helpers
// ──────────────────────────────────────────

const WHATSAPP_NUMBER = '201013556821'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

function openWhatsApp(message: string) {
  const encoded = encodeURIComponent(message)
  window.open(`${WHATSAPP_LINK}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}

function generateConsultationMessage(data: {
  name: string
  email: string
  phone: string
  propertyType: string
  budget: string
  message: string
}) {
  return [
    'Hello Homeverse,',
    '',
    'I would like to book a private consultation.',
    '',
    `Name:\n${data.name}`,
    '',
    `Email:\n${data.email}`,
    '',
    `Phone:\n${data.phone}`,
    '',
    `Property Type:\n${data.propertyType}`,
    '',
    `Budget:\n${data.budget || 'Not specified'}`,
    '',
    `Message:\n${data.message || 'Not specified'}`,
    '',
    'Please contact me as soon as possible.',
    '',
    'Thank you.',
  ].join('\n')
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const mapWrap = node.querySelector<HTMLElement>('.lc-map-wrap')
    const cardWrap = node.querySelector<HTMLElement>('.lc-card-wrap')
    const services = node.querySelectorAll<HTMLElement>('.lc-service-card')
    const cta = node.querySelector<HTMLElement>('.lc-cta')

    const elements = [mapWrap, cardWrap, cta, ...Array.from(services)].filter(
      (el): el is HTMLElement => el !== null
    )

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lc-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function LuxuryContact() {
  const sectionRef = useScrollReveal()

  // ── Form state ──────────────────────
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    budget: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target
    // Map kebab-case IDs to camelCase state keys
    const keyMap: Record<string, keyof typeof form> = {
      'lc-name': 'name',
      'lc-email': 'email',
      'lc-phone': 'phone',
      'lc-property-type': 'propertyType',
      'lc-budget': 'budget',
      'lc-message': 'message',
    }
    const key = keyMap[id]
    if (!key) return
    setForm((prev) => ({ ...prev, [key]: value }))
    // Clear error on change
    if (errors[key]) {
      setErrors((prev) => {
        const copy = { ...prev }
        delete copy[key]
        return copy
      })
    }
  }

  const handleBookingSubmit = () => {
    const newErrors: Record<string, string> = {}

    if (!form.name.trim()) newErrors.name = 'Full Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone is required'
    if (!form.propertyType) newErrors.propertyType = 'Property Type is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})

    const message = generateConsultationMessage(form)
    openWhatsApp(message)
  }

  const handleContactTeam = () => {
    const message = [
      'Hello Homeverse,',
      '',
      'I would like to speak with one of your luxury property advisors.',
      '',
      'Please contact me.',
      '',
      'Thank you.',
    ].join('\n')

    openWhatsApp(message)
  }

  return (
    <section
      className="luxury-contact"
      id="contact"
      aria-label="Contact us"
      ref={sectionRef}
    >
      <div className="lc-container">
        {/* ===========================
            SECTION HEADER
        ============================ */}
        <div className="lc-header">
          <div className="lc-badge">CONTACT US</div>
          <h2 className="lc-heading">
            Let's Find Your{' '}
            <span className="lc-heading-gold">Dream Property Together</span>
          </h2>
          <p className="lc-description">
            Speak with our luxury property advisors and schedule a private
            consultation in New Cairo.
          </p>
        </div>

        {/* ===========================
            MAIN TWO-COLUMN GRID
        ============================ */}
        <div className="lc-grid">
          {/* LEFT — Map */}
          <div className="lc-map-wrap">
            <div className="lc-map">
              <iframe
                title="New Cairo, Fifth Settlement, Egypt"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55235.73685849438!2d31.456644183747715!3d30.003649506094954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145822b7e4a1e6f5%3A0x8a6b8d8c6f6f7b0c!2sNew%20Cairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2s!4v1680000000000"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="lc-map-overlay" aria-hidden="true" />
            </div>
          </div>

          {/* RIGHT — Contact Card */}
          <div className="lc-card-wrap">
            <div className="lc-card">
              {/* Office */}
              <div className="lc-info-item">
                <div className="lc-info-icon" aria-hidden="true">
                  <svg
                    className="lc-info-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="lc-info-content">
                  <span className="lc-info-label">Office</span>
                  <span className="lc-info-text">
                    New Cairo
                  </span>
                  <span className="lc-info-text-muted">
                    Fifth Settlement, Cairo, Egypt
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="lc-info-item">
                <div className="lc-info-icon" aria-hidden="true">
                  <svg
                    className="lc-info-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </div>
                <div className="lc-info-content">
                  <span className="lc-info-label">Phone</span>
                  <span className="lc-info-text">+20 100 123 4567</span>
                </div>
              </div>

              {/* Email */}
              <div className="lc-info-item">
                <div className="lc-info-icon" aria-hidden="true">
                  <svg
                    className="lc-info-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="lc-info-content">
                  <span className="lc-info-label">Email</span>
                  <span className="lc-info-text">contact@homeverse.com</span>
                </div>
              </div>

              {/* Working Hours */}
              <div className="lc-info-item">
                <div className="lc-info-icon" aria-hidden="true">
                  <svg
                    className="lc-info-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="lc-info-content">
                  <span className="lc-info-label">Working Hours</span>
                  <span className="lc-info-text">Monday - Friday</span>
                  <span className="lc-info-text-muted">9:00 AM – 7:00 PM</span>
                  <span className="lc-info-text">Saturday</span>
                  <span className="lc-info-text-muted">10:00 AM – 4:00 PM</span>
                </div>
              </div>

              {/* Response Time */}
              <div className="lc-info-item">
                <div className="lc-info-icon" aria-hidden="true">
                  <svg
                    className="lc-info-icon-svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div className="lc-info-content">
                  <span className="lc-info-label">Response Time</span>
                  <span className="lc-info-highlight">
                    Usually within 30 minutes
                  </span>
                </div>
              </div>

              {/* ===========================
                  CONTACT FORM
              ============================ */}
              <div className="lc-form">
                <span className="lc-form-title">Send Us a Message</span>
                <div className="lc-form-divider" aria-hidden="true" />

                <div className="lc-form-grid">
                  {/* Full Name */}
                  <div className="lc-field">
                    <label className="lc-label" htmlFor="lc-name">
                      Full Name
                    </label>
                    <input
                      id="lc-name"
                      className="lc-input"
                      type="text"
                      placeholder="Your full name"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                    />
                    {errors.name && (
                      <span className="lc-field-error">{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="lc-field">
                    <label className="lc-label" htmlFor="lc-email">
                      Email
                    </label>
                    <input
                      id="lc-email"
                      className="lc-input"
                      type="email"
                      placeholder="your@email.com"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                    />
                    {errors.email && (
                      <span className="lc-field-error">{errors.email}</span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="lc-field">
                    <label className="lc-label" htmlFor="lc-phone">
                      Phone Number
                    </label>
                    <input
                      id="lc-phone"
                      className="lc-input"
                      type="tel"
                      placeholder="+20 100 000 0000"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                    />
                    {errors.phone && (
                      <span className="lc-field-error">{errors.phone}</span>
                    )}
                  </div>

                  {/* Property Type */}
                  <div className="lc-field">
                    <label className="lc-label" htmlFor="lc-property-type">
                      Property Type
                    </label>
                    <select
                      id="lc-property-type"
                      className="lc-select"
                      value={form.propertyType}
                      onChange={handleChange}
                    >
                      <option value="" disabled>
                        Select property type
                      </option>
                      <option value="villa">Villa</option>
                      <option value="penthouse">Penthouse</option>
                      <option value="apartment">Apartment</option>
                      <option value="townhouse">Townhouse</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                    </select>
                    {errors.propertyType && (
                      <span className="lc-field-error">{errors.propertyType}</span>
                    )}
                  </div>

                  {/* Budget */}
                  <div className="lc-field lc-field--full">
                    <label className="lc-label" htmlFor="lc-budget">
                      Budget
                    </label>
                    <input
                      id="lc-budget"
                      className="lc-input"
                      type="text"
                      placeholder="e.g. $500,000 - $2,000,000"
                      value={form.budget}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Message */}
                  <div className="lc-field lc-field--full">
                    <label className="lc-label" htmlFor="lc-message">
                      Message
                    </label>
                    <textarea
                      id="lc-message"
                      className="lc-textarea"
                      placeholder="Tell us about your dream property..."
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Submit */}
                  <div className="lc-field lc-field--full">
                    <button className="lc-btn" type="button" onClick={handleBookingSubmit}>
                      Book Private Consultation
                      <span className="lc-btn-icon" aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            QUICK SERVICES
        ============================ */}
        <div className="lc-services">
          {/* Card 1 — Purchase */}
          <div
            className="lc-service-card"
            style={{ '--lc-service-delay': '0ms' } as React.CSSProperties}
          >
            <div className="lc-service-icon" aria-hidden="true">
              <svg
                className="lc-service-icon-svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <h3 className="lc-service-title">Luxury Property Purchase</h3>
            <p className="lc-service-description">
              Helping clients find exclusive homes.
            </p>
            <div className="lc-service-divider" aria-hidden="true" />
          </div>

          {/* Card 2 — Sell */}
          <div
            className="lc-service-card"
            style={{ '--lc-service-delay': '120ms' } as React.CSSProperties}
          >
            <div className="lc-service-icon" aria-hidden="true">
              <svg
                className="lc-service-icon-svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 7L12 3 4 7v14h16V7Z" />
                <path d="M9 21v-8h6v8" />
              </svg>
            </div>
            <h3 className="lc-service-title">Sell Your Property</h3>
            <p className="lc-service-description">
              Professional valuation and marketing.
            </p>
            <div className="lc-service-divider" aria-hidden="true" />
          </div>

          {/* Card 3 — Tour */}
          <div
            className="lc-service-card"
            style={{ '--lc-service-delay': '240ms' } as React.CSSProperties}
          >
            <div className="lc-service-icon" aria-hidden="true">
              <svg
                className="lc-service-icon-svg"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7Z" />
              </svg>
            </div>
            <h3 className="lc-service-title">Private Property Tour</h3>
            <p className="lc-service-description">
              Schedule a personalized viewing experience.
            </p>
            <div className="lc-service-divider" aria-hidden="true" />
          </div>
        </div>

        {/* ===========================
            BOTTOM CTA
        ============================ */}
        <div className="lc-cta">
          <div className="lc-cta-content">
            <h3 className="lc-cta-heading">
              Ready To Own Your Next Luxury Home?
            </h3>
            <p className="lc-cta-description">
              Our advisors are ready to help you find the perfect luxury
              property in New Cairo.
            </p>
            <button className="lc-cta-btn" type="button" onClick={handleContactTeam}>
              Contact Our Team
              <span className="lc-cta-btn-icon" aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

