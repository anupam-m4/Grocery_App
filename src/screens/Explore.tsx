import { useNavigate } from 'react-router-dom'
import { ProductCategory } from '../types/product'
import { CATEGORY_LABELS } from '../data/categories'
import { getCategoryPlaceholderEmoji } from '../utils/productImages'
import BottomNav from '../components/BottomNav'

const CATEGORIES = Object.values(ProductCategory)

function Explore() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="px-4 pt-6">
        <h1 className="mb-4 text-center text-lg font-bold text-gray-900 dark:text-white">
          Find Products
        </h1>
        <button
          type="button"
          onClick={() => navigate('/search')}
          className="mb-4 w-full rounded-lg bg-gray-100 px-4 py-3 text-left text-sm text-gray-400 dark:bg-gray-800"
        >
          Search Store
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-2 gap-3">
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

      <BottomNav />
    </div>
  )
}

export default Explore
