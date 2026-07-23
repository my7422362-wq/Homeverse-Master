import { useEffect, useRef, useState } from 'react'
import '../../../styles/expertAdvisors.css'

type Advisor = {
  id: string
  name: string
  title: string
  image: string
  imageAlt: string
  experience: string
  propertiesSold: string
  rating: number
  languages: string[]
  description: string
}

const advisors: Advisor[] = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    title: 'Senior Luxury Real Estate Advisor',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=450&fit=crop&crop=face&auto=format&q=80',
    imageAlt: 'Sarah Mitchell - Senior Luxury Real Estate Advisor',
    experience: '14+ Years',
    propertiesSold: '320+',
    rating: 4.9,
    languages: ['English', 'French', 'Arabic'],
    description:
      'Helping clients discover exceptional luxury homes across New Cairo and Sheikh Zayed with unmatched professionalism.',
  },
  {
    id: 'james-harrington',
    name: 'James Harrington',
    title: 'Executive Property Consultant',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=450&fit=crop&crop=face&auto=format&q=80',
    imageAlt: 'James Harrington - Executive Property Consultant',
    experience: '18+ Years',
    propertiesSold: '580+',
    rating: 4.8,
    languages: ['English', 'Spanish', 'Italian'],
    description:
      'Specializing in ultra-premium waterfront estates and penthouses with a keen eye for architectural excellence.',
  },
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    title: 'Director of Luxury Sales',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=450&fit=crop&crop=face&auto=format&q=80',
    imageAlt: 'Elena Rossi - Director of Luxury Sales',
    experience: '12+ Years',
    propertiesSold: '250+',
    rating: 4.9,
    languages: ['English', 'Italian', 'German'],
    description:
      'Curating bespoke real estate experiences for discerning clients seeking the finest properties in prime locations.',
  },
  {
    id: 'marcus-williams',
    name: 'Marcus Williams',
    title: 'Premium Property Specialist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=450&fit=crop&crop=face&auto=format&q=80',
    imageAlt: 'Marcus Williams - Premium Property Specialist',
    experience: '16+ Years',
    propertiesSold: '410+',
    rating: 4.7,
    languages: ['English', 'Portuguese', 'Mandarin'],
    description:
      'Delivering unparalleled market insights and white-glove service for luxury property investments worldwide.',
  },
]

const statsData = [
  { value: 150, suffix: '+', label: 'Luxury Advisors' },
  { value: 6500, suffix: '+', label: 'Properties Sold' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 22, suffix: ' Years', label: 'Industry Experience' },
]

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const stars = []

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="ea-card-star" aria-hidden="true">★</span>
      )
    } else if (i === fullStars && hasHalf) {
      stars.push(
        <span key={i} className="ea-card-star" aria-hidden="true">★</span>
      )
    } else {
      stars.push(
        <span key={i} className="ea-card-star" aria-hidden="true" style={{ opacity: 0.3 }}>★</span>
      )
    }
  }

  return (
    <div className="ea-card-rating">
      <div className="ea-card-stars">{stars}</div>
      <span className="ea-card-rating-text">{rating.toFixed(1)}</span>
    </div>
  )
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const cards = node.querySelectorAll<HTMLElement>('.ea-card')
    const stats = node.querySelectorAll<HTMLElement>('.ea-stat-item')

    const elements = [...Array.from(cards), ...Array.from(stats)]

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

function useCounterAnimation(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || started) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.unobserve(node)
        }
      },
      { threshold }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [threshold, started])

  return { ref, started }
}

function AnimatedStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const { ref, started } = useCounterAnimation(0.3)
  const [displayed, setDisplayed] = useState(0)

  useEffect(() => {
    if (!started) return

    let start = 0
    const duration = 2000
    const stepTime = Math.max(16, duration / value)

    const timer = setInterval(() => {
      start += 1
      if (start >= value) {
        setDisplayed(value)
        clearInterval(timer)
      } else {
        setDisplayed(start)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [started, value])

  return (
    <div
      className="ea-stat-item"
      ref={ref}
      style={{ '--ea-stat-delay': `${delay}ms` } as Record<string, string>}
    >
      <span className="ea-stat-value">
        {displayed}{suffix}
      </span>
      <span className="ea-stat-label">{label}</span>
    </div>
  )
}

export function ExpertAdvisors() {
  const sectionRef = useScrollReveal()

  return (
    <section
      className="expert-advisors"
      id="expert-advisors"
      aria-label="Meet Our Expert Advisors"
      ref={sectionRef}
    >
      <div className="ea-container">
        {/* Section Header */}
        <div className="ea-header">
          <div className="ea-badge">MEET OUR EXPERT ADVISORS</div>
          <h2 className="ea-heading">
            Trusted Professionals Dedicated to{' '}
            <span className="ea-heading-gold">Your Luxury Property Journey</span>
          </h2>
          <p className="ea-description">
            Our team of seasoned luxury real estate advisors brings decades of
            combined expertise, ensuring every transaction is handled with the
            utmost discretion and professionalism.
          </p>
        </div>

        {/* Advisor Grid */}
        <div className="ea-grid">
          {advisors.map((advisor, index) => (
            <article
              key={advisor.id}
              className="ea-card"
              style={{ '--ea-card-delay': `${index * 120}ms` } as Record<string, string>}
            >
              <div className="ea-card-inner">
                {/* Image */}
                <div className="ea-card-image-wrap">
                  <img
                    src={advisor.image}
                    alt={advisor.imageAlt}
                    className="ea-card-img"
                    loading="lazy"
                  />
                  <div className="ea-card-image-overlay" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="ea-card-content">
                  <h3 className="ea-card-name">{advisor.name}</h3>
                  <span className="ea-card-title">{advisor.title}</span>
                  <div className="ea-card-divider" aria-hidden="true" />

                  {/* Stats */}
                  <div className="ea-card-stats">
                    <div className="ea-card-stat">
                      <span className="ea-card-stat-value">{advisor.experience}</span>
                      <span className="ea-card-stat-label">Experience</span>
                    </div>
                    <div className="ea-card-stat">
                      <span className="ea-card-stat-value">{advisor.propertiesSold}</span>
                      <span className="ea-card-stat-label">Properties Sold</span>
                    </div>
                  </div>

                  {/* Rating */}
                  <StarRating rating={advisor.rating} />

                  {/* Languages */}
                  <div className="ea-card-languages">
                    {advisor.languages.map((lang) => (
                      <span key={lang} className="ea-card-language">
                        {lang}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="ea-card-description">{advisor.description}</p>

                  {/* Actions */}
                  <div className="ea-card-actions">
                    
                   
                  </div>
                </div>

                {/* Glow */}
                <div className="ea-card-glow" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Statistics Bar */}
        <div className="ea-stats">
          {statsData.map((stat, index) => (
            <>
              {index > 0 && <div className="ea-stat-divider" aria-hidden="true" />}
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 120}
              />
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

