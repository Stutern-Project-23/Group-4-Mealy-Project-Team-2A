import React, { useState, useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "../components/RightSection";
import "./forgotPassword.css"

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setMessage("");
  //   }, 3000);

  //   return () => clearTimeout(timer);
  // }, [message]);

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