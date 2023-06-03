import React from "react";
import Logo from "../../components/Logo.js";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";
import { NavLink } from "react-router-dom";
import Image from "../../assets/Reset-Psw-Image.png";

const ResetPassword = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="mt-10 ml-14">
          <Logo />
        </div>

        <div className="flex flex-col justify-center mt-40 ml-48 ">
          <h2 className=" text-2xl font-medium mb-10 text-[#32324D]">
            Reset Password
          </h2>
          <div className="flex flex-col gap-y-4">
            <Input type="password" placeholder="New password" />
            <Input type="password" placeholder="Confirm password" />
          </div>
          <div className="mt-20">
            <NavLink to="/signin">
              <Button text="Reset Password" />
            </NavLink>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="w-1/2">
        <img src={Image} alt="" className="" />
      </div>
    </div>
  );
};

export default ResetPassword;
