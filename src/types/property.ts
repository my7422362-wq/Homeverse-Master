export type ListingCategory = 'For Rent' | 'For Sales'

export interface PropertyAmenity {
  label: string
  value: string
}

export interface PropertyBannerAction {
  icon: 'location' | 'camera' | 'film'
  value: string
}

export interface PropertyCardFooterAction {
  icon: 'resize' | 'heart' | 'add-circle'
}

export interface PropertyCard {
  id: string
  badgeLabel: string
  badgeVariant: 'green' | 'orange'
  imageSrc: string
  imageAlt: string
  price: string
  title: string
  description: string
  amenities: PropertyAmenity[]
  bannerActions: PropertyBannerAction[]
  authorName: string
  authorTitle: string
  authorAvatarSrc: string
  footerActions: PropertyCardFooterAction[]
}

export type FeaturedPropertyType = 'Villa' | 'Penthouse' | 'Townhome' | 'Condo'
export type FeaturedPropertyStatus = 'For Rent' | 'For Sales'

export interface PropertyAgent {
  name: string
  photo: string
  phone: string
  email: string
  title: string
}

export interface PropertyMapLocation {
  lat: number
  lng: number
  address: string
  nearbySchools: string[]
  nearbyHospitals: string[]
  nearbyMalls: string[]
  nearbyAirport: string
}

export interface PropertySpecifications {
  propertyType: string
  finishing: string
  deliveryDate: string
  ownership: string
  view: string
  floor: string
}

export interface FeaturedProperty {
  id: string
  slug: string
  featuredLabel: string
  featured: boolean
  featuredScore: number

  propertyType: FeaturedPropertyType
  status: FeaturedPropertyStatus
  location: string
  district: string

  imageSrc: string
  imageAlt: string

  price: string
  title: string
  address: string
  shortDescription: string
  longDescription: string

  propertyFeatures: string[]

  bedrooms: number
  bathrooms: number
  garage: string
  areaSqft: number

  agent: PropertyAgent
  agentAvatarSrc: string
  agentName: string

  dateAddedMs: number
  dateAddedLabel: string

  gallery: string[]
  amenities: { label: string; value: string }[]
  floorPlan: string
  mapLocation: PropertyMapLocation
  specifications: PropertySpecifications
}


