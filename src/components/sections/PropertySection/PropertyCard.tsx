import { Link } from 'react-router-dom'
import { Camera, Film, Heart, MapPin, PlusCircle, Move, BedDouble, DivideSquare, Shield } from 'lucide-react'

import type { PropertyCard as PropertyCardModel } from '../../../types/property'

function BannerIcon({ kind }: { kind: 'location' | 'camera' | 'film' }) {

  if (kind === 'location') return <MapPin size={16} />
  if (kind === 'camera') return <Camera size={16} />
  return <Film size={16} />
}

function FooterIcon({ kind }: { kind: 'resize' | 'heart' | 'add-circle' }) {
  if (kind === 'resize') return <Move size={18} />

  if (kind === 'heart') return <Heart size={18} />
  return <PlusCircle size={18} />
}

export function PropertyCard({ property }: { property: PropertyCardModel }) {
  return (
    <div className="property-card">
      <figure className="card-banner">
        <Link to={`/properties/${property.id}`}>
          <img src={property.imageSrc} alt={property.imageAlt} className="w-100" loading="lazy" />
        </Link>


        <div className={`card-badge ${property.badgeVariant}`}>{property.badgeLabel}</div>

        <div className="banner-actions">
          {property.bannerActions.map((a) => (
            <button key={`${property.id}-${a.icon}`} className="banner-actions-btn" type="button">
              <BannerIcon kind={a.icon} />
              {a.icon === 'location' ? <address>{a.value}</address> : <span>{a.value}</span>}
            </button>
          ))}
        </div>
      </figure>

      <div className="card-content">
        <div className="card-price">
          <strong>{property.price.split('/')[0]}</strong>/{property.price.split('/')[1]}
        </div>

        <h3 className="h3 card-title">
          <Link to={`/properties/${property.id}`}>{property.title}</Link>
        </h3>



        <p className="card-text">{property.description}</p>

        <ul className="card-list">
          {property.amenities.map((am) => (
            <li key={am.label} className="card-item">
              <strong>{am.value}</strong>
              {am.label === 'Bedrooms' ? <BedDouble size={16} /> : null}
              {am.label === 'Bathrooms' ? <Shield size={16} /> : null}
              {am.label === 'Square Ft' ? <DivideSquare size={16} /> : null}
              <span>{am.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card-footer">
        <div className="card-author">
          <figure className="author-avatar">
            <img src={property.authorAvatarSrc} alt={property.authorName} className="w-100" loading="lazy" />
          </figure>
          <div>
            <p className="author-name">
              <span>{property.authorName}</span>
            </p>

            <p className="author-title">{property.authorTitle}</p>
          </div>
        </div>

        <div className="card-footer-actions">
          {property.footerActions.map((fa) => (
            <button key={fa.icon} className="card-footer-actions-btn" type="button">
              <FooterIcon kind={fa.icon} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

