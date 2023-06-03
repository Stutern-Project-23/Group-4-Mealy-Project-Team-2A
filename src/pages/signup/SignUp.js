import React, { useState } from "react";
import Logo from "../../components/Logo";
import Image from "../../assets/Reset-Psw-Image.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebookIcon.svg";
import { NavLink } from "react-router-dom";
import "../signup/checkbox.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  // function handleSubmit() {
  //   window.location.reload(false);
  // }

  return (
    <div className="flex">
      <div className="w-1/2">
        <div className="mt-10 ml-14">
          <Logo />
        </div>
        <div
          className="flex flex-col justify-center mt-16 ml-48"
          // style={{ border: "2px solid red" }}
        >
          <h2 className=" text-2xl font-medium mb-6 text-[#32324D]">
            Create an account
          </h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              className="mb-3 inputField  bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              required
            />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={onChangeEmail}
              className="mb-3 inputField  bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              required
            />
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              className="inputField  mb-3 bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              minLength="8"
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="inputField  bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              minLength="8"
              required
            />
            <div className="flex flex-col gap-y-3 mt-10 text-[#32324D]">
              <label class="checkmark-container">
                I want to receive discounts, loyalty offers and other updates
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="checkmark-container ml-4">
                yes, I understand and agree to Mealy's Terms of service
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div className="mt-[32px] ml-4">
              <NavLink to="/verify-account">
                <input
                  type="submit"
                  // onClick={handleSubmit}
                  className="w-72 bg-[#fa5a00] text-white font-medium text-sm rounded-xl p-4 cursor-pointer"
                  value="Create an Account"
                />
              </NavLink>
            </div>

            <div
              //   style={{ border: "2px solid red" }}
              className="flex flex-col items-center w-72"
            >
              <p className="sign-in-using text-sm mt-8">Sign up using</p>
              <div className="social-media-icons flex flex-row gap-x-5 mt-2">
                <a href="/">
                  <img src={apple} alt="apple icon" className=" mb-10 w-8" />
                </a>
                <a href="/">
                  <img src={google} alt="google icon" className=" mb-10 w-8" />
                </a>
                <a href="/">
                  <img
                    src={facebook}
                    alt="facebook icon"
                    className=" mb-10 w-8"
                  />
                </a>
              </div>
              <p className="text-sm">
                Already have an account?
                <NavLink to="/signin">
                  <span className="text-[#FA5A00] font-bold ml-2 underline underline-offset-4">
                    Sign In
                  </span>
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* image section */}
      <div className="w-1/2">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default SignUp;
