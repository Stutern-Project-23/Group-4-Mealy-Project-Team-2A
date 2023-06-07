import React from "react";
import Logo from "../../components/Logo.js";
import Image from "../../assets/signin.png";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex">
      {/* left section */}
      <div className="w-1/2">
        {/* Logo */}
        <div className="mt-10 ml-14">
          <Logo />
        </div>
        {/* border-solid border-2 border-sky-500  */}
        <div className="flex flex-col justify-center mt-44 ml-48 ">
          {/* title */}
          <h2 className=" text-2xl font-medium mb-4 text-[#32324D]">
            Reset Password
          </h2>
          {/* Subtitle */}
          <p className="font-normal text-[#32324D] mb-12">
            Enter the email associated with your account and we will send you a
            code to rest it.
          </p>

          {/* Enter code field */}
          <Input type="email" placeholder="Enter address" />
          {/* button */}
          <div className="mt-20">
            <NavLink to="/forgot-password-verification">
              <Button text="Get Code" />
            </NavLink>
          </div>

          <NavLink to="/guesthomepage">
            <p className="text-[#32324D] text-sm mt-8 ml-[122px]">Cancel</p>
          </NavLink>
        </div>
      </div>

      {/* image section */}
      <div className="w-1/2">
        <img src={Image} alt="" className="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
