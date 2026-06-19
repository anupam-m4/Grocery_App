import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'
import AuthShell from '../components/AuthShell'

function Checkout() {
  const navigate = useNavigate()
  const items = useCartStore((state) => state.items)
  const [isPlacingOrder, setIsPlacingOrder] = useState(false)

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  )

  function handlePlaceOrder() {
    setIsPlacingOrder(true)
    setTimeout(() => {
      const didSucceed = Math.random() > 0.3
      navigate(didSucceed ? '/order-success' : '/order-failed')
    }, 1200)
  }

  return (
    <AuthShell>
    <div className="flex h-screen flex-col justify-end bg-black/40 lg:h-full">
      <div className="rounded-t-2xl bg-white p-6 dark:bg-gray-900">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-bold text-gray-900 dark:text-white">
            Checkout
          </h1>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-xl dark:text-white"
          >
            ✕
          </button>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-gray-500 dark:border-gray-700"
        >
          Delivery
          <span className="text-gray-900 dark:text-white">Select Method ›</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-gray-500 dark:border-gray-700"
        >
          Payment
          <span className="text-gray-900 dark:text-white">💳 ›</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-gray-500 dark:border-gray-700"
        >
          Promo Code
          <span className="text-gray-900 dark:text-white">Pick discount ›</span>
        </button>

        <button
          type="button"
          className="flex w-full items-center justify-between py-4 text-gray-500"
        >
          Total Cost
          <span className="font-semibold text-gray-900 dark:text-white">
            ${total.toFixed(2)} ›
          </span>
        </button>

        <p className="mb-4 text-xs text-gray-400">
          By placing an order you agree to our{' '}
          <span className="text-gray-900 dark:text-white">Terms</span> And{' '}
          <span className="text-gray-900 dark:text-white">Conditions</span>
        </p>

        <button
          type="button"
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder}
          className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white disabled:opacity-60"
        >
          {isPlacingOrder ? 'Placing order…' : 'Place Order'}
        </button>
      </div>
    </div>
    </AuthShell>
  )
}

export default Checkout
