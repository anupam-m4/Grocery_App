import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '+*#', '0', '⌫']

function PhoneEntry() {
  const [number, setNumber] = useState('')
  const navigate = useNavigate()

  function handleKeyPress(key: string) {
    if (key === '⌫') {
      setNumber((prev) => prev.slice(0, -1))
    } else if (key !== '+*#') {
      setNumber((prev) => prev + key)
    }
  }

  return (
    <div className="flex h-screen flex-col bg-gradient-to-b from-rose-50 to-white px-6 pb-6 pt-12">
      <button type="button" onClick={() => navigate(-1)} className="mb-8 text-2xl">
        ‹
      </button>

      <h1 className="mb-6 text-2xl font-bold text-gray-900">
        Enter your mobile number
      </h1>

      <label className="mb-1 text-sm text-gray-500" htmlFor="mobile">
        Mobile Number
      </label>
      <div className="mb-auto flex items-center gap-2 border-b border-gray-300 pb-2">
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

      <div className="grid grid-cols-3 gap-3 bg-gray-100 p-4">
        {KEYS.map((key) => (
          <button
            type="button"
            key={key}
            onClick={() => handleKeyPress(key)}
            className="rounded-lg bg-white py-4 text-lg font-medium text-gray-900"
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default PhoneEntry
