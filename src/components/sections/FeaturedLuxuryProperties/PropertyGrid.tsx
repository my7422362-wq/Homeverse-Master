import type { FeaturedProperty } from '../../../types/property'
import { PropertyCard } from './PropertyCard'

export function PropertyGrid({ properties }: { properties: FeaturedProperty[] }) {
  return (
    <ul className="lux-featured-grid" aria-label="Featured property list">
      {properties.map((p) => (
        <li key={p.id}>
          <PropertyCard property={p} />
        </li>
      ))}
    </ul>
  )
}

