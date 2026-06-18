import { Routes, Route } from 'react-router-dom'
import Splash from '../screens/Splash'
import Onboarding from '../screens/Onboarding'
import LoginMethod from '../screens/LoginMethod'
import PhoneEntry from '../screens/PhoneEntry'
import Otp from '../screens/Otp'
import EmailLogin from '../screens/EmailLogin'
import SignUp from '../screens/SignUp'
import Location from '../screens/Location'
import Home from '../screens/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<LoginMethod />} />
      <Route path="/phone" element={<PhoneEntry />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/email-login" element={<EmailLogin />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/location" element={<Location />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
