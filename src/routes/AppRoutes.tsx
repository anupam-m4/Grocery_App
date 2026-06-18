import { Routes, Route } from 'react-router-dom'
import Splash from '../screens/Splash'
import Onboarding from '../screens/Onboarding'
import LoginMethod from '../screens/LoginMethod'
import PhoneEntry from '../screens/PhoneEntry'
import Otp from '../screens/Otp'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<LoginMethod />} />
      <Route path="/phone" element={<PhoneEntry />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  )
}

export default AppRoutes
