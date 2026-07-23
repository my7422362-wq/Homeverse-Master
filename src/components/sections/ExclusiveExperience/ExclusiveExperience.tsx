import { useEffect, useRef } from 'react'

type ExperienceBlock = {
  id: string
  number: string
  image: string
  imageAlt: string
  title: string
  description: string
  reversed: boolean
}

const experiences: ExperienceBlock[] = [
  {
    id: 'curated-luxury',
    number: '',
    image: '/images/property-1.jpg',
    imageAlt: 'Curated luxury property exterior',
    title: 'Curated Luxury Properties',
    description:
      'Every residence is carefully selected based on architecture, location, design, and lifestyle value.',
    reversed: false,
  },
  {
    id: 'personalized-client',
    number: '',
    image: '/images/property-2.jpg',
    imageAlt: 'Personalized client consultation',
    title: 'Personalized Client Experience',
    description:
      'Our specialists provide a private and tailored journey to help clients find properties that match their vision.',
    reversed: true,
  },
  {
    id: 'exclusive-investment',
    number: '',
    image: '/images/property-3.jpg',
    imageAlt: 'Exclusive investment property',
    title: 'Exclusive Investment Opportunities',
    description:
      'Discover premium real estate opportunities with strong potential and long-term value.',
    reversed: false,
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const blocks = node.querySelectorAll<HTMLElement>('.ex-block-inner')

    if (!blocks.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ex-block-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -60px 0px' }
    )

    blocks.forEach((block) => observer.observe(block))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function ExclusiveExperience() {
  const sectionRef = useScrollReveal()

  return (
    <section
      className="exclusive-experience"
      id="exclusive-experience"
      aria-label="Exclusive Real Estate Experience"
      ref={sectionRef}
    >
      <div className="ex-container">
        {/* Section Header */}
        <div className="ex-header">
          <div className="ex-badge">EXCLUSIVE EXPERIENCE</div>
          <h2 className="ex-heading">
            <span className="ex-heading-gold">Real Estate</span> 
          </h2>
          <p className="ex-description">
            A premium journey crafted for discerning clients who seek nothing less than extraordinary.
          </p>
        </div>

        {/* Experience Blocks */}
        <div className="ex-blocks">
          {experiences.map((block) => (
            <article
              key={block.id}
              className={`ex-block ${block.reversed ? 'ex-block--reversed' : ''}`}
            >
              <div className="ex-block-inner">
                {/* Decorative Number */}
                <div className="ex-block-number" aria-hidden="true">
                  {block.number}
                </div>

                {/* Image */}
                <div className="ex-block-media">
                  <div className="ex-block-media-glow" aria-hidden="true" />
                  <div className="ex-block-media-frame">
                    <img
                      src={block.image}
                      alt={block.imageAlt}
                      className="ex-block-media-image"
                      loading="lazy"
                    />
                    <div className="ex-block-media-overlay" aria-hidden="true" />
                  </div>
                </div>

                {/* Content */}
                <div className="ex-block-content">
                  <span className="ex-block-kicker" aria-hidden="true">
                    {block.number}
                  </span>
                  <h3 className="ex-block-title">{block.title}</h3>
                  <p className="ex-block-description">{block.description}</p>
                  <div className="ex-block-divider" aria-hidden="true" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

