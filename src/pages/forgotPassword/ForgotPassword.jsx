import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "../../components/RightSection";
import "./forgotPassword.css"

const ForgotPassword = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
   <>
   <div className="container">
    <LeftSection />
    <RightSection />
   </div>
   </>
  );
};

export default ForgotPassword;