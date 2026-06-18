import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'
import { debounce } from '../utils/debounce'

const products = productsData as Product[]

function Search() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')

  const debouncedSetQuery = useMemo(() => debounce(setDebouncedQuery, 300), [])

  function handleChange(value: string) {
    setQuery(value)
    debouncedSetQuery(value)
  }

  const results = debouncedQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      )
    : []

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 px-4 pt-6">
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
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4">
        {debouncedQuery && results.length === 0 && (
          <p className="mt-10 text-center text-gray-400">
            No products found for &quot;{debouncedQuery}&quot;
          </p>
        )}
        <div className="grid grid-cols-2 gap-3">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  )
}

export default Search
