import React, { useState } from "react";
import Logo from "../../components/Logo";
import Image from "../../assets/signin.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import apple from "../../assets/apple.svg";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebookIcon.svg";
import { NavLink } from "react-router-dom";

const SignIn = () => {
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
          className="flex flex-col justify-center mt-20 ml-48 w-72"
          // style={{ border: "2px solid red" }}
        >
          <h2 className=" text-2xl font-medium mb-6 text-[#32324D]">Sign In</h2>
          <form>
            <input
              type="email"
              value={email}
              placeholder="Phone number/Email"
              onChange={onChangeEmail}
              className="mb-3 inputField  bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              required
            />
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
              placeholder="Password"
              className="inputField  bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm"
              minLength="8"
              required
            />
            <NavLink to="/forgot-password-email">
              <p className="text-[#32324D] text-sm mt-3 ml-3">
                Forgot Password?
              </p>
            </NavLink>

            <div className="mt-[40px]">
              <NavLink to="/homepage">
                <input
                  type="submit"
                  // onClick={handleSubmit}
                  className="w-72 bg-[#fa5a00] text-white font-medium text-sm rounded-xl p-4 cursor-pointer"
                  value="Sign In"
                />
              </NavLink>
            </div>

            <div
              // style={{ border: "2px solid red" }}
              className="flex flex-col items-center"
            >
              <p className="mt-10 text-sm">Or</p>
              <p className="sign-in-using text-sm">Sign in using</p>
              <div className="social-media-icons flex flex-row gap-x-3 ">
                <a href="/">
                  <img
                    src={apple}
                    alt="apple icon"
                    className=" mt-6 mb-10 w-8"
                  />
                </a>
                <a href="/">
                  <img
                    src={google}
                    alt="google icon"
                    className="mt-6 mb-10 w-8"
                  />
                </a>
                <a href="/">
                  <img
                    src={facebook}
                    alt="facebook icon"
                    className=" mt-6 mb-10 w-8"
                  />
                </a>
              </div>
              <p className="">
                Don't have an account?
                <span className="text-[#FA5A00] font-bold ml-2 underline underline-offset-4">
                  Sign Up
                </span>
              </p>
              <p className="">Or</p>
              <div className="">
                <NavLink to="/guesthomepage">
                  <input
                    type="submit"
                    className="text-sm text-[#FC9155] underline underline-offset-4 font-bold cursor-pointer"
                    value="Continue as Guest"
                  />
                </NavLink>
              </div>
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

export default SignIn;
