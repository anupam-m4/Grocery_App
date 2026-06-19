import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/MainLayout'
import ThemeToggle from '../components/ThemeToggle'

const MENU_ITEMS = ['Orders', 'Shipping Addresses', 'Payment Methods', 'Settings'] as const

const SECTION_CONTENT: Record<(typeof MENU_ITEMS)[number], { heading: string; body: string }> = {
  Orders: {
    heading: 'Orders',
    body: 'You have no past orders yet. Once you place an order, you can track its status here.',
  },
  'Shipping Addresses': {
    heading: 'Shipping Addresses',
    body: 'No saved addresses yet. Add a delivery address to speed up checkout next time.',
  },
  'Payment Methods': {
    heading: 'Payment Methods',
    body: 'No saved payment methods yet. Add a card to check out faster.',
  },
  Settings: {
    heading: 'Settings',
    body: 'Manage notification preferences, language, and other account settings here.',
  },
}

function Account() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<(typeof MENU_ITEMS)[number]>('Orders')

  return (
    <MainLayout>
      <div className="flex items-center justify-between px-4 pt-6 lg:hidden">
        <span className="w-9" aria-hidden="true" />
        <h1 className="text-lg font-bold text-gray-900 dark:text-white">Account</h1>
        <ThemeToggle />
      </div>

      <div className="flex-1 overflow-y-auto lg:mx-auto lg:w-full lg:max-w-7xl lg:px-10 lg:py-8">
        <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
          <div className="flex flex-col">
            <div className="flex flex-col items-center gap-2 px-4 py-6 lg:items-start lg:px-0 lg:py-0">
              <span
                className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl dark:bg-emerald-900"
                role="img"
                aria-label="Profile"
              >
                👤
              </span>
              <p className="font-semibold text-gray-900 dark:text-white">Guest User</p>
            </div>

            <div className="px-4 lg:mt-6 lg:px-0">
              {MENU_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`flex w-full items-center justify-between border-b border-gray-100 py-4 text-left dark:border-gray-700 lg:rounded-lg lg:border-0 lg:px-3 lg:py-2.5 ${
                    selected === item
                      ? 'text-gray-900 dark:text-white lg:bg-emerald-50 lg:font-semibold lg:text-emerald-700 dark:lg:bg-emerald-900/30 dark:lg:text-emerald-400'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {item}
                  <span className="text-gray-400 lg:hidden">›</span>
                </button>
              ))}
            </div>

            <div className="p-4 lg:mt-6 lg:p-0">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="w-full rounded-full border border-emerald-500 py-4 font-semibold text-emerald-600"
              >
                Log Out
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:rounded-2xl lg:border lg:border-gray-100 lg:bg-gray-50 lg:p-8 dark:lg:border-gray-700 dark:lg:bg-gray-800">
            <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {SECTION_CONTENT[selected].heading}
            </h2>
            <p className="text-gray-500 dark:text-gray-400">{SECTION_CONTENT[selected].body}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Account
