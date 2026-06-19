import { useNavigate } from 'react-router-dom'
import { ProductCategory } from '../types/product'
import { CATEGORY_LABELS } from '../data/categories'
import { getCategoryPlaceholderEmoji } from '../utils/productImages'
import MainLayout from '../components/MainLayout'
import ThemeToggle from '../components/ThemeToggle'

const CATEGORIES = Object.values(ProductCategory)

function Explore() {
  const navigate = useNavigate()

  return (
    <MainLayout>
      <div className="px-4 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pt-8">
        <div className="mb-4 flex items-center justify-between lg:hidden">
          <span className="w-9" aria-hidden="true" />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Find Products
          </h1>
          <ThemeToggle />
        </div>
        <button
          type="button"
          onClick={() => navigate('/search')}
          className="mb-4 w-full rounded-lg bg-gray-100 px-4 py-3 text-left text-sm text-gray-400 dark:bg-gray-800 lg:max-w-xl"
        >
          Search Store
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] lg:gap-4">
          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => navigate(`/category/${category}`)}
              className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800"
            >
              <span className="text-4xl" role="img" aria-label={CATEGORY_LABELS[category]}>
                {getCategoryPlaceholderEmoji(category)}
              </span>
              <span className="text-center font-semibold text-gray-900 dark:text-white">
                {CATEGORY_LABELS[category]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default Explore
