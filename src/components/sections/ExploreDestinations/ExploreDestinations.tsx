import { useEffect, useRef } from 'react'

type DestinationItem = {
  id: string
  number: string
  image: string
  imageAlt: string
  location: string
  title: string
  description: string
  gridClass: string
}

const destinations: DestinationItem[] = [
  {
    id: 'new-cairo',
    number: '01',
    image: '/images/property-1.jpg',
    imageAlt: 'Modern luxury villa in New Cairo',
    location: 'New Cairo',
    title: 'Modern Luxury Living',
    description:
      'Premium residences surrounded by prestigious communities, international schools, and modern lifestyle destinations.',
    gridClass: 'ed-item--half',
  },
  {
    id: 'fifth-settlement',
    number: '02',
    image: '/images/property-2.jpg',
    imageAlt: 'Elegant villa in Fifth Settlement',
    location: 'Fifth Settlement',
    title: 'The New Capital Of Elegance',
    description:
      'Exclusive villas and luxury communities designed for sophisticated living and exceptional comfort.',
    gridClass: 'ed-item--half',
  },
  {
    id: 'sheikh-zayed',
    number: '03',
    image: '/images/property-3.jpg',
    imageAlt: 'Contemporary home in Sheikh Zayed',
    location: 'Sheikh Zayed',
    title: 'Contemporary Urban Lifestyle',
    description:
      'A perfect balance between elegant homes, green spaces, and a vibrant modern community.',
    gridClass: 'ed-item--half',
  },
  {
    id: 'katameya',
    number: '04',
    image: '/images/property-4.png',
    imageAlt: 'Private estate in Katameya',
    location: 'Katameya',
    title: 'Private & Exclusive Residences',
    description:
      'Elegant properties designed for privacy, luxury, and a refined residential experience.',
    gridClass: 'ed-item--half',
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const items = node.querySelectorAll<HTMLElement>('.ed-item-inner')

    if (!items.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ed-item-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function ExploreDestinations() {
  const sectionRef = useScrollReveal()

  return (
    <section
      className="explore-destinations"
      id="explore-destinations"
      aria-label="Explore Cairo's Most Exclusive Destinations"
      ref={sectionRef}
    >
      <div className="ed-container">
        {/* Section Header */}
        <div className="ed-header">
          <div className="ed-badge">PREMIUM LOCATIONS</div>
          <h2 className="ed-heading">
            Explore Cairo's{' '}
            <span className="ed-heading-gold"></span>{' '}
            Destinations
          </h2>
          <p className="ed-description">
            Discover premium residences in the most desirable neighborhoods of
            Cairo, where luxury, comfort, and modern lifestyle come together.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="ed-grid">
          {destinations.map((item) => (
            <article
              key={item.id}
              className={`ed-item ${item.gridClass}`}
              aria-label={`${item.location} — ${item.title}`}
            >
              <div className="ed-item-inner">
                {/* Background Image */}
                <div className="ed-item-bg">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="ed-item-img"
                    loading="lazy"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="ed-item-overlay" aria-hidden="true" />
                <div className="ed-item-overlay-edge" aria-hidden="true" />

                {/* Decorative Number */}
                <div className="ed-item-number" aria-hidden="true">
                  {item.number}
                </div>

                {/* Content */}
                <div className="ed-item-content">
                  <span className="ed-item-location">{item.location}</span>
                  <h3 className="ed-item-title">{item.title}</h3>
                  <p className="ed-item-description">{item.description}</p>
                  <div className="ed-item-divider" aria-hidden="true" />
                </div>

                {/* Hover Glow */}
                <div className="ed-item-glow" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

