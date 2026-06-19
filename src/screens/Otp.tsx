import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NumericKeypad from '../components/NumericKeypad'
import { applyKeypadInput } from '../utils/keypad'
import { useAuthStore } from '../store/authStore'
import AuthShell from '../components/AuthShell'

const CODE_LENGTH = 6

function Otp() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [isVerifying, setIsVerifying] = useState(false)
  const navigate = useNavigate()
  const confirmationResult = useAuthStore((state) => state.confirmationResult)
  const setUser = useAuthStore((state) => state.setUser)

  const display = code.padEnd(CODE_LENGTH, '-').split('').join(' ')

  async function handleVerify() {
    if (code.length !== CODE_LENGTH) {
      setError(`Please enter the ${CODE_LENGTH}-digit code.`)
      return
    }
    if (!confirmationResult) return
    setError('')
    setIsVerifying(true)

    try {
      const result = await confirmationResult.confirm(code)
      setUser(result.user)
      navigate('/location')
    } catch {
      setError('Incorrect code. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <AuthShell>
      <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pb-6 pt-12 dark:from-gray-900 dark:to-gray-900 lg:h-full">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-8 self-start text-2xl dark:text-white"
        >
          ‹
        </button>

        <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Enter your {CODE_LENGTH}-digit code
        </h1>

        <label className="mb-1 text-sm text-gray-500" htmlFor="code">
          Code
        </label>
        <p id="code" className="border-b border-gray-300 pb-2 tracking-widest dark:text-white">
          {display}
        </p>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
        <div className="mb-auto" />

        <div className="flex items-center justify-between pb-4">
          <button type="button" onClick={() => navigate(-1)} className="font-semibold text-emerald-600">
            Resend Code
          </button>
          <button
            type="button"
            onClick={handleVerify}
            disabled={isVerifying}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white disabled:opacity-50"
          >
            ›
          </button>
        </div>

        <NumericKeypad
          onKeyPress={(key) => setCode((prev) => applyKeypadInput(prev, key, CODE_LENGTH))}
        />
      </div>
    </AuthShell>
  )
}

export default Otp
