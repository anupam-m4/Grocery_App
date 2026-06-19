import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthShell from '../components/AuthShell'

function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding'), 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <AuthShell>
      <div className="flex h-screen flex-col items-center justify-center bg-emerald-500 lg:h-full">
        <div className="flex items-center gap-2 text-white">
          <span className="text-3xl">🥕</span>
          <div>
            <h1 className="text-3xl font-bold leading-none">nectar</h1>
            <p className="text-xs tracking-widest">online groceries</p>
          </div>
        </div>
      </div>
    </AuthShell>
  )
}

export default Splash
