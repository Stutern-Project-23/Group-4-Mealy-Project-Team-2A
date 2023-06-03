import React from "react";
import Logo from "../../components/Logo.js";
import Image from "../../assets/signin.png";
import Input from "../../components/Input.js";
import Button from "../../components/Button.js";

const AccountVerification = () => {
  return (
    // container
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
            Verify Email
          </h2>
          {/* Subtitle */}
          <p className="font-normal text-[#32324D] mb-20">
            Enter verification code sent to your Email
          </p>

          {/* Enter code field */}
          <Input type="text" placeholder="Enter code" />
          {/* button */}
          <div className="mt-20 ml-6">
            <Button text="Verify" />
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="w-1/2">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default AccountVerification;
