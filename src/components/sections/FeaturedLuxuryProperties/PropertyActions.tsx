import type { FeaturedProperty } from '../../../types/property'

export function PropertyActions({ property }: { property: FeaturedProperty }) {
  return (
    <div className="lux-card-actions" aria-label="Property actions">
      <a href={`/properties/${property.slug}`} className="lux-action-btn lux-action-details">
        View Details
      </a>

     
    </div>
  )
}

