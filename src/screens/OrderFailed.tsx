import { useNavigate } from 'react-router-dom'
import failedIllustration from '../assets/figma/order-failed-illustration.png'

function OrderFailed() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-6 dark:bg-gray-900 lg:bg-gray-900 lg:px-0 dark:lg:bg-gray-950">
      <div className="w-full text-center lg:max-w-110 lg:rounded-2xl lg:bg-white lg:p-10 lg:shadow-2xl dark:lg:bg-gray-900">
        <img src={failedIllustration} alt="Order failed" className="mx-auto w-40 lg:w-48" />

        <h1 className="mb-2 mt-6 text-2xl font-bold text-gray-900 dark:text-white lg:text-2xl">
          Oops! Order Failed
        </h1>
        <p className="mb-6 text-sm text-gray-500">Something went terribly wrong.</p>

        <button
          type="button"
          onClick={() => navigate('/checkout')}
          className="mb-4 w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Please Try Again
        </button>
        <button type="button" onClick={() => navigate('/home')} className="text-gray-900 dark:text-white">
          Back to home
        </button>
      </div>
    </div>
  )
}

export default OrderFailed
