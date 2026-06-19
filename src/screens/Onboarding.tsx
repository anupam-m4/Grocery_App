import { useNavigate } from 'react-router-dom'
import deliveryManPhoto from '../assets/figma/delivery-man.jpg'

function Onboarding() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-gray-900 lg:grid lg:grid-cols-2">
      <img
        src={deliveryManPhoto}
        alt="Delivery person"
        className="w-full flex-1 object-cover lg:h-screen lg:flex-none"
      />
      <div className="flex flex-col gap-4 px-6 pb-10 pt-8 text-center text-white lg:h-screen lg:items-start lg:justify-center lg:px-16 lg:text-left">
        <span className="hidden text-3xl lg:block" aria-hidden="true">
          🥕
        </span>
        <h1 className="text-3xl font-bold lg:text-5xl">
          Welcome
          <br />
          to our store
        </h1>
        <p className="text-sm text-gray-300 lg:text-lg">
          Get your groceries in as fast as one hour
        </p>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="mt-4 rounded-full bg-emerald-500 py-4 font-semibold text-white lg:w-64 lg:px-8"
        >
          Get Started
        </button>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="hidden text-sm text-gray-300 underline lg:block"
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  )
}

export default Onboarding
