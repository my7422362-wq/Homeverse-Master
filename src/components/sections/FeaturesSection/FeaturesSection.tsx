export function FeaturesSection() {
  const features = [
    {
      icon: '🏠',
      title: 'Luxury Homes',
      description: 'Discover premium residences crafted for sophisticated living.',
    },
    {
      icon: '🏙️',
      title: 'Prime Locations',
      description: 'Properties in the most sought-after neighborhoods and districts.',
    },
    {
      icon: '🤝',
      title: 'Expert Guidance',
      description: 'Professional advisors dedicated to your real estate journey.',
    },
    {
      icon: '💎',
      title: 'Premium Service',
      description: 'White-glove treatment from first inquiry to final closing.',
    },
  ]

  return (
    <section className="features" id="features" aria-label="Our Features">
      <div className="container">
        <p className="section-subtitle">Why Choose Us</p>
        <h2 className="h2 section-title">Our Key Features</h2>

        <ul className="features-list">
          {features.map((feature) => (
            <li key={feature.title}>
              <div className="features-card">
                <div className="card-icon" aria-hidden="true">
                  <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                </div>
                <h3 className="h3 card-title">{feature.title}</h3>
                <p className="card-text">{feature.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

