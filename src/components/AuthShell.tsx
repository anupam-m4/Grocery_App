import type { ReactNode } from 'react'

interface AuthShellProps {
  children: ReactNode
}

function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:bg-gray-900 lg:py-12">
      <div className="lg:max-h-[90vh] lg:w-full lg:max-w-115 lg:overflow-y-auto lg:rounded-2xl lg:shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export default AuthShell
