import type { ReactNode } from 'react'

interface AuthShellProps {
  children: ReactNode
}

function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="lg:grid lg:h-screen lg:grid-cols-2">
      <div className="hidden flex-col items-center justify-center bg-emerald-600 p-12 text-center text-white lg:flex">
        <span className="text-6xl" aria-hidden="true">
          🥕
        </span>
        <h2 className="mt-6 text-4xl font-bold">nectar</h2>
        <p className="mt-3 max-w-sm text-emerald-100">
          Fresh groceries delivered to your door in as fast as one hour.
        </p>
      </div>
      <div className="lg:h-screen lg:overflow-y-auto">
        <div className="lg:mx-auto lg:h-full lg:max-w-md">{children}</div>
      </div>
    </div>
  )
}

export default AuthShell
