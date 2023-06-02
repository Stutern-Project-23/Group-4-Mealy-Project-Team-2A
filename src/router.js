import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import AccountVerification from "./pages/accountVerification/AccountVerification";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import Homepage from "./pages/homepage/Homepage";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/verify-account" element={<AccountVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default MainRouter;

//         <Route path="/forgot-password" element={<ForgotPassword />} />
