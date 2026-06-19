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

  function countForCategory(category: ProductCategory) {
    return products.filter(
      (product) =>
        product.category === category &&
        (brands.length === 0 || brands.includes(product.brand)),
    ).length
  }

  function countForBrand(brand: string) {
    return products.filter(
      (product) =>
        product.brand === brand &&
        (categories.length === 0 || categories.includes(product.category)),
    ).length
  }

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 pt-6 lg:mx-auto lg:w-full lg:max-w-3xl">
        <button type="button" onClick={() => navigate(-1)} className="text-2xl dark:text-white">
          ✕
        </button>
        <h1 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">Filters</h1>
        <span className="w-6" />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-6 lg:mx-auto lg:w-full lg:max-w-3xl">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              Categories
            </h2>
            <div className="mb-8 flex flex-col gap-4">
              {CATEGORIES.map((category) => {
                const isChecked = categories.includes(category)
                const count = countForCategory(category)
                const isDisabled = !isChecked && count === 0
                return (
                  <label
                    key={category}
                    className={`flex items-center gap-3 ${isDisabled ? 'opacity-40' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleCategory(category)}
                      disabled={isDisabled}
                      className="h-5 w-5 accent-emerald-500"
                    />
                    <span
                      className={
                        isChecked ? 'text-emerald-600' : 'text-gray-900 dark:text-white'
                      }
                    >
                      {CATEGORY_LABELS[category]}
                    </span>
                    <span className="text-xs text-gray-400">({count})</span>
                  </label>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              Brand
            </h2>
            <div className="mb-8 flex flex-col gap-4">
              {BRANDS.map((brand) => {
                const isChecked = brands.includes(brand)
                const count = countForBrand(brand)
                const isDisabled = !isChecked && count === 0
                return (
                  <label
                    key={brand}
                    className={`flex items-center gap-3 ${isDisabled ? 'opacity-40' : ''}`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleBrand(brand)}
                      disabled={isDisabled}
                      className="h-5 w-5 accent-emerald-500"
                    />
                    <span
                      className={isChecked ? 'text-emerald-600' : 'text-gray-900 dark:text-white'}
                    >
                      {brand}
                    </span>
                    <span className="text-xs text-gray-400">({count})</span>
                  </label>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 lg:mx-auto lg:w-full lg:max-w-3xl">
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
