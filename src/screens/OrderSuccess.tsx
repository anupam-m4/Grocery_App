import { useNavigate } from 'react-router-dom'
import successIllustration from '../assets/figma/order-success-illustration.png'

function OrderSuccess() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-white px-6 dark:bg-gray-900 lg:bg-gray-900 lg:px-0 dark:lg:bg-gray-950">
      <div className="w-full text-center lg:max-w-110 lg:rounded-2xl lg:bg-white lg:p-10 lg:shadow-2xl dark:lg:bg-gray-900">
        <img src={successIllustration} alt="Order accepted" className="mx-auto w-40 lg:w-48" />

        <h1 className="mb-2 mt-6 text-2xl font-bold text-gray-900 dark:text-white lg:text-2xl">
          Your Order has been accepted
        </h1>
        <p className="mb-6 text-sm text-gray-500">
          Your items has been placed and is on its way to being processed
        </p>

        <button
          type="button"
          onClick={() => navigate('/home')}
          className="mb-4 w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Track Order
        </button>
        <button type="button" onClick={() => navigate('/home')} className="text-gray-900 dark:text-white">
          Back to home
        </button>
      </div>
    </div>
  )
}

export default OrderSuccess
