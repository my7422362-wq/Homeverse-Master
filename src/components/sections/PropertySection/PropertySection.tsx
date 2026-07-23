import { properties } from '../../../data/properties'

import { PropertyCard } from './PropertyCard'

export function PropertySection() {
  return (
    <section className="property" id="property">
      <div className="container">
        <p className="section-subtitle">Properties</p>
        <h2 className="h2 section-title">Featured Listings</h2>

        <ul className="property-list has-scrollbar">
          {properties.map((p) => (
            <li key={p.id}>
              <PropertyCard property={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

