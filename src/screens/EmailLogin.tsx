import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EmailLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pt-16 dark:from-gray-900 dark:to-gray-900">
      <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
        Loging
      </h1>
      <p className="mb-8 text-sm text-gray-500">Enter your emails and password</p>

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
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 border-b border-gray-300 bg-transparent pb-2 outline-none dark:text-white"
      />

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
          Signup
        </button>
      </p>
    </div>
  )
}

export default EmailLogin
