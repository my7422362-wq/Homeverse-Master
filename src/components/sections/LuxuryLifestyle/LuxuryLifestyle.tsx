import { useEffect, useRef } from 'react'
import {
  Building2,
  Waves,
  Briefcase,
  Trees,
  Dumbbell,
  ConciergeBell,
  Cpu,
  Car,
  PawPrint,
  Zap,
} from 'lucide-react'

const features = [
  { icon: Building2, title: 'Private Clubhouses' },
  { icon: Waves, title: 'Infinity Pools' },
  { icon: Briefcase, title: 'Business Lounges' },
  { icon: Trees, title: 'Sky Gardens' },
  { icon: Dumbbell, title: 'Fitness & Wellness Centers' },
  { icon: ConciergeBell, title: '24/7 Concierge' },
  { icon: Cpu, title: 'Smart Home Technology' },
  { icon: Car, title: 'Private Parking' },
  { icon: PawPrint, title: 'Pet Friendly Areas' },
  { icon: Zap, title: 'Electric Vehicle Charging' },
] as const

const stats = [
  { value: '★★★★★', label: 'Rated Luxury Developer' },
  { value: '15+', label: 'Private Communities' },
  { value: '98%', label: 'Resident Satisfaction' },
] as const

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const left = node.querySelector<HTMLElement>('.ll-left')
    const right = node.querySelector<HTMLElement>('.ll-right')
    const cards = node.querySelectorAll<HTMLElement>('.ll-stat-card')
    const featureCards = node.querySelectorAll<HTMLElement>('.ll-feature')

    const elements = [left, right, ...Array.from(cards), ...Array.from(featureCards)].filter(
      (el): el is HTMLElement => el !== null
    )

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ll-revealed')
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

export function LuxuryLifestyle() {
  const sectionRef = useScrollReveal()

  return (
    <section
      className="luxury-lifestyle"
      id="luxury-lifestyle"
      aria-label="Luxury Lifestyle"
      ref={sectionRef}
    >
      <div className="ll-container">
        {/* Section Header */}
        <div className="ll-header">
          <div className="ll-badge">LUXURY LIFESTYLE</div>
          <h2 className="ll-heading">
            More Than a Home —{' '}
            <span className="ll-heading-gold">A Complete Way of Living</span>
          </h2>
          <p className="ll-description">
            At Homeverse, we craft exclusive living experiences that transcend
            traditional real estate. Every residence is a gateway to a
            curated lifestyle of comfort, elegance, and distinction.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="ll-grid">
          {/* LEFT SIDE — Image + Floating Stats */}
          <div className="ll-left">
            <div className="ll-media">
              {/* Glow */}
              <div className="ll-media-glow" aria-hidden="true" />
              {/* Image Frame */}
              <div className="ll-media-frame">
                <img
                  src="/images/property-1.jpg"
                  alt="Luxury lifestyle residence"
                  className="ll-media-img"
                  loading="lazy"
                />
                <div className="ll-media-overlay" aria-hidden="true" />
              </div>

              {/* Floating Stat Cards */}
              <div className="ll-stats">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="ll-stat-card"
                    style={{ '--ll-stat-delay': `${index * 120}ms` } as React.CSSProperties}
                  >
                    <span className="ll-stat-value">{stat.value}</span>
                    <span className="ll-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — Content */}
          <div className="ll-right">
            <h3 className="ll-right-heading">
              Elevate Every Moment with{' '}
              <span className="ll-heading-gold">Unmatched Luxury</span>
            </h3>
            <p className="ll-right-text">
              Discover a world where every detail is designed for your
              comfort and delight. From world-class amenities to
              impeccable service, we redefine what it means to live well.
            </p>

            {/* Feature List */}
            <ul className="ll-features" aria-label="Luxury lifestyle features">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <li
                    key={feature.title}
                    className="ll-feature"
                    style={{ '--ll-feature-delay': `${index * 60}ms` } as React.CSSProperties}
                  >
                    <div className="ll-feature-icon" aria-hidden="true">
                      <Icon className="ll-feature-icon-svg" strokeWidth={1.8} />
                    </div>
                    <span className="ll-feature-text">{feature.title}</span>
                  </li>
                )
              })}
            </ul>

            {/* CTA Button */}
            
              
              
               
                  <svg
                    width="20"
                    height="20"
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
                
              
            </div>
          </div>
        </div>
     
    </section>
  )
}

