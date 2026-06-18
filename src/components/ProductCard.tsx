import { useNavigate } from 'react-router-dom'
import type { Product } from '../types/product'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import { useCartStore } from '../store/cartStore'

interface ProductCardProps {
  product: Product
}

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate()
  const addItem = useCartStore((state) => state.addItem)
  const image = getProductImage(product.id)

  return (
    <div className="w-40 shrink-0 rounded-xl border border-gray-100 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
      <button
        type="button"
        onClick={() => navigate(`/product/${product.id}`)}
        className="mb-2 flex h-24 w-full items-center justify-center"
      >
        {image ? (
          <img
            src={image}
            alt={product.name}
            className="h-full object-contain"
          />
        ) : (
          <span
            className="text-5xl"
            role="img"
            aria-label={`${product.name} (photo not available yet)`}
          >
            {getCategoryPlaceholderEmoji(product.category)}
          </span>
        )}
      </button>

      <button
        type="button"
        onClick={() => navigate(`/product/${product.id}`)}
        className="text-left"
      >
        <p className="text-sm font-semibold text-gray-900 dark:text-white">
          {product.name}
        </p>
        <p className="text-xs text-gray-400">{product.unit}</p>
      </button>

      <div className="mt-2 flex items-center justify-between">
        <span className="font-semibold text-gray-900 dark:text-white">
          ${product.price.toFixed(2)}
        </span>
        <button
          type="button"
          onClick={() => addItem(product)}
          aria-label={`Add ${product.name} to cart`}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white"
        >
          +
        </button>
      </div>
    </div>
  )
}

export default ProductCard
