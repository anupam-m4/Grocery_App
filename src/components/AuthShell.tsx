import type { ReactNode } from 'react'

interface AuthShellProps {
  children: ReactNode
}

function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:bg-gray-950 lg:py-12">
      <div className="lg:w-full lg:max-w-115 lg:overflow-visible lg:rounded-2xl lg:shadow-2xl lg:ring-1 lg:ring-white/10">
        {children}
      </div>
    </div>
  )
}

export default AuthShell
