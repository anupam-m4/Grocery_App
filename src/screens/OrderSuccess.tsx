import { useNavigate } from 'react-router-dom'
import successIllustration from '../assets/figma/order-success-illustration.png'
import AuthShell from '../components/AuthShell'

function OrderSuccess() {
  const navigate = useNavigate()

  return (
    <AuthShell>
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center dark:bg-gray-900 lg:h-full">
      <img src={successIllustration} alt="Order accepted" className="w-40" />

      <div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Your Order has been accepted
        </h1>
        <p className="text-sm text-gray-500">
          Your items has been placed and is on its way to being processed
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate('/home')}
        className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
      >
        Track Order
      </button>
      <button type="button" onClick={() => navigate('/home')} className="text-gray-900 dark:text-white">
        Back to home
      </button>
    </div>
    </AuthShell>
  )
}

export default OrderSuccess
