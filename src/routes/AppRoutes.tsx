import { Routes, Route } from 'react-router-dom'
import Splash from '../screens/Splash'
import Onboarding from '../screens/Onboarding'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/onboarding" element={<Onboarding />} />
    </Routes>
  )
}

export default AppRoutes
