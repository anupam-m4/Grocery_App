import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productsData from '../data/products.json'
import type { Product } from '../types/product'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import { useCartStore } from '../store/cartStore'
import FavouriteButton from '../components/FavouriteButton'
import TopNav from '../components/TopNav'

const products = productsData as Product[]

function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === id)
  const [quantity, setQuantity] = useState(1)
  const [isDetailOpen, setIsDetailOpen] = useState(true)
  const addItem = useCartStore((state) => state.addItem)
  const isInCart = useCartStore((state) =>
    product ? state.items.some((item) => item.product.id === product.id) : false,
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
    if (isInCart) {
      navigate('/cart')
      return
    }
    for (let i = 0; i < quantity; i += 1) {
      addItem(product!)
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gray-50 dark:bg-gray-900">
      <TopNav />
      <div className="relative flex-1 lg:px-16 lg:py-10">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="hidden text-2xl text-gray-900 dark:text-white lg:mb-6 lg:block lg:self-start"
      >
        ‹
      </button>

      <div className="lg:grid lg:grid-cols-[45%_55%] lg:gap-12">
      <div className="relative flex h-72 flex-col rounded-b-3xl bg-gray-100 dark:bg-gray-800 lg:sticky lg:top-10 lg:h-[80vh] lg:self-start lg:rounded-3xl">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-4 top-6 text-2xl dark:text-white lg:hidden"
        >
          ‹
        </button>

        <div className="flex flex-1 items-center justify-center">
          {image ? (
            <img src={image} alt={product.name} className="h-40 object-contain lg:h-72" />
          ) : (
            <span
              className="text-7xl lg:text-9xl"
              role="img"
              aria-label={`${product.name} (photo not available yet)`}
            >
              {getCategoryPlaceholderEmoji(product.category)}
            </span>
          )}
        </div>

        <div className="mb-4 flex justify-center gap-1">
          <span className="h-1.5 w-4 rounded-full bg-emerald-500" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto rounded-t-3xl bg-white px-6 pt-6 pb-28 dark:bg-gray-900 lg:rounded-3xl lg:pb-10">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white lg:text-3xl">
              {product.name}
            </h1>
            <p className="text-sm text-gray-400 lg:mt-1 lg:text-base">{product.unit}</p>
          </div>
          <FavouriteButton product={product} size={28} />
        </div>

        <div className="mb-6 flex items-center gap-4">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 dark:text-white"
          >
            −
          </button>
          <span className="w-10 rounded-full border border-gray-200 py-1 text-center dark:text-white">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-400 text-emerald-500"
          >
            +
          </button>
          <span className="ml-auto text-lg font-semibold text-gray-900 dark:text-white lg:text-2xl">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsDetailOpen((open) => !open)}
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 dark:border-gray-700"
        >
          <span className="font-semibold text-gray-900 dark:text-white">
            Product Detail
          </span>
          <span className={`transition-transform dark:text-white ${isDetailOpen ? 'rotate-180' : ''}`}>
            ⌄
          </span>
        </button>
        {isDetailOpen && (
          <p className="py-3 text-sm text-gray-500">{product.description}</p>
        )}

        <button
          type="button"
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 dark:border-gray-700"
        >
          <span className="font-semibold text-gray-900 dark:text-white">
            Nutritions
          </span>
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <span className="rounded-full bg-gray-100 px-2 py-0.5 dark:bg-gray-800">
              100gr
            </span>
            ›
          </span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between py-4"
        >
          <span className="font-semibold text-gray-900 dark:text-white">
            Review
          </span>
          <span className="flex items-center gap-1 text-sm text-orange-400">
            {'★'.repeat(product.rating)}
            {'☆'.repeat(5 - product.rating)}
            <span className="ml-1 text-gray-400">›</span>
          </span>
        </button>

        <button
          type="button"
          onClick={handleAddToBasket}
          className="mt-6 hidden w-full rounded-full bg-emerald-500 py-4 font-semibold text-white lg:block lg:w-80"
        >
          {isInCart ? 'Go to Cart' : 'Add To Basket'}
        </button>
      </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white p-4 dark:bg-gray-900 lg:hidden">
        <button
          type="button"
          onClick={handleAddToBasket}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          {isInCart ? 'Go to Cart' : 'Add To Basket'}
        </button>
      </div>
      </div>
    </div>
  )
}

export default ProductDetail
