import { useNavigate } from 'react-router-dom'
import { useFavouriteStore } from '../store/favouriteStore'
import { useCartStore } from '../store/cartStore'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import MainLayout from '../components/MainLayout'
import ThemeToggle from '../components/ThemeToggle'

function Favourites() {
  const favourites = useFavouriteStore((state) => state.items)
  const toggleFavourite = useFavouriteStore((state) => state.toggleFavourite)
  const addItem = useCartStore((state) => state.addItem)
  const navigate = useNavigate()

  if (favourites.length === 0) {
    return (
      <MainLayout>
        <div className="flex items-center justify-between px-4 pb-2 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pt-8">
          <span className="w-9 lg:hidden" aria-hidden="true" />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">Favourite</h1>
          <div className="lg:hidden">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-gray-400">
          <span className="text-5xl" role="img" aria-label="No favourites">
            ♡
          </span>
          <p>No favourites yet</p>
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="mt-2 text-emerald-600"
          >
            Browse products
          </button>
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="flex items-center justify-between px-4 pb-2 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pt-8">
        <span className="w-9 lg:hidden" aria-hidden="true" />
        <h1 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">Favourite</h1>
        <div className="lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10">
        <div className="lg:hidden">
          {favourites.map((product) => {
            const image = getProductImage(product.id)
            return (
              <button
                type="button"
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="flex w-full items-center gap-3 border-b border-gray-100 py-4 text-left dark:border-gray-700"
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  {image ? (
                    <img src={image} alt={product.name} className="h-full object-contain" />
                  ) : (
                    <span className="text-2xl" role="img" aria-label={product.name}>
                      {getCategoryPlaceholderEmoji(product.category)}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </p>
                  <p className="text-xs text-gray-400">{product.unit}</p>
                </div>
                <span className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                  <span className="text-gray-300">›</span>
                </span>
              </button>
            )
          })}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-5 lg:pb-8">
          {favourites.map((product) => {
            const image = getProductImage(product.id)
            return (
              <div
                key={product.id}
                className="relative rounded-xl border border-gray-100 bg-white p-3 dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  type="button"
                  onClick={() => toggleFavourite(product)}
                  aria-label={`Remove ${product.name} from favourites`}
                  className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
                >
                  ✕
                </button>
                <button
                  type="button"
                  onClick={() => navigate(`/product/${product.id}`)}
                  className="mb-2 flex h-24 w-full items-center justify-center"
                >
                  {image ? (
                    <img src={image} alt={product.name} className="h-full object-contain" />
                  ) : (
                    <span className="text-5xl" role="img" aria-label={product.name}>
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
                <p className="mt-2 font-semibold text-gray-900 dark:text-white">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="p-4 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pb-8">
        <button
          type="button"
          onClick={() => {
            favourites.forEach((product) => addItem(product))
            navigate('/cart')
          }}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white lg:w-72"
        >
          Add All To Cart
        </button>
      </div>
    </MainLayout>
  )
}

export default Favourites
