import { useNavigate } from 'react-router-dom'
import { useFavouriteStore } from '../store/favouriteStore'
import { useCartStore } from '../store/cartStore'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import BottomNav from '../components/BottomNav'

function Favourites() {
  const favourites = useFavouriteStore((state) => state.items)
  const addItem = useCartStore((state) => state.addItem)
  const navigate = useNavigate()

  if (favourites.length === 0) {
    return (
      <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
        <h1 className="px-4 pt-6 text-center text-lg font-bold text-gray-900 dark:text-white">
          Favourite
        </h1>
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
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <h1 className="px-4 pt-6 text-center text-lg font-bold text-gray-900 dark:text-white">
        Favourite
      </h1>

      <div className="flex-1 overflow-y-auto px-4">
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
              <span className="font-semibold text-gray-900 dark:text-white">
                ${product.price.toFixed(2)}
              </span>
            </button>
          )
        })}
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => {
            favourites.forEach((product) => addItem(product))
            navigate('/cart')
          }}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Add All To Cart
        </button>
      </div>

      <BottomNav />
    </div>
  )
}

export default Favourites
