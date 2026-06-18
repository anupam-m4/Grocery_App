import { useNavigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product, ProductCategory } from '../types/product'
import { CATEGORY_LABELS } from '../data/categories'
import ProductCard from '../components/ProductCard'
import BottomNav from '../components/BottomNav'

const products = productsData as Product[]

function CategoryListing() {
  const { category } = useParams<{ category: ProductCategory }>()
  const navigate = useNavigate()

  const items = products.filter((product) => product.category === category)
  const label = category ? CATEGORY_LABELS[category] : ''

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center gap-3 px-4 pt-6">
        <button type="button" onClick={() => navigate(-1)} className="text-2xl dark:text-white">
          ‹
        </button>
        <h1 className="flex-1 text-center text-lg font-bold text-gray-900 dark:text-white">
          {label}
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4 pt-4">
        {items.length === 0 ? (
          <p className="mt-10 text-center text-gray-400">No products found</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

export default CategoryListing
