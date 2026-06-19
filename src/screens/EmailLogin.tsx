import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff } from 'lucide-react'
import carrotIcon from '../assets/figma/carrot-icon.png'

function EmailLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pt-16 dark:from-gray-900 dark:to-gray-900">
      <img src={carrotIcon} alt="" className="mx-auto mb-8 h-16 w-16" />

      <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
        Login
      </h1>
      <p className="mb-8 text-sm text-gray-500">Enter your email and password</p>

      <label className="mb-1 text-sm text-gray-500" htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-6 border-b border-gray-300 bg-transparent pb-2 outline-none dark:text-white"
      />

      <label className="mb-1 text-sm text-gray-500" htmlFor="password">
        Password
      </label>
      <div className="mb-2 flex items-center border-b border-gray-300">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="flex-1 bg-transparent pb-2 outline-none dark:text-white"
        />
        <button
          type="button"
          onClick={() => setShowPassword((show) => !show)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          className="pb-2 text-gray-400 dark:text-gray-500"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <button type="button" className="mb-8 self-end text-sm text-gray-500">
        Forgot Password?
      </button>

      <button
        type="button"
        onClick={() => navigate('/location')}
        className="mb-6 rounded-full bg-emerald-500 py-4 font-semibold text-white"
      >
        Log In
      </button>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="font-semibold text-emerald-600"
        >
          Sign up
        </button>
      </p>
    </div>
  )
}

export default EmailLogin
