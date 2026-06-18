import { useNavigate } from 'react-router-dom'
import deliveryManPhoto from '../assets/figma/delivery-man.jpg'

function Onboarding() {
  const navigate = useNavigate()

  return (
    <div className="flex h-screen flex-col bg-gray-900">
      <img
        src={deliveryManPhoto}
        alt="Delivery person"
        className="flex-1 object-cover"
      />
      <div className="flex flex-col gap-4 px-6 pb-10 pt-8 text-center text-white">
        <h1 className="text-3xl font-bold">
          Welcome
          <br />
          to our store
        </h1>
        <p className="text-sm text-gray-300">
          Get your groceries in as fast as one hour
        </p>
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="mt-4 rounded-full bg-emerald-500 py-4 font-semibold text-white"
        >
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Onboarding
