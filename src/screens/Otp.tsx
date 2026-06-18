import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NumericKeypad from '../components/NumericKeypad'
import { applyKeypadInput } from '../utils/keypad'

function Otp() {
  const [code, setCode] = useState('')
  const navigate = useNavigate()

  const display = code.padEnd(4, '-').split('').join(' ')

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pb-6 pt-12 dark:from-gray-900 dark:to-gray-900">
      <button type="button" onClick={() => navigate(-1)} className="mb-8 text-2xl dark:text-white">
        ‹
      </button>

      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Enter your 4-digit code
      </h1>

      <label className="mb-1 text-sm text-gray-500" htmlFor="code">
        Code
      </label>
      <p id="code" className="mb-auto border-b border-gray-300 pb-2 tracking-widest dark:text-white">
        {display}
      </p>

      <div className="flex items-center justify-between pb-4">
        <button type="button" className="font-semibold text-emerald-600">
          Resend Code
        </button>
        <button
          type="button"
          onClick={() => navigate('/location')}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white"
        >
          ›
        </button>
      </div>

      <NumericKeypad
        onKeyPress={(key) => setCode((prev) => applyKeypadInput(prev, key, 4))}
      />
    </div>
  )
}

export default Otp
