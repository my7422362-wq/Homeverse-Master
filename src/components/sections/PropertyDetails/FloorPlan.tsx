import type { PropertyCard as PropertyCardModel } from '../../../types/property'

export function FloorPlan({ property }: { property: PropertyCardModel }) {
  // Uses the project's existing images to avoid broken placeholders.
  const plans = ['/images/property-1.jpg', '/images/property-2.jpg', '/images/property-3.jpg', '/images/property-4.png']
  const idx = Math.abs(hashCode(property.id)) % plans.length

  return (
    <section className="pd-floor" aria-label="Floor plan">
      <div className="container pd-container">
        <div className="pd-section-head">
          <h2 className="pd-title">Floor Plan</h2>
          <p className="pd-subtitle">Designed to maximize flow, light, and comfort.</p>
        </div>

        <div className="pd-floor-layout">
          <div className="pd-floor-plan">
            <img src={plans[idx]} alt={`${property.title} floor plan preview`} className="pd-floor-img" />
            <div className="pd-floor-overlay" />
            <div className="pd-floor-chip">Plan A</div>
          </div>

          <div className="pd-floor-notes">
            <div className="pd-glass-card">
              <div className="pd-note-title">At a glance</div>
              <ul className="pd-note-list">
                <li>Open living concept</li>
                <li>Private bedroom wing</li>
                <li>Premium finishing throughout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function hashCode(input: string) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) hash = (hash * 31 + input.charCodeAt(i)) | 0
  return hash
}

