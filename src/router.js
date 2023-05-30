import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/signIn/Signin'
import ForgotPassword from './pages/forgotPassword/forgotPassword'
import AccountVerification from './pages/accountVerification/AccountVerification'
import ResetPassword from './pages/resetPassword/ResetPassword'

const MainRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-account" element={<AccountVerification />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default MainRouter