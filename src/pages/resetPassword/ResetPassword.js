import React from "react";
import ResetPasswordImage from "../../assets/Reset-Psw-Image.png";
import Input from "../../components/Input";
import Button from "../../components/Button";

const ResetPassword = () => {
  return (
    <div className="flex">
      {/* logo */}
      <h2 className="text-4xl font-bold p-10">MEALY</h2>
      <div className="w-1/2 bg-[#32324] flex justify-center items-center">
        <div className="mb-28 mr-20">
          {/* title */}
          <h2 className=" text-2xl font-medium mb-4 text-[#32324D">
            Reset Password
          </h2>

          {/* new password fields */}
          <Input type="password" placeholder="New Password" className="mt-8" />
          <Input
            type="password"
            placeholder="Confirm Password"
            className="mt-4"
          />

          {/* button */}
          <Button text="Reset Password" className="mt-24" />
        </div>
      </div>

      {/* right section */}
      <div className="w-1/2">
        <img src={ResetPasswordImage} alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;
