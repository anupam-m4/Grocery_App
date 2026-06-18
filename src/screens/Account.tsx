import { useNavigate } from 'react-router-dom'
import BottomNav from '../components/BottomNav'

const MENU_ITEMS = ['Orders', 'Shipping Addresses', 'Payment Methods', 'Settings']

function Account() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <h1 className="px-4 pt-6 text-center text-lg font-bold text-gray-900 dark:text-white">
        Account
      </h1>

      <div className="flex flex-col items-center gap-2 px-4 py-6">
        <span
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-900"
          role="img"
          aria-label="Profile"
        >
          👤
        </span>
        <p className="font-semibold text-gray-900 dark:text-white">Guest User</p>
      </div>

      <div className="flex-1 px-4">
        {MENU_ITEMS.map((item) => (
          <button
            type="button"
            key={item}
            className="flex w-full items-center justify-between border-b border-gray-100 py-4 text-left text-gray-900 dark:border-gray-700 dark:text-white"
          >
            {item}
            <span className="text-gray-400">›</span>
          </button>
        ))}
      </div>

      <div className="p-4">
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="w-full rounded-full border border-emerald-500 py-4 font-semibold text-emerald-600"
        >
          Log Out
        </button>
      </div>

      <BottomNav />
    </div>
  )
}

export default Account
