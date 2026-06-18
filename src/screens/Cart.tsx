import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import BottomNav from '../components/BottomNav'
import ThemeToggle from '../components/ThemeToggle'

function Cart() {
  const items = useCartStore((state) => state.items)
  const increment = useCartStore((state) => state.increment)
  const decrement = useCartStore((state) => state.decrement)
  const removeItem = useCartStore((state) => state.removeItem)
  const navigate = useNavigate()

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  if (items.length === 0) {
    return (
      <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
        <div className="flex items-center justify-between px-4 pb-2 pt-6">
          <span className="w-9" aria-hidden="true" />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">My Cart</h1>
          <ThemeToggle />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-gray-400">
          <span className="text-5xl" role="img" aria-label="Empty cart">
            🛒
          </span>
          <p>Your cart is empty</p>
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="mt-2 text-emerald-600"
          >
            Start shopping
          </button>
        </div>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-4 pb-2 pt-6">
        <span className="w-9" aria-hidden="true" />
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">My Cart</h1>
        <ThemeToggle />
      </div>

      <div className="flex-1 overflow-y-auto px-4">
        {items.map((item) => {
          const image = getProductImage(item.product.id)
          return (
            <div
              key={item.product.id}
              className="flex items-center gap-3 border-b border-gray-100 py-4 dark:border-gray-700"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                {image ? (
                  <img src={image} alt={item.product.name} className="h-full object-contain" />
                ) : (
                  <span className="text-3xl" role="img" aria-label={item.product.name}>
                    {getCategoryPlaceholderEmoji(item.product.category)}
                  </span>
                )}
              </div>

              <div className="flex-1">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {item.product.name}
                </p>
                <p className="text-xs text-gray-400">{item.product.unit}</p>
                <div className="mt-1 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => decrement(item.product.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:text-white"
                  >
                    −
                  </button>
                  <span className="dark:text-white">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => increment(item.product.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 dark:text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  aria-label={`Remove ${item.product.name}`}
                  className="text-gray-400"
                >
                  ✕
                </button>
                <span className="font-semibold text-gray-900 dark:text-white">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate('/checkout')}
          className="flex w-full items-center justify-between rounded-full bg-emerald-500 px-6 py-4 font-semibold text-white"
        >
          <span>Go to Checkout</span>
          <span>${total.toFixed(2)}</span>
        </button>
      </div>

      <BottomNav />
    </div>
  )
}

export default Cart
