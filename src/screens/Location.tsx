import { useNavigate } from 'react-router-dom'
import locationPin from '../assets/figma/location-pin.png'
import AuthShell from '../components/AuthShell'

function Location() {
  const navigate = useNavigate()

  return (
    <AuthShell>
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pt-12 dark:from-gray-900 dark:to-gray-900 lg:h-full">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="mb-8 self-start text-2xl dark:text-white"
      >
        ‹
      </button>

      <img src={locationPin} alt="Location pin" className="mx-auto mb-6 w-32" />

      <h1 className="mb-2 text-center text-2xl font-bold text-gray-900 dark:text-white">
        Select Your Location
      </h1>
      <p className="mb-10 text-center text-sm text-gray-500">
        Switch on your location to stay in tune with what&apos;s happening in
        your area
      </p>

      <label className="mb-1 text-sm text-gray-500" htmlFor="zone">
        Your Zone
      </label>
      <div className="relative mb-6">
        <select
          id="zone"
          className="w-full appearance-none border-b border-gray-300 bg-transparent pb-2 pr-6 outline-none dark:text-white"
        >
          <option>Banasree</option>
        </select>
        <span className="pointer-events-none absolute right-0 top-0 text-gray-400">⌄</span>
      </div>

      <label className="mb-1 text-sm text-gray-500" htmlFor="area">
        Your Area
      </label>
      <div className="relative mb-10">
        <select
          id="area"
          className="w-full appearance-none border-b border-gray-300 bg-transparent pb-2 pr-6 text-gray-400 outline-none dark:text-white"
        >
          <option>Types of your area</option>
        </select>
        <span className="pointer-events-none absolute right-0 top-0 text-gray-400">⌄</span>
      </div>

      <button
        type="button"
        onClick={() => navigate('/home')}
        className="rounded-full bg-emerald-500 py-4 font-semibold text-white"
      >
        Submit
      </button>
    </div>
    </AuthShell>
  )
}

export default Location
