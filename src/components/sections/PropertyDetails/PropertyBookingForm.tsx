import { useState } from 'react'
import { cn } from '../../../utils/cn'

export function PropertyBookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  return (
    <section className="pd-booking" id="booking" aria-label="Property booking">
      <div className="container pd-container">
        <div className="pd-booking-shell">
          <div className="pd-booking-copy">
            <div className="pd-booking-badge">Luxury Viewing</div>
            <h2 className="pd-title">Schedule Your Private Viewing</h2>
            <p className="pd-subtitle">
              Tell us what you’re looking for. We’ll confirm the most premium time slot for your visit.
            </p>
          </div>

          <div className="pd-glass-card pd-form-card">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="pd-form"
            >
              <div className="pd-form-grid">
                <Field
                  label="Full Name"
                  value={form.name}
                  onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                  placeholder="Your full name"
                  autoComplete="name"
                />
                <Field
                  label="Email"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  placeholder="you@example.com"
                  type="email"
                  autoComplete="email"
                />
                <Field
                  label="Phone Number"
                  value={form.phone}
                  onChange={(v) => setForm((s) => ({ ...s, phone: v }))}
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  autoComplete="tel"
                />
                <Field
                  label="Preferred Visit Date"
                  value={form.visitDate}
                  onChange={(v) => setForm((s) => ({ ...s, visitDate: v }))}
                  placeholder="Select a date"
                  type="date"
                />
              </div>

              <div className="pd-form-message">
                <label className="pd-label">Message</label>
                <textarea
                  className="pd-textarea"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  placeholder="Share preferences, timing, and any special requests."
                  rows={4}
                />
              </div>

              <div className="pd-form-actions">
                <button type="submit" className="pd-btn pd-btn-primary">
                  Schedule a Viewing
                </button>
              </div>

              <div className={cn('pd-form-success', submitted && 'is-visible')} aria-live="polite">
                Request received. A luxury representative will reach out shortly.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  placeholder: string
  type?: string
  autoComplete?: string
}) {
  return (
    <div className="pd-field">
      <label className="pd-label">{label}</label>
      <input
        className="pd-input"
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={type === 'date' ? undefined : placeholder}
        autoComplete={autoComplete}
      />
    </div>
  )
}

