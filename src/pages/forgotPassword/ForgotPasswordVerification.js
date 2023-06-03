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
        <div className="flex flex-col justify-center mt-40 ml-48 ">
          {/* title */}
          <h2 className=" text-2xl font-medium mb-4 text-[#32324D]">
            Reset Password
          </h2>
          {/* Subtitle */}
          <p className="font-normal text-[#32324D] mb-12">
            Enter verification code sent to your Email
          </p>

          {/* Enter code field */}
          <Input type="text" placeholder="Enter code" />
          <p className="text-sm mt-8">
            Didn't get it?{" "}
            <span className="text-[#FA5A00]">
              Request another code in 2 minutes
            </span>
          </p>
          {/* button */}
          <div className="mt-20">
            <NavLink to="/reset-password">
              <Button text="Next" />
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
