import { useEffect, useRef } from 'react'

type InsightArticle = {
  id: string
  image: string
  imageAlt: string
  category: string
  date: string
  title: string
  description: string
}

const articles: InsightArticle[] = [
  {
    id: 'luxury-living-new-cairo',
    image: '/images/property-1.jpg',
    imageAlt: 'Luxury real estate market trends in Cairo',
    category: 'Market Insights',
    date: 'March 15, 2026',
    title: 'Luxury Living in New Cairo: Why It Continues to Attract Elite Homebuyers',
    description:
      'Discover why New Cairo remains Egypt\'s most desirable destination for luxury villas and premium apartments.',
  },
  {
    id: 'fifth-settlement-investment-guide',
    image: '/images/property-3.jpg',
    imageAlt: 'Modern luxury villa in New Cairo',
    category: 'Investment',
    date: 'March 10, 2026',
    title: 'Why Fifth Settlement Is One of Egypt\'s Strongest Real Estate Investments',
    description:
      'An in-depth investment guide for buyers looking for long-term value in Cairo\'s most dynamic district.',
  },
  {
    id: 'sheikh-zayed-vs-new-cairo',
    image: '/images/property-2.jpg',
    imageAlt: 'Premium investment property in Cairo',
    category: 'Luxury Lifestyle',
    date: 'March 5, 2026',
    title: 'Sheikh Zayed vs New Cairo: Which Luxury Destination Fits Your Lifestyle?',
    description:
      'A comprehensive comparison of Egypt\'s two most prestigious residential destinations.',
  },
]

function useInsightsReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const cards = node.querySelectorAll<HTMLElement>('.li-card')

    if (!cards.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('li-card-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return ref
}

export function LatestInsights() {
  const sectionRef = useInsightsReveal()

  return (
    <section
      className="latest-insights"
      id="latest-insights"
      aria-label="Latest Real Estate Insights"
      ref={sectionRef}
    >
      <div className="li-container">
        {/* Section Header */}
        <div className="li-header">
          <div className="li-badge">INSIGHTS & ARTICLES</div>
          <h2 className="li-heading">
            {' '}
            <span className="li-heading-gold">Real Estate</span>{' '}
            
          </h2>
          <p className="li-description">
            Stay informed with the latest market trends, property launches, and
            expert advice from Homeverse.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="li-grid">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="li-card"
              style={{ '--li-delay': `${index * 150}ms` } as React.CSSProperties}
              aria-label={`${article.category} — ${article.title}`}
            >
              <div className="li-card-inner">
                {/* Image */}
                <div className="li-card-media">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="li-card-img"
                    loading="lazy"
                  />
                  <div className="li-card-overlay" aria-hidden="true" />

                  {/* Category Badge */}
                  <div className="li-card-category">{article.category}</div>

                  {/* Date */}
                  <div className="li-card-date">
                    <span className="li-card-date-icon" aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                    </span>
                    {article.date}
                  </div>
                </div>

                {/* Content */}
                <div className="li-card-body">
                  <h3 className="li-card-title">{article.title}</h3>
                  <p className="li-card-description">{article.description}</p>

                  {/* Read Article CTA */}
                  <a
                    href={`/articles/${article.id}`}
                    className="li-card-cta"
                  >
                    Read Article
                    <span className="li-card-cta-arrow" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Hover Glow */}
                <div className="li-card-glow" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

