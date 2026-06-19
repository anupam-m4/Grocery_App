import type { ReactNode } from 'react'
import BottomNav from './BottomNav'
import TopNav from './TopNav'

interface MainLayoutProps {
  children: ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-gray-900">
      <TopNav />
      <div className="flex flex-1 flex-col overflow-hidden">{children}</div>
      <BottomNav />
    </div>
  )
}

export default MainLayout
