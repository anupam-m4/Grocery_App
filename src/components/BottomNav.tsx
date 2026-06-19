import { NavLink } from 'react-router-dom'
import { useCartStore } from '../store/cartStore'

const NAV_ITEMS = [
  { to: '/home', label: 'Shop', icon: '🏠' },
  { to: '/explore', label: 'Explore', icon: '🔍' },
  { to: '/cart', label: 'Cart', icon: '🛒' },
  { to: '/favourites', label: 'Favourite', icon: '♡' },
  { to: '/account', label: 'Account', icon: '👤' },
]

function BottomNav() {
  const cartCount = useCartStore((state) => state.items.length)

  return (
    <nav className="grid grid-cols-5 border-t border-gray-100 bg-white py-2 dark:border-gray-700 dark:bg-gray-900 lg:hidden">
      {NAV_ITEMS.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1 text-xs ${
              isActive
                ? 'text-emerald-600'
                : 'text-gray-400 dark:text-gray-500'
            }`
          }
        >
          <span className="relative" aria-hidden="true">
            {item.icon}
            {item.to === '/cart' && cartCount > 0 && (
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
