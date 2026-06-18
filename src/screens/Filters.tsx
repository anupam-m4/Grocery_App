import { useNavigate } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import { ProductCategory } from '../types/product'
import { CATEGORY_LABELS } from '../data/categories'
import { useFilterStore } from '../store/filterStore'

const products = productsData as Product[]
const CATEGORIES = Object.values(ProductCategory)
const BRANDS = Array.from(new Set(products.map((product) => product.brand)))

function Filters() {
  const navigate = useNavigate()
  const categories = useFilterStore((state) => state.categories)
  const brands = useFilterStore((state) => state.brands)
  const toggleCategory = useFilterStore((state) => state.toggleCategory)
  const toggleBrand = useFilterStore((state) => state.toggleBrand)

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 pt-6">
        <button type="button" onClick={() => navigate(-1)} className="text-2xl dark:text-white">
          ✕
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h1>
        <span className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-6">
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          Categories
        </h2>
        <div className="mb-8 flex flex-col gap-4">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={categories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="h-5 w-5 accent-emerald-500"
              />
              <span
                className={
                  categories.includes(category)
                    ? 'text-emerald-600'
                    : 'text-gray-900 dark:text-white'
                }
              >
                {CATEGORY_LABELS[category]}
              </span>
            </label>
          ))}
        </div>

        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          Brand
        </h2>
        <div className="mb-8 flex flex-col gap-4">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="h-5 w-5 accent-emerald-500"
              />
              <span
                className={
                  brands.includes(brand)
                    ? 'text-emerald-600'
                    : 'text-gray-900 dark:text-white'
                }
              >
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Apply Filter
        </button>
      </div>
    </div>
  )
}

export default Filters
