import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import { debounce } from '../utils/debounce'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import ThemeToggle from './ThemeToggle'

const products = productsData as Product[]

const NAV_ITEMS = [
  { to: '/home', label: 'Shop' },
  { to: '/explore', label: 'Explore' },
  { to: '/cart', label: 'Cart' },
  { to: '/favourites', label: 'Favourite' },
  { to: '/account', label: 'Account' },
]

function TopNav() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [debouncedQuery, setDebouncedQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const debouncedSetQuery = useMemo(() => debounce(setDebouncedQuery, 300), [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function handleChange(value: string) {
    setQuery(value)
    debouncedSetQuery(value)
    setIsOpen(true)
  }

  function goToProduct(id: string) {
    navigate(`/product/${id}`)
    setIsOpen(false)
    setQuery('')
    setDebouncedQuery('')
  }

  const results = debouncedQuery
    ? products.filter((product) =>
        product.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
      )
    : []

  return (
    <header className="hidden border-b border-gray-100 px-8 py-3 dark:border-gray-800 lg:block">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-6">
        <button
          type="button"
          onClick={() => navigate('/home')}
          className="shrink-0 text-2xl"
          aria-label="Go to home"
        >
          🥕
        </button>

        <div ref={containerRef} className="relative w-full max-w-md">
          <input
            type="search"
            value={query}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search Store"
            className="w-full rounded-lg bg-gray-100 px-4 py-2 text-sm outline-none dark:bg-gray-800 dark:text-white"
          />

          {isOpen && debouncedQuery && (
            <div className="absolute left-0 top-full z-30 mt-2 max-h-96 w-[480px] overflow-y-auto rounded-xl border border-gray-100 bg-white p-4 shadow-xl dark:border-gray-700 dark:bg-gray-800">
              {results.length === 0 ? (
                <p className="py-6 text-center text-sm text-gray-400">
                  No products found for &quot;{debouncedQuery}&quot;
                </p>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  {results.map((product) => {
                    const image = getProductImage(product.id)
                    return (
                      <button
                        key={product.id}
                        type="button"
                        onClick={() => goToProduct(product.id)}
                        className="flex items-center gap-2 rounded-lg p-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                          {image ? (
                            <img src={image} alt={product.name} className="h-full object-contain" />
                          ) : (
                            <span className="text-xl" aria-hidden="true">
                              {getCategoryPlaceholderEmoji(product.category)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {product.name}
                          </p>
                          <p className="text-xs text-gray-400">${product.price.toFixed(2)}</p>
                        </div>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <span aria-hidden="true">📍</span>
          Dhaka, Banassre
        </div>

        <ThemeToggle />

        <nav className="flex shrink-0 items-center gap-5 text-sm font-medium">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'text-emerald-600' : 'text-gray-500 dark:text-gray-400'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default TopNav
