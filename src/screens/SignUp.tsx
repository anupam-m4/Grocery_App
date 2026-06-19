import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Check } from 'lucide-react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import carrotIcon from '../assets/figma/carrot-icon.png'
import { auth } from '../lib/firebase'
import { useAuthStore } from '../store/authStore'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SignUp() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const setUser = useAuthStore((state) => state.setUser)

  const isEmailValid = EMAIL_REGEX.test(email)

  async function handleSignUp() {
    if (!username || !isEmailValid || !password) {
      setError('Please fill in all fields with a valid email.')
      return
    }
    setError('')
    setIsSubmitting(true)

    try {
      const credential = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(credential.user, { displayName: username })
      setUser(credential.user)
      navigate('/location')
    } catch (err) {
      const code = err instanceof Error && 'code' in err ? String((err as { code: string }).code) : ''
      if (code === 'auth/email-already-in-use') {
        setError('An account with this email already exists.')
      } else if (code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.')
      } else {
        setError('Could not create your account. Please try again.')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pt-16 dark:from-gray-900 dark:to-gray-900">
      <img src={carrotIcon} alt="" className="mx-auto mb-8 h-16 w-16" />

      <h1 className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
        Sign Up
      </h1>
      <p className="mb-8 text-sm text-gray-500">Enter your credentials to continue</p>

      <label className="mb-1 text-sm text-gray-500" htmlFor="username">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-6 border-b border-gray-300 bg-transparent pb-2 outline-none dark:text-white"
      />

      <label className="mb-1 text-sm text-gray-500" htmlFor="email">
        Email
      </label>
      <div className="mb-6 flex items-center border-b border-gray-300">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-transparent pb-2 outline-none dark:text-white"
        />
        {isEmailValid && <Check size={18} className="pb-2 text-emerald-500" />}
      </div>

      <label className="mb-1 text-sm text-gray-500" htmlFor="password">
        Password
      </label>
      <div className="mb-6 flex items-center border-b border-gray-300">
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

      <p className="mb-6 text-xs text-gray-500">
        By continuing you agree to our{' '}
        <span className="text-emerald-600">Terms of Service</span> and{' '}
        <span className="text-emerald-600">Privacy Policy.</span>
      </p>

      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      <button
        type="button"
        onClick={handleSignUp}
        disabled={isSubmitting}
        className="mb-6 rounded-full bg-emerald-500 py-4 font-semibold text-white disabled:opacity-50"
      >
        Sign Up
      </button>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <button
          type="button"
          onClick={() => navigate('/email-login')}
          className="font-semibold text-emerald-600"
        >
          Login
        </button>
      </p>
    </div>
  )
}

export default SignUp
