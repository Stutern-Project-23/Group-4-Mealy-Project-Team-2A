import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import SignIn  from "./pages/Welcome/signIn/Signin";
import AccountVerification from "./pages/Welcome/accountVerification/AccountVerification";
import ForgotPassword from "./pages/Welcome/forgotPassword/forgotPassword";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SignIn /> */}
    <AccountVerification />
    <ForgotPassword />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
