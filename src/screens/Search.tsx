import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import ProductCard from '../components/ProductCard'
import MainLayout from '../components/MainLayout'
import { debounce } from '../utils/debounce'
import { useFilterStore } from '../store/filterStore'
import filterIcon from '../assets/figma/Group 6839.png'

const products = productsData as Product[]

function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const categories = useFilterStore((state) => state.categories)
  const brands = useFilterStore((state) => state.brands)

  const debouncedSetQuery = useMemo(() => debounce(setDebouncedQuery, 300), [])

  function handleChange(value: string) {
    setQuery(value)
    debouncedSetQuery(value)
  }

  const results = debouncedQuery
    ? products.filter((product) => {
        const matchesQuery = product.name
          .toLowerCase()
          .includes(debouncedQuery.toLowerCase())
        const matchesCategory =
          categories.length === 0 || categories.includes(product.category)
        const matchesBrand = brands.length === 0 || brands.includes(product.brand)
        return matchesQuery && matchesCategory && matchesBrand
      })
    : []

  return (
    <MainLayout>
      <div className="flex items-center gap-3 px-4 pt-6 lg:mx-auto lg:w-full lg:max-w-5xl">
        <button type="button" onClick={() => navigate(-1)} className="text-2xl dark:text-white">
          ‹
        </button>
        <input
          type="search"
          autoFocus
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search Store"
          className="flex-1 rounded-lg bg-gray-100 px-4 py-3 text-sm outline-none dark:bg-gray-800 dark:text-white"
        />
        <button
          type="button"
          onClick={() => navigate('/filters')}
          aria-label="Open filters"
        >
          <img src={filterIcon} alt="" className="h-4 w-4 dark:invert" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4 lg:mx-auto lg:w-full lg:max-w-5xl">
        {debouncedQuery && results.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            No products found for &quot;{debouncedQuery}&quot;
          </p>
        )}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Search
