import { useMemo, useState } from 'react'
import { featuredProperties } from '../../../data/featuredProperties'


import type { FeaturedProperty } from '../../../types/property'



export type PriceRangeValue = 'any' | '300000-500000' | '500000-800000' | '800000-1200000'

export type SortByValue = 'featured-desc' | 'price-asc' | 'price-desc' | 'newest'

export type PropertyFiltersState = {
  search: string
  propertyType: 'any' | FeaturedProperty['propertyType']
  status: 'any' | FeaturedProperty['status']
  location: 'any' | string
  priceRange: PriceRangeValue
  bedrooms: 'any' | number
  bathrooms: 'any' | number
}

function parsePriceToNumber(price: string) {
  // expects formats like "$2,450,000" or "$1.2M" (we will generate $ with commas)
  const digits = price.replace(/[^0-9]/g, '')
  return digits ? Number(digits) : 0
}

function matchesPriceRange(price: string, range: PriceRangeValue) {
  if (range === 'any') return true
  const n = parsePriceToNumber(price)

  const [minRaw, maxRaw] = range.split('-')
  const min = Number(minRaw)
  const max = Number(maxRaw)

  return n >= min && n <= max
}

export function useFeaturedLuxuryProperties() {
  const [filters, setFilters] = useState<PropertyFiltersState>({
    search: '',
    propertyType: 'any',
    status: 'any',
    location: 'any',
    priceRange: 'any',
    bedrooms: 'any',
    bathrooms: 'any',
  })

  const [sortByValue, setSortByValue] = useState<SortByValue>('featured-desc')
  const [queryVersion, setQueryVersion] = useState(0)

  const locations = useMemo(() => {
    const set = new Set<string>()
    for (const p of featuredProperties) set.add(p.location)

    return Array.from(set).sort((a, b) => a.localeCompare(b))
  }, [])


  const onSearch = () => {
    setQueryVersion((v) => v + 1)
  }

  const filteredAndSorted = useMemo(() => {
    // queryVersion is used only to trigger recompute on button click
    void queryVersion

    const searchQ = filters.search.trim().toLowerCase()

    const result = featuredProperties

      .filter((p) => {
        if (filters.propertyType !== 'any' && p.propertyType !== filters.propertyType) return false
        if (filters.status !== 'any' && p.status !== filters.status) return false
        if (filters.location !== 'any' && p.location !== filters.location) return false
        if (!matchesPriceRange(p.price, filters.priceRange)) return false
        if (filters.bedrooms !== 'any' && p.bedrooms < filters.bedrooms) return false
        if (filters.bathrooms !== 'any' && p.bathrooms < filters.bathrooms) return false

        if (searchQ) {
          const hay = [p.title, p.address, p.location, p.propertyType].join(' ').toLowerCase()
          if (!hay.includes(searchQ)) return false
        }

        return true
      })
      .slice()

    result.sort((a, b) => {
      if (sortByValue === 'featured-desc') {
        // featuredScore is implicit: use dateAdded as proxy (newer + featured)
        return b.featuredScore - a.featuredScore
      }
      if (sortByValue === 'newest') return b.dateAddedMs - a.dateAddedMs

      const pa = parsePriceToNumber(a.price)
      const pb = parsePriceToNumber(b.price)

      if (sortByValue === 'price-asc') return pa - pb
      if (sortByValue === 'price-desc') return pb - pa
      return 0
    })

    return result
  }, [filters, sortByValue, queryVersion])

  return {
    filters,
    setFilters: (next: PropertyFiltersState) => setFilters(next),
    locations,
    filteredAndSorted,
    onSearch,
    sortByValue,
    setSortByValue,
  }
}

