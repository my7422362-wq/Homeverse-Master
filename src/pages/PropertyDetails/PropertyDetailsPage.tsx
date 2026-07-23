import { useMemo } from 'react'
import { featuredProperties } from '../../data/featuredProperties'
import { Home, AlertTriangle } from 'lucide-react'

const GALLERY_IMAGES = [
  '/images/property-1.jpg',
  '/images/property-2.jpg',
  '/images/property-3.jpg',
  '/images/property-4.png',
]

const FEATURES_LIST = [
  { label: 'Swimming Pool', icon: '🏊' },
  { label: 'Private Garden', icon: '🌿' },
  { label: 'Smart Home', icon: '🏠' },
  { label: 'Parking', icon: '🅿️' },
  { label: 'Security', icon: '🛡️' },
  { label: 'Gym', icon: '💪' },
  { label: 'Club House', icon: '🏛️' },
  { label: 'High-Speed Internet', icon: '📶' },
  { label: 'Kids Area', icon: '🎨' },
]

const WHATSAPP_NUMBER = '201013556821'
const WHATSAPP_MESSAGE = encodeURIComponent('Hello, I am interested in this property.')

export function PropertyDetailsPage({ slug }: { slug?: string }) {
  const property = useMemo(
    () => featuredProperties.find((p) => p.slug === slug),
    [slug],
  )

  // 404 — Invalid slug
  if (!property) {
    return (
      <main className="pd-page min-h-screen flex items-center justify-center">
        <section className="container">
          <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-12 text-center">
            <div className="mx-auto w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <AlertTriangle size={28} className="text-[#C89B3C]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3">Property Not Found</h1>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              The property you're looking for doesn't exist or may have been removed from our portfolio.
            </p>
            <a
              href="/"
              className="pd-btn pd-btn-primary inline-flex items-center gap-2"
            >
              <Home size={18} />
              Back to Properties
            </a>
          </div>
        </section>
      </main>
    )
  }

  // Generate gallery with deterministic images
  const galleryImages = useMemo(() => {
    const idx = Math.abs(hashCode(property.id)) % GALLERY_IMAGES.length
    const result = [property.imageSrc]
    for (let i = 1; i < 4; i++) {
      const src = GALLERY_IMAGES[(idx + i) % GALLERY_IMAGES.length]
      if (src !== property.imageSrc) result.push(src)
    }
    return result
  }, [property])

  return (
    <main className="pd-page">
      {/* ===== LARGE HERO IMAGE ===== */}
      <section className="pd-hero-image" aria-label="Property hero">
        <div className="pd-hero-media">
          <img src={galleryImages[0]} alt={property.title} className="pd-hero-img" />
          <div className="pd-hero-overlay" />
          <div className="pd-hero-content">
            <div className="container pd-container">
              <div className="pd-hero-badge">{property.propertyType}</div>
              <h1 className="pd-h1">{property.title}</h1>
              <p className="pd-location">{property.location} — {property.district}</p>
              <div className="pd-meta">
                <div className="pd-meta-price">{property.price}</div>
                <div className="pd-meta-status">{property.status}</div>
              </div>
              {/* Quick Features */}
              <div className="pd-quick-features">
                <div className="pd-qf-item">
                  <span className="pd-qf-value">{property.bedrooms}</span>
                  <span className="pd-qf-label">Bedrooms</span>
                </div>
                <div className="pd-qf-item">
                  <span className="pd-qf-value">{property.bathrooms}</span>
                  <span className="pd-qf-label">Bathrooms</span>
                </div>
                <div className="pd-qf-item">
                  <span className="pd-qf-value">{property.areaSqft.toLocaleString()}</span>
                  <span className="pd-qf-label">Sq Ft</span>
                </div>
                <div className="pd-qf-item">
                  <span className="pd-qf-value">{property.garage}</span>
                  <span className="pd-qf-label">Parking</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMAGE GALLERY ===== */}
      <PropertyDetailGallery images={galleryImages} propertyTitle={property.title} />

      {/* ===== DESCRIPTION ===== */}
      <section className="pd-section" aria-label="Property description">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Property Description</h2>
            <p className="pd-subtitle">A closer look at this exceptional residence.</p>
          </div>
          <div className="pd-description-text">
            <p>{property.shortDescription}</p>
            <p className="pd-description-long">{property.longDescription}</p>
          </div>
        </div>
      </section>

      {/* ===== PROPERTY FEATURES ===== */}
      <section className="pd-section" aria-label="Property features">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Property Features</h2>
            <p className="pd-subtitle">Every detail designed for premium living.</p>
          </div>
          <div className="pd-features-grid">
            {FEATURES_LIST.map((f) => {
              const amenity = property.amenities.find((a) => a.label === f.label)
              return (
                <div key={f.label} className="pd-feature-card">
                  <div className="pd-feature-icon">{f.icon}</div>
                  <div className="pd-feature-label">{f.label}</div>
                  <div className="pd-feature-value">{amenity?.value || 'Available'}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== PROPERTY SPECIFICATIONS ===== */}
      <section className="pd-section" aria-label="Property specifications">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Property Specifications</h2>
            <p className="pd-subtitle">Detailed specifications at a glance.</p>
          </div>
          <div className="pd-specs-grid">
            <SpecItem label="Property Type" value={property.specifications.propertyType} />
            <SpecItem label="Finishing" value={property.specifications.finishing} />
            <SpecItem label="Delivery Date" value={property.specifications.deliveryDate} />
            <SpecItem label="Ownership" value={property.specifications.ownership} />
            <SpecItem label="View" value={property.specifications.view} />
            <SpecItem label="Floor" value={property.specifications.floor} />
          </div>
        </div>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section className="pd-map" aria-label="Location">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Location</h2>
            <p className="pd-subtitle">Prime address with world-class surroundings.</p>
          </div>
          <div className="pd-map-frame" role="img" aria-label="Map placeholder">
            <div className="pd-map-grid" aria-hidden="true" />
            <div className="pd-map-pin" aria-hidden="true" />
            <div className="pd-map-label">Google Map Placeholder</div>
          </div>
          <div className="pd-location-details">
            <div className="pd-location-address">
              <strong>Address:</strong> {property.mapLocation.address}
            </div>
            <div className="pd-location-grid">
              <div className="pd-location-card">
                <div className="pd-location-card-title">🏫 Nearby Schools</div>
                <ul className="pd-location-list">
                  {property.mapLocation.nearbySchools.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </div>
              <div className="pd-location-card">
                <div className="pd-location-card-title">🏥 Nearby Hospitals</div>
                <ul className="pd-location-list">
                  {property.mapLocation.nearbyHospitals.map((h) => <li key={h}>{h}</li>)}
                </ul>
              </div>
              <div className="pd-location-card">
                <div className="pd-location-card-title">🛍️ Nearby Malls</div>
                <ul className="pd-location-list">
                  {property.mapLocation.nearbyMalls.map((m) => <li key={m}>{m}</li>)}
                </ul>
              </div>
              <div className="pd-location-card">
                <div className="pd-location-card-title">✈️ Nearby Airport</div>
                <p className="pd-location-value">{property.mapLocation.nearbyAirport}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AGENT CARD ===== */}
      <section className="pd-section" aria-label="Agent information">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Your Agent</h2>
            <p className="pd-subtitle">Expert guidance for your exclusive journey.</p>
          </div>
          <div className="pd-agent-card">
            <div className="pd-agent-card-left">
              <div className="pd-agent-photo-lg">
                <img src={property.agent.photo} alt={property.agent.name} />
              </div>
              <div>
                <div className="pd-agent-name-lg">{property.agent.name}</div>
                <div className="pd-agent-title">{property.agent.title}</div>
              </div>
            </div>
            <div className="pd-agent-card-right">
              <div className="pd-agent-contact-info">
                <div className="pd-agent-contact-item">
                  <span className="pd-contact-label">Phone</span>
                  <span className="pd-contact-value">{property.agent.phone}</span>
                </div>
                <div className="pd-agent-contact-item">
                  <span className="pd-contact-label">Email</span>
                  <span className="pd-contact-value">{property.agent.email}</span>
                </div>
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-btn pd-btn-whatsapp"
              >
                💬 WhatsApp Agent
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STICKY BOOKING CARD ===== */}
      <div className="pd-sticky-booking">
        <div className="container pd-container">
          <div className="pd-sticky-inner">
            <div className="pd-sticky-price">
              <span className="pd-sticky-price-label">Price</span>
              <span className="pd-sticky-price-value">{property.price}</span>
            </div>
            <div className="pd-sticky-actions">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-btn pd-btn-primary pd-btn-sm"
              >
                📅 Book Private Tour
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="pd-btn pd-btn-secondary pd-btn-sm"
              >
                📞 Request Callback
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ===== RELATED PROPERTIES ===== */}
      <section className="pd-similar" aria-label="Similar properties">
        <div className="container pd-container">
          <div className="pd-section-head">
            <h2 className="pd-title">Similar Properties</h2>
            <p className="pd-subtitle">Discover more luxury listings you may love.</p>
          </div>
          <div className="pd-similar-grid">
            {featuredProperties
              .filter((p) => p.slug !== property.slug)
              .slice(0, 3)
              .map((p) => (
                <a key={p.id} href={`/properties/${p.slug}`} className="pd-similar-card">
                  <div className="pd-similar-media">
                    <img src={p.imageSrc} alt={p.imageAlt} className="pd-similar-img" loading="lazy" />
                    <div className="pd-similar-badge pd-similar-badge--green">{p.propertyType}</div>
                  </div>
                  <div className="pd-similar-content">
                    <div className="pd-similar-price">{p.price}</div>
                    <div className="pd-similar-title">{p.title}</div>
                    <div className="pd-similar-location">{p.location}</div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="pd-spec-card">
      <div className="pd-spec-label">{label}</div>
      <div className="pd-spec-value">{value}</div>
    </div>
  )
}

function PropertyDetailGallery({ images, propertyTitle }: { images: string[]; propertyTitle: string }) {
  return (
    <section className="pd-gallery" aria-label="Property gallery">
      <div className="container pd-container">
        <div className="pd-gallery-layout">
          <div className="pd-gallery-main">
            <div className="pd-media-frame">
              <img
                src={images[0]}
                alt={`${propertyTitle} main view`}
                className="pd-media"
                loading="eager"
              />
              <div className="pd-media-overlay" />
              <div className="pd-media-badge">Gallery</div>
            </div>
          </div>
          <div className="pd-gallery-thumbs" role="list" aria-label="Gallery thumbnails">
            {images.slice(1).map((src, idx) => (
              <button
                key={`${src}-${idx}`}
                type="button"
                className="pd-thumb"
                aria-label={`View image ${idx + 2}`}
              >
                <img src={src} alt="Thumbnail" className="pd-thumb-img" loading="lazy" />
              </button>
            ))}
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

