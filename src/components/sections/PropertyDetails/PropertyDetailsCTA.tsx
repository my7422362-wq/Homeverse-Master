import type { PropertyCard as PropertyCardModel } from '../../../types/property'

export function PropertyDetailsCTA({ property }: { property: PropertyCardModel }) {
  return (
    <section className="pd-cta" aria-label="Call to action">
      <div className="container pd-container">
        <div className="pd-cta-card">
          <div className="pd-cta-content">
            <div className="pd-cta-title">Ready to experience {property.title}?</div>
            <div className="pd-cta-text">Book an exclusive viewing and unlock premium guidance from our agent team.</div>
          </div>
          <a href="#booking" className="pd-btn pd-btn-secondary">
            Book Now
          </a>
        </div>
      </div>
    </section>
  )
}

