import type { ReactNode } from 'react'

interface AuthShellProps {
  children: ReactNode
}

function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="lg:flex lg:min-h-screen lg:items-center lg:justify-center lg:bg-gray-100 lg:py-10 dark:lg:bg-gray-950">
      <div className="h-screen w-full lg:h-[850px] lg:w-[430px] lg:overflow-y-auto lg:rounded-3xl lg:shadow-2xl">
        {children}
      </div>
    </div>
  )
}

export default AuthShell
