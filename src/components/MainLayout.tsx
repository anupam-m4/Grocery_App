import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import BottomNav from './BottomNav'
import TopNav from './TopNav'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <TopNav />
      <div className="hidden border-b border-gray-100 px-10 py-2 dark:border-gray-800 lg:block">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          ‹
        </button>
      </div>
      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      <BottomNav />
    </div>
  )
}

export default MainLayout
