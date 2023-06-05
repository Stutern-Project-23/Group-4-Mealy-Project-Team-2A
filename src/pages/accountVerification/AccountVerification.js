import React from "react";
import Logo from "../../components/Logo.js";
import Image from "../../assets/signin.png";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";
import BackArrow from "../../assets/back-arrow-responsive.svg";
import { NavLink, useNavigate } from "react-router-dom";

const AccountVerification = () => {
  const navigate = useNavigate();
  return (
    <div className="flex ">
      <div className="w-full lg:w-1/2">
        <div className="mt-10 ml-14 hidden lg:block">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <NavLink to="/signup">
          <div
            className="mt-10 ml-14 flex flex-row gap-x-3 lg:hidden cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <img src={BackArrow} />
          </div>
        </NavLink>
        <div className="flex flex-col justify-center items-center lg:items-start mt-[20%] mx-[15%] w-[70%]">
          <h2 className=" text-2xl font-medium mb-4 text-[#32324D]">
            Verify Email
          </h2>
          <p className="text-[13px] md:text-base font-normal text-[#32324D] mb-20">
            Enter verification code sent to your Email
          </p>
          <Input type="text" placeholder="Enter code" />
          <div className="mt-20 ml-6">
            <Button text="Verify" />
          </div>
        </div>
      </div>

      <div className="w-1/2 hidden lg:block h-[100vh]">
        <img src={Image} alt="" className="contain h-full w-full" />
      </div>
    </div>
  );
};

export default AccountVerification;
