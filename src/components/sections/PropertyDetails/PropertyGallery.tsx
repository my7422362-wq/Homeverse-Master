import { useMemo, useState } from 'react'
import type { PropertyCard as PropertyCardModel } from '../../../types/property'
import { cn } from '../../../utils/cn'

const buildGallery = (property: PropertyCardModel) => {
  // Uses the property's main image plus a deterministic set derived from its id
  // (no layout placeholders: images come from existing public/images set).
  const base = property.imageSrc
  const id = property.id

  // Common public images for the project.
  const candidates = [
    '/images/property-1.jpg',
    '/images/property-2.jpg',
    '/images/property-3.jpg',
    '/images/property-4.png',
  ]

  // Deterministic pick (so each property has stable visuals)
  const idx = Math.abs(hashCode(id)) % candidates.length
  const picked = [candidates[idx], candidates[(idx + 1) % candidates.length], candidates[(idx + 2) % candidates.length]]

  // Ensure we include the real property image.
  const merged = [picked[0], base, picked[1], picked[2]]
  return merged.filter(Boolean)
}

function hashCode(input: string) {
  let hash = 0
  for (let i = 0; i < input.length; i += 1) hash = (hash * 31 + input.charCodeAt(i)) | 0
  return hash
}

export function PropertyGallery({ property }: { property: PropertyCardModel }) {
  const images = useMemo(() => buildGallery(property), [property])
  const [activeIndex, setActiveIndex] = useState(0)

  const activeImage = images[activeIndex] ?? property.imageSrc

  return (
    <section className="pd-gallery" aria-label="Property gallery">
      <div className="container pd-container">
        <div className="pd-gallery-layout">
          <div className="pd-gallery-main">
            <div className="pd-media-frame">
              <img
                src={activeImage}
                alt={`${property.title} - gallery image ${activeIndex + 1}`}
                className="pd-media"
                loading="eager"
              />
              <div className="pd-media-overlay" />
              <div className="pd-media-badge">Gallery</div>
            </div>
          </div>

          <div className="pd-gallery-thumbs" role="list" aria-label="Gallery thumbnails">
            {images.map((src, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={`${src}-${idx}`}
                  type="button"
                  className={cn('pd-thumb', isActive && 'is-active')}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img src={src} alt="Thumbnail" className="pd-thumb-img" loading="lazy" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

