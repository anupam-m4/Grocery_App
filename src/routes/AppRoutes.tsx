import { Routes, Route } from 'react-router-dom'
import Splash from '../screens/Splash'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  )
}

export default AppRoutes
