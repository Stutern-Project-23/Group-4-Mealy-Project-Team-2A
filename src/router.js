import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signup/SignUp";
import AccountVerification from "./pages/accountVerification/AccountVerification";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ForgotPasswordCode from "./pages/forgotPassword/ForgotPasswordCode";
import ForgotPasswordEmail from "./pages/forgotPassword/ForgotPasswordEmail";
import ForgotPasswordVerification from "./pages/forgotPassword/ForgotPasswordVerification";
import LandingPage from "./pages/landingPage/LandingPage";
import Homepage from "./pages/homePage/HomePage";
import GuestHomepage from "./pages/homePage/GuestHomePage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
        <Route
          path="/forgot-password-verification"
          element={<ForgotPasswordVerification />}
        />
        <Route
          path="/forgot-password-email"
          element={<ForgotPasswordEmail />}
        />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-account" element={<AccountVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/guesthomepage" element={<GuestHomepage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;

//         <Route path="/forgot-password" element={<ForgotPassword />} />
