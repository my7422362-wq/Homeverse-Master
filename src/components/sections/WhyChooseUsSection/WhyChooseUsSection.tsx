import { Building2, ShieldCheck, MapPinned, BadgeDollarSign, Rocket, Headset } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: 'Premium Properties',
    description: 'Verified luxury homes with exceptional architecture and value.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Agents',
    description: 'Professional real estate consultants with years of experience.',
  },
  {
    icon: MapPinned,
    title: 'Prime Locations',
    description: 'Exclusive properties in the city’s most desirable areas.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Smart Investment',
    description: 'High-return opportunities for investors and homeowners.',
  },
  {
    icon: Rocket,
    title: 'Fast & Secure Process',
    description: 'Transparent transactions with professional legal support.',
  },
  {
    icon: Headset,
    title: '24/7 Client Support',
    description: 'Dedicated assistance before, during and after your purchase.',
  },
] as const

export function WhyChooseUsSection() {
  return (
    <section className="why-choose-us" aria-label="Why choose us">
      <div className="why-choose-us-container">
        <div className="why-choose-us-header">
          <div className="why-choose-us-badge">WHY CHOOSE US</div>
          <h2 className="why-choose-us-title">Why People Trust Homeverse</h2>
          <p className="why-choose-us-description">
            We deliver premium real estate experiences with verified properties, expert consultants, and personalized service from the first visit to the final purchase.
          </p>
        </div>

        <ul className="why-choose-us-grid" aria-label="Why choose Homeverse">
          {features.map((f, index) => {
            const Icon = f.icon
            return (
              <li
                key={f.title}
                className="why-choose-us-card"
                style={{ ['--why-choose-us-delay' as any]: `${index * 80}ms` }}
              >
                <div className="why-choose-us-card-icon" aria-hidden="true">
                  <Icon className="why-choose-us-card-icon-svg" strokeWidth={2} />
                </div>
                <h3 className="why-choose-us-card-title">{f.title}</h3>
                <p className="why-choose-us-card-description">{f.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

