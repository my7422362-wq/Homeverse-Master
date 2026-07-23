export function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Mobile background image overlay — only visible on mobile */}
      <div className="hero-mobile-bg" aria-hidden="true" />

      <div className="hero-layout container">
        <div className="hero-left">
          <div className="hero-left-inner">
            {/* Small label — "LUXURY REAL ESTATE" */}
            <p className="hero-label hero-anim-fade" style={{ '--anim-delay': '0ms' } as React.CSSProperties}>
              LUXURY REAL ESTATE
            </p>

            <h1 className="hero-h1 hero-anim-fade" style={{ '--anim-delay': '120ms' } as React.CSSProperties}>
              Discover Your Future:
              <br />
              Find The Perfect Property
            </h1>

            <p className="hero-p hero-anim-fade" style={{ '--anim-delay': '240ms' } as React.CSSProperties}>
              Luxury living curated for those who expect excellence—from first viewing to final keys.
            </p>

            <div
              className="hero-left-actions hero-anim-fade"
              style={{ '--anim-delay': '400ms' } as React.CSSProperties}
            >
              <a
                className="lux-primary-btn"
                href="#featured-luxury-properties"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('featured-luxury-properties')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                Explore Properties <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-right" aria-hidden="true">
          <div className="villa-wrap">
            <div className="villa-glow" />
            <div className="villa">
              <div className="villa-base" />
              <div className="villa-body" />
              <div className="villa-roof" />
              <div className="villa-windows" />
              <div className="villa-edges" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



