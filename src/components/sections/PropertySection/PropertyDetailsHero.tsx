import type { PropertyCard as PropertyCardModel } from '../../../types/property'

import { PropertyCard } from './PropertyCard'

export function PropertyDetailsHero({ property }: { property: PropertyCardModel }) {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>

        <ul className="property-list" style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <PropertyCard property={property} />
          </li>
        </ul>
      </div>
    </section>
  )
}

