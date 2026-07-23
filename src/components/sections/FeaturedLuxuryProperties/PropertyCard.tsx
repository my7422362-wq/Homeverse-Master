import type { FeaturedProperty } from '../../../types/property'
import { PropertyBadge } from './PropertyBadge'
import { PropertyStats } from './PropertyStats'
import { PropertyActions } from './PropertyActions'


export function PropertyCard({ property }: { property: FeaturedProperty }) {
  return (
    <article className="lux-featured-card property-card" aria-label={property.title}>
      <figure className="lux-featured-media card-banner">
        <a href={`/properties/${property.slug}`} aria-label={`View ${property.title} details`}>
          <img src={property.imageSrc} alt={property.imageAlt} className="w-100" loading="lazy" />
        </a>

        <PropertyBadge property={property} />

        <div className="lux-featured-type-badge" aria-label="Property type">
          {property.propertyType}
        </div>

        <div className="banner-actions" aria-label="Property header actions">
          <span className="banner-actions-btn" style={{ cursor: 'default' }}>
            <span>{property.location}</span>
          </span>
        </div>

      </figure>

      <div className="card-content lux-card-content">
        <div className="card-price">
          <strong>{property.price}</strong>
        </div>

        <h3 className="h3 card-title">
          <a href={`/properties/${property.slug}`}>{property.title}</a>
        </h3>


        <div className="lux-card-address">{property.address}</div>
        <p className="card-text">{property.shortDescription}</p>

        <ul className="lux-feature-list" aria-label="Property features">
          {property.propertyFeatures.slice(0, 3).map((f) => (
            <li key={f} className="lux-feature-item">
              {f}
            </li>
          ))}
        </ul>

        <PropertyStats property={property} />
      </div>

      <div className="card-footer lux-card-footer">
        <div className="card-author">
          <figure className="author-avatar">
            <img src={property.agentAvatarSrc} alt={property.agentName} className="w-100" loading="lazy" />
          </figure>
          <div>
            <p className="author-name">
              <span>{property.agentName}</span>
            </p>

            <p className="author-title">Date added: {property.dateAddedLabel}</p>
          </div>
        </div>

        <PropertyActions property={property} />
      </div>
    </article>
  )
}

