import * as React from 'react'

type AboutFeature = {
  title: string
  description: string
  icon: React.ReactNode
}

type Stat = {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Luxury Properties' },
  { value: '10K+', label: 'Happy Clients' },
]

const features: AboutFeature[] = [
  {
    title: 'Trusted Advisors',
    description: 'Expert guidance from valuation to closing—built for confidence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: 'Premium Properties',
    description: 'Curated listings with exceptional design, location, and value.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 7L12 3 4 7v14h16V7Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M9 21v-8h6v8" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Investment Opportunities',
    description: 'Data-driven insights for resilient returns and smarter decisions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 19V5a2 2 0 0 1 2-2h14"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M20 7V21H6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M7 14l3-3 3 2 5-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Personalized Service',
    description: 'A boutique approach—private, discreet, and tailored to you.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function AboutSection() {
  return (
    <section className="about" id="about" aria-label="About us">
      <div className="about-shell">
        <div className="container about-container">
          {/* LEFT: Image + glow + glass stats */}
          <div className="about-left">
            <div className="about-media" aria-hidden="true">
              <div className="about-media-glow" />

              <div className="about-media-frame">
                <img
                  src="/images/about-banner-1.png"
                  alt="Luxury property interior"
                  className="about-media-image"
                />

                {/* subtle second image sheen */}
                <img
                  src="/images/about-banner-2.jpg"
                  alt=""
                  className="about-media-sheen"
                  aria-hidden="true"
                />
              </div>

              <div className="about-stats-glass" role="group" aria-label="Company highlights">
                {stats.map((s) => (
                  <div key={s.label} className="about-stat">
                    <div className="about-stat-value">{s.value}</div>
                    <div className="about-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Badge + headings + paragraph + features */}
          <div className="about-right">
            <div className="about-badge">ABOUT US</div>

            <h2 className="about-heading">
              Crafting <span className="about-heading-gold">Exceptional Living</span> Experiences
            </h2>

            <p className="about-description">
              We provide premium real estate services with discretion and precision—connecting discerning clients with
              extraordinary homes, investment opportunities, and a truly elevated buying experience.
            </p>

            <div className="about-features" role="list">
              {features.map((f) => (
                <div className="about-feature-card" key={f.title} role="listitem">
                  <div className="about-feature-icon">{f.icon}</div>
                  <div className="about-feature-title">{f.title}</div>
                  <div className="about-feature-description">{f.description}</div>
                </div>
              ))}
            </div>

           
          </div>
        </div>
      </div>
    </section>
  )
}


