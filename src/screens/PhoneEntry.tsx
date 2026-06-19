import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'
import NumericKeypad from '../components/NumericKeypad'
import { applyKeypadInput } from '../utils/keypad'
import { auth } from '../lib/firebase'
import { useAuthStore } from '../store/authStore'
import { COUNTRIES } from '../data/countries'
import CountryCodeSelect from '../components/CountryCodeSelect'
import AuthShell from '../components/AuthShell'

function sanitizeNumber(value: string, dialCode: string): string {
  const digitsOnly = value.replace(/\D/g, '')
  const dialDigits = dialCode.replace(/\D/g, '')
  return digitsOnly.startsWith(dialDigits) ? digitsOnly.slice(dialDigits.length) : digitsOnly
}

function PhoneEntry() {
  const [number, setNumber] = useState('')
  const [dialCode, setDialCode] = useState(COUNTRIES[0].dialCode)
  const [error, setError] = useState('')
  const [isSending, setIsSending] = useState(false)
  const navigate = useNavigate()
  const setConfirmationResult = useAuthStore((state) => state.setConfirmationResult)

  async function handleSubmit() {
    if (!number) return
    setError('')
    setIsSending(true)

    try {
      const verifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
        size: 'invisible',
      })
      const confirmationResult = await signInWithPhoneNumber(auth, `${dialCode}${number}`, verifier)
      setConfirmationResult(confirmationResult)
      navigate('/otp')
    } catch {
      setError('Could not send the code. Check the number and try again.')
    } finally {
      setIsSending(false)
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
          Enter your mobile number
        </h1>

        <label className="mb-1 text-sm text-gray-500" htmlFor="mobile">
          Mobile Number
        </label>
        <div className="mb-2 flex items-center gap-3 border-b border-gray-300 pb-2 dark:text-white">
          <CountryCodeSelect dialCode={dialCode} onChange={setDialCode} />
          <input
            id="mobile"
            type="tel"
            value={number}
            onChange={(e) => setNumber(sanitizeNumber(e.target.value, dialCode))}
            className="flex-1 bg-transparent outline-none"
          />
        </div>
        {error && <p className="text-sm text-red-500">{error}</p>}
        <div className="mb-auto" />

        <div id="recaptcha-container" />

        <div className="flex justify-end pb-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSending}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white disabled:opacity-50"
          >
            ›
          </button>
        </div>

        <div className="lg:hidden">
          <NumericKeypad
            onKeyPress={(key) => setNumber((prev) => applyKeypadInput(prev, key))}
          />
        </div>
      </div>
    </AuthShell>
  )
}

export default PhoneEntry
