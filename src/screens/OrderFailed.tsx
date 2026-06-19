import { useNavigate } from 'react-router-dom'
import failedIllustration from '../assets/figma/order-failed-illustration.png'
import AuthShell from '../components/AuthShell'

function OrderFailed() {
  const navigate = useNavigate()

  return (
    <AuthShell>
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-white px-6 text-center dark:bg-gray-900 lg:h-full">
      <img src={failedIllustration} alt="Order failed" className="w-40" />

      <div>
        <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
          Oops! Order Failed
        </h1>
        <p className="text-sm text-gray-500">Something went terribly wrong.</p>
      </div>

      <button
        type="button"
        onClick={() => navigate('/checkout')}
        className="w-full rounded-full bg-emerald-500 py-4 font-semibold text-white"
      >
        Please Try Again
      </button>
      <button type="button" onClick={() => navigate('/home')} className="text-gray-900 dark:text-white">
        Back to home
      </button>
    </div>
    </AuthShell>
  )
}

export default OrderFailed
