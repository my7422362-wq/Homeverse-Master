import type { FeaturedProperty } from '../../../types/property'

export function PropertyBadge({ property }: { property: FeaturedProperty }) {
  return <div className={`lux-featured-badge ${property.featured ? 'is-featured' : ''}`}>{property.featuredLabel}</div>
}

