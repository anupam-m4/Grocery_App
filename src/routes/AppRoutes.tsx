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
import ProductDetail from '../screens/ProductDetail'
import Cart from '../screens/Cart'
import Favourites from '../screens/Favourites'
import Explore from '../screens/Explore'
import CategoryListing from '../screens/CategoryListing'
import Search from '../screens/Search'
import Account from '../screens/Account'

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
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/category/:category" element={<CategoryListing />} />
      <Route path="/search" element={<Search />} />
      <Route path="/account" element={<Account />} />
    </Routes>
  )
}

export default AppRoutes
