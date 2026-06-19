import { useNavigate } from 'react-router-dom'
import groceryImage from '../assets/figma/Mask Group.png'
import googleButton from '../assets/figma/google.png'
import facebookButton from '../assets/figma/facebook.png'
import AuthShell from '../components/AuthShell'

function LoginMethod() {
  const navigate = useNavigate()

  return (
    <AuthShell>
      <div className="flex h-screen flex-col bg-linear-to-b from-rose-50 to-white pb-10 dark:from-gray-900 dark:to-gray-900 lg:h-full">
        <img
          src={groceryImage}
          alt="Fresh groceries"
          className="mb-8 h-72 w-full object-cover"
        />

        <div className="flex flex-1 flex-col px-6">
          <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
            Get your groceries
            <br />
            with nectar
          </h1>

          <button
            type="button"
            onClick={() => navigate('/phone')}
            className="mb-6 flex items-center gap-3 border-b border-gray-200 pb-3 text-left text-gray-900 dark:border-gray-700 dark:text-white"
          >
            <span aria-hidden="true">🌐</span>
            <span>+880</span>
          </button>

          <p className="mb-4 text-center text-sm text-gray-400">
            Or connect with social media
          </p>

          <button type="button" className="mb-3">
            <img src={googleButton} alt="Continue with Google" className="w-full" />
          </button>
          <button type="button">
            <img src={facebookButton} alt="Continue with Facebook" className="w-full" />
          </button>
        </div>
      </div>
    </AuthShell>
  )
}

export default LoginMethod
