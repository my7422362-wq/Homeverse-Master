import type { PropertyCard as PropertyCardModel } from '../../../types/property'

export function AgentCard({ property }: { property: PropertyCardModel }) {
  return (
    <aside className="pd-agent" aria-label="Agent information">
      <div className="pd-glass-card">
        <div className="pd-agent-top">
          <div className="pd-agent-photo">
            <img src={property.authorAvatarSrc} alt={property.authorName} className="pd-agent-img" loading="lazy" />
          </div>

          <div>
            <div className="pd-agent-name">{property.authorName}</div>
            <div className="pd-agent-position">{property.authorTitle}</div>
          </div>
        </div>

        <div className="pd-agent-divider" />

        <div className="pd-agent-contact">
          <ContactRow label="Phone" value="+1 (555) 013-2048" />
          <ContactRow label="Email" value="agent@homeverse.com" />
        </div>

        <div className="pd-agent-actions">
          <a href="#booking" className="pd-btn pd-btn-secondary">
            Contact Agent
          </a>
        </div>
      </div>
    </aside>
  )
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="pd-contact-row">
      <div className="pd-contact-label">{label}</div>
      <div className="pd-contact-value">{value}</div>
    </div>
  )
}

