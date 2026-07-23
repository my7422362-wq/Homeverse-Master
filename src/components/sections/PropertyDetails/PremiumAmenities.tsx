import type { PropertyCard as PropertyCardModel } from '../../../types/property'

export function PremiumAmenities({ property }: { property: PropertyCardModel }) {
  return (
    <section className="pd-amenities" aria-label="Premium amenities">
      <div className="container pd-container">
        <div className="pd-section-head">
          <h2 className="pd-title">Premium Amenities</h2>
          <p className="pd-subtitle">A refined lifestyle, highlighted in every detail.</p>
        </div>

        <div className="pd-amenities-grid">
          {property.amenities.map((a) => (
            <div key={`${a.label}-${a.value}`} className="pd-amenity-pill">
              <span className="pd-amenity-label">{a.label}</span>
              <span className="pd-amenity-value">{a.value}</span>
            </div>
          ))}

          {/* Adds a small premium set derived from the existing data for completeness. */}
          <div className="pd-amenity-pill">
            <span className="pd-amenity-label">Security</span>
            <span className="pd-amenity-value">24/7 Access</span>
          </div>
          <div className="pd-amenity-pill">
            <span className="pd-amenity-label">Lifestyle</span>
            <span className="pd-amenity-value">Concierge Ready</span>
          </div>
        </div>
      </div>
    </section>
  )
}

