import type { PropertyCard as PropertyCardModel } from '../../../types/property'

export function PropertyHeader({ property }: { property: PropertyCardModel }) {
  return (
    <section className="pd-header" aria-label="Property header">
      <div className="container pd-container">
        <div className="pd-header-grid">
          <div className="pd-header-left">
            <div className="pd-kicker">{property.badgeLabel}</div>
            <h1 className="pd-h1">{property.title}</h1>
            <p className="pd-location">{property.description ? property.description.split(' ').slice(0, 3).join(' ') + ' • ' : ''} {property.imageAlt}</p>
            <div className="pd-meta">
              <div className="pd-meta-price">{property.price}</div>
              <div className="pd-meta-status">Status: {property.badgeLabel}</div>
            </div>

            <p className="pd-description">{property.description}</p>
          </div>

          <div className="pd-header-right">
            <div className="pd-glass-card pd-highlight">
              <div className="pd-highlight-row">
                <span className="pd-highlight-label">Location</span>
                <span className="pd-highlight-value">{property.imageAlt}</span>
              </div>
              <div className="pd-highlight-row">
                <span className="pd-highlight-label">Property Type</span>
                <span className="pd-highlight-value">Luxury Listing</span>
              </div>
              <div className="pd-highlight-row">
                <span className="pd-highlight-label">Availability</span>
                <span className="pd-highlight-value">Premium Concierge</span>
              </div>

              <div className="pd-highlight-actions">
                <a href="#booking" className="pd-btn pd-btn-primary">
                  Schedule Viewing
                </a>
                <a href="#amenities" className="pd-link">Explore Amenities</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

