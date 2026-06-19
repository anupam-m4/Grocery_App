import { useNavigate } from 'react-router-dom'
import locationPin from '../assets/figma/location-pin.png'

function Location() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white px-6 pt-12 dark:from-gray-900 dark:to-gray-900">
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
      <select
        id="zone"
        className="mb-6 border-b border-gray-300 bg-transparent pb-2 outline-none dark:text-white"
      >
        <option>Banasree</option>
      </select>

      <label className="mb-1 text-sm text-gray-500" htmlFor="area">
        Your Area
      </label>
      <select
        id="area"
        className="mb-10 border-b border-gray-300 bg-transparent pb-2 text-gray-400 outline-none dark:text-white"
      >
        <option>Types of your area</option>
      </select>

      <button
        type="button"
        onClick={() => navigate('/home')}
        className="rounded-full bg-emerald-500 py-4 font-semibold text-white"
      >
        Submit
      </button>
    </div>
  )
}

export default Location
