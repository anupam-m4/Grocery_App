import { NavLink } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/home', label: 'Shop', icon: '🏠' },
  { to: '/explore', label: 'Explore', icon: '🔍' },
  { to: '/cart', label: 'Cart', icon: '🛒' },
  { to: '/favourites', label: 'Favourite', icon: '♡' },
  { to: '/account', label: 'Account', icon: '👤' },
]

function BottomNav() {
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
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default BottomNav
