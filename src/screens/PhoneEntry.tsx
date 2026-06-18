import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NumericKeypad from '../components/NumericKeypad'
import { applyKeypadInput } from '../utils/keypad'

function PhoneEntry() {
  const [number, setNumber] = useState('')
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pb-6 pt-12 dark:from-gray-900 dark:to-gray-900">
      <button type="button" onClick={() => navigate(-1)} className="mb-8 text-2xl dark:text-white">
        ‹
      </button>

      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Enter your mobile number
      </h1>

      <label className="mb-1 text-sm text-gray-500" htmlFor="mobile">
        Mobile Number
      </label>
      <div className="mb-auto flex items-center gap-2 border-b border-gray-300 pb-2 dark:text-white">
        <span>🇧🇩 +880</span>
        <input
          id="mobile"
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      <div className="flex justify-end pb-4">
        <button
          type="button"
          onClick={() => navigate('/otp')}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white"
        >
          ›
        </button>
      </div>

      <NumericKeypad
        onKeyPress={(key) => setNumber((prev) => applyKeypadInput(prev, key))}
      />
    </div>
  )
}

export default PhoneEntry
