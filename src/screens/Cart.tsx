import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import { getProductImage, getCategoryPlaceholderEmoji } from '../utils/productImages'
import MainLayout from '../components/MainLayout'
import ThemeToggle from '../components/ThemeToggle'

const DELIVERY_FEE = 2

function Cart() {
  const items = useCartStore((state) => state.items)
  const increment = useCartStore((state) => state.increment)
  const decrement = useCartStore((state) => state.decrement)
  const removeItem = useCartStore((state) => state.removeItem)
  const navigate = useNavigate()

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )
  const total = subtotal + (items.length > 0 ? DELIVERY_FEE : 0)

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="flex items-center justify-between px-4 pb-2 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pt-8">
          <span className="w-9 lg:hidden" aria-hidden="true" />
          <h1 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">My Cart</h1>
          <div className="lg:hidden">
          <ThemeToggle />
        </div>
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
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <div className="flex items-center justify-between px-4 pb-2 pt-6 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:pt-8">
        <span className="w-9 lg:hidden" aria-hidden="true" />
        <h1 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">My Cart</h1>
        <div className="lg:hidden">
          <ThemeToggle />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 lg:mx-auto lg:w-full lg:max-w-7xl lg:overflow-visible lg:px-10">
        <div className="lg:grid lg:grid-cols-[1fr_360px] lg:items-start lg:gap-10">
          <div>
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

          <div className="hidden lg:sticky lg:top-8 lg:block lg:rounded-2xl lg:border lg:border-gray-100 lg:bg-gray-50 lg:p-6 dark:lg:border-gray-700 dark:lg:bg-gray-800">
            <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
              Order Summary
            </h2>
            <div className="flex items-center justify-between py-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Subtotal</span>
              <span className="text-gray-900 dark:text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between border-b border-gray-200 py-2 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <span>Delivery</span>
              <span className="text-gray-900 dark:text-white">${DELIVERY_FEE.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between py-3 font-semibold text-gray-900 dark:text-white">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={() => navigate('/checkout')}
              className="mt-2 w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 lg:hidden">
        <button
          type="button"
          onClick={() => navigate('/checkout')}
          className="flex w-full items-center justify-between rounded-full bg-emerald-500 px-6 py-4 font-semibold text-white"
        >
          <span>Go to Checkout</span>
          <span>${total.toFixed(2)}</span>
        </button>
      </div>
    </MainLayout>
  )
}

export default Cart
