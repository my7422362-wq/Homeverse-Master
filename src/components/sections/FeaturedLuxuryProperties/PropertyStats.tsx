import type { FeaturedProperty } from '../../../types/property'

export function PropertyStats({ property }: { property: FeaturedProperty }) {
  return (
    <div className="lux-card-stats" aria-label="Property stats">
      <div className="lux-stat">
        <span className="lux-stat-value">{property.bedrooms}</span>
        <span className="lux-stat-label">Bedrooms</span>
      </div>
      <div className="lux-stat">
        <span className="lux-stat-value">{property.bathrooms}</span>
        <span className="lux-stat-label">Bathrooms</span>
      </div>
      <div className="lux-stat">
        <span className="lux-stat-value">{property.garage}</span>
        <span className="lux-stat-label">Garage</span>
      </div>
      <div className="lux-stat">
        <span className="lux-stat-value">{property.areaSqft.toLocaleString()}</span>
        <span className="lux-stat-label">Sqft</span>
      </div>
    </div>
  )
}

