import type { ReactNode } from 'react'
import BottomNav from './BottomNav'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900 lg:flex-row">
      <div className="flex flex-1 flex-col overflow-hidden lg:order-2">{children}</div>
      <BottomNav />
    </div>
  )
}

export default MainLayout
