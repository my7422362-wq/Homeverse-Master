import { PropertyFilters } from './PropertyFilters'
import { PropertyGrid } from './PropertyGrid'
import { useFeaturedLuxuryProperties } from './useFeaturedLuxuryProperties'

export function FeaturedLuxuryPropertiesSection() {
  const {

    filters,
    setFilters,
    filteredAndSorted,
    onSearch,
    sortByValue,
    setSortByValue,
  } = useFeaturedLuxuryProperties()

  return (
    <section className="featured-lux" aria-label="Featured Luxury Properties" id="featured-luxury-properties">
      <div className="container">
        <p className="section-subtitle">Featured Luxury Properties</p>
        
        <p className="featured-lux-subtitle">
          Discover hand-picked premium homes selected by our real estate experts.
        </p>



        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
          sortByValue={sortByValue}
          setSortByValue={setSortByValue}
          onSearch={onSearch}
        />

        <PropertyGrid properties={filteredAndSorted} />
      </div>
    </section>
  )
}

