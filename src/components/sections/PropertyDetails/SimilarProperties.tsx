import { useMemo } from 'react'
import type { PropertyCard as PropertyCardModel } from '../../../types/property'
import { properties } from '../../../data/properties'
import { Link } from 'react-router-dom'

export function SimilarProperties({ property }: { property: PropertyCardModel }) {
  const similar = useMemo(() => properties.filter((p) => p.id !== property.id).slice(0, 3), [property.id])

  return (
    <section className="pd-similar" aria-label="Similar properties">
      <div className="container pd-container">
        <div className="pd-section-head">
          <h2 className="pd-title">Similar Properties</h2>
          <p className="pd-subtitle">Discover matching luxury listings in the same premium collection.</p>
        </div>

        <div className="pd-similar-grid">
          {similar.map((p) => (
            <Link key={p.id} to={`/property/${p.id}`} className="pd-similar-card">
              <div className="pd-similar-media">
                <img src={p.imageSrc} alt={p.imageAlt} className="pd-similar-img" loading="lazy" />
                <div className={`pd-similar-badge pd-similar-badge--${p.badgeVariant}`}>{p.badgeLabel}</div>
              </div>
              <div className="pd-similar-content">
                <div className="pd-similar-price">{p.price}</div>
                <div className="pd-similar-title">{p.title}</div>
                <div className="pd-similar-location">{p.amenities.find((a) => a.label === 'Bedrooms')?.value ? p.amenities.find((a) => a.label === 'Bedrooms')?.value : ''}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

