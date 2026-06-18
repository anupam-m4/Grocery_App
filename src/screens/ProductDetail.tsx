import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import { useCartStore } from '../store/cartStore'
import { useFavouriteStore } from '../store/favouriteStore'

const products = productsData as Product[]

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)
  const addItem = useCartStore((state) => state.addItem)
  const toggleFavourite = useFavouriteStore((state) => state.toggleFavourite)
  const isFavourite = useFavouriteStore((state) =>
    product ? state.isFavourite(product.id) : false,
  )

  if (!product) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 dark:bg-gray-900 dark:text-white">
        <p>Product not found</p>
        <button type="button" onClick={() => navigate('/home')} className="text-emerald-600">
          Back to home
        </button>
      </div>
    )
  }

  const image = getProductImage(product.id)

  function handleAddToBasket() {
    for (let i = 0; i < quantity; i += 1) {
      addItem(product!)
    }
    navigate('/cart')
  }

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 pt-6">
        <button type="button" onClick={() => navigate(-1)} className="text-2xl dark:text-white">
          ‹
        </button>
        <button type="button" aria-label="Share" className="text-xl dark:text-white">
          ⤴
        </button>
      </div>

      <div className="flex h-64 items-center justify-center">
        {image ? (
          <img src={image} alt={product.name} className="h-full object-contain" />
        ) : (
          <span
            className="text-8xl"
            role="img"
            aria-label={`${product.name} (photo not available yet)`}
          >
            {getCategoryPlaceholderEmoji(product.category)}
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-28">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-sm text-gray-400">{product.unit}</p>
          </div>
          <button
            type="button"
            onClick={() => toggleFavourite(product)}
            aria-label={
              isFavourite ? 'Remove from favourites' : 'Add to favourites'
            }
            className="text-2xl"
          >
            {isFavourite ? '♥' : '♡'}
          </button>
        </div>

        <div className="mb-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:text-white"
          >
            −
          </button>
          <span className="dark:text-white">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:text-white"
          >
            +
          </button>
          <span className="ml-auto text-lg font-semibold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">
          Product Detail
        </h2>
        <p className="text-sm text-gray-500">{product.description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 dark:bg-gray-900">
        <button
          type="button"
          onClick={handleAddToBasket}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Add To Basket
        </button>
      </div>
    </div>
  )
}

export default ProductDetail
