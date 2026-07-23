import type { PropertyFiltersState, SortByValue } from './useFeaturedLuxuryProperties'


export function PropertyFilters({
  filters,
  setFilters,
  sortByValue,
  setSortByValue,
  onSearch,
}: {
  filters: PropertyFiltersState
  setFilters: (next: PropertyFiltersState) => void
  sortByValue: SortByValue
  setSortByValue: (v: SortByValue) => void
  onSearch: () => void
}) {
  const update = <K extends keyof PropertyFiltersState>(key: K, value: PropertyFiltersState[K]) => {
    setFilters({ ...filters, [key]: value })
  }

  return (
    <div className="lux-filterbar" role="region" aria-label="Property filters">
      <div className="lux-filter-grid">
        <div className="lux-filter-field">
          <label className="lux-filter-label">Search</label>
          <input
            className="lux-filter-input"
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
            placeholder="Search by name, city, or address"
          />
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Property Type</label>
          <select
            className="lux-filter-select"
            value={filters.propertyType}
            onChange={(e) => update('propertyType', e.target.value as PropertyFiltersState['propertyType'])}
          >
            <option value="any">Any</option>
            <option value="Villa">Villa</option>
            <option value="Penthouse">Penthouse</option>
            <option value="Townhome">Townhome</option>
            <option value="Condo">Condo</option>
          </select>
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Status</label>
          <select
            className="lux-filter-select"
            value={filters.status}
            onChange={(e) => update('status', e.target.value as PropertyFiltersState['status'])}
          >
            <option value="any">Any</option>
            <option value="For Rent">For Rent</option>
            <option value="For Sales">For Sales</option>
          </select>
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Location</label>
          <input
            className="lux-filter-input"
            value={filters.location === 'any' ? '' : filters.location}
            onChange={(e) => update('location', (e.target.value ? e.target.value : 'any') as any)}
            placeholder="e.g. Beverly Hills"
          />
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Price Range</label>
          <select
            className="lux-filter-select"
            value={filters.priceRange}
            onChange={(e) => update('priceRange', e.target.value as PropertyFiltersState['priceRange'])}
          >
            <option value="any">Any</option>
            <option value="300000-500000">$300k - $500k</option>
            <option value="500000-800000">$500k - $800k</option>
            <option value="800000-1200000">$800k - $1.2M</option>
          </select>
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Bedrooms</label>
          <select
            className="lux-filter-select"
            value={filters.bedrooms}
            onChange={(e) => update('bedrooms', (e.target.value === 'any' ? 'any' : Number(e.target.value)) as any)}
          >
            <option value="any">Any</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Bathrooms</label>
          <select
            className="lux-filter-select"
            value={filters.bathrooms}
            onChange={(e) => update('bathrooms', (e.target.value === 'any' ? 'any' : Number(e.target.value)) as any)}
          >
            <option value="any">Any</option>
            <option value={2}>2+</option>
            <option value={3}>3+</option>
            <option value={4}>4+</option>
          </select>
        </div>

        <div className="lux-filter-field">
          <label className="lux-filter-label">Sort By</label>
          <select className="lux-filter-select" value={sortByValue} onChange={(e) => setSortByValue(e.target.value as SortByValue)}>
            <option value="featured-desc">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price (Low)</option>
            <option value="price-desc">Price (High)</option>
          </select>
        </div>

        <div className="lux-filter-actions">
          <button type="button" className="lux-filter-search-btn" onClick={onSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

