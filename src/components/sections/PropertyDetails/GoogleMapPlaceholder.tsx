export function GoogleMapPlaceholder() {
  return (
    <section className="pd-map" aria-label="Google map placeholder">
      <div className="container pd-container">
        <div className="pd-section-head">
          <h2 className="pd-title">Location</h2>
          <p className="pd-subtitle">Find your next destination with a premium map preview.</p>
        </div>

        <div className="pd-map-frame" role="img" aria-label="Map placeholder">
          <div className="pd-map-grid" aria-hidden="true" />
          <div className="pd-map-pin" aria-hidden="true" />
          <div className="pd-map-label">Google Map Placeholder</div>
        </div>
      </div>
    </section>
  )
}

