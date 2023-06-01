import React from "react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import SocialMedia from "./SocialMedia";
import LogoIcon from "../../assets/MEALY.png";
import signinBackground from "../../assets/signin.png";
import "./signin.css";

const SignIn = () => {
  const accountType = "talent";
  return (
    <section className="mealySignin">
      <SigninRight background={signinBackground} />
      <SigninLeft account={accountType} />
    </section>
  );
};

export const SigninRight = ({ background }) => {
  return (
    <div
      className="rightSection"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        order: "2",
      }}
    ></div>
  );
};

export const Logo = () => {
  return (
    <div className="logo">
      <img src={LogoIcon} alt="logo icon" />
    </div>
  );
};

const Heading = () => {
  return (
    <section className="signin">
      <div>
        <p className="signhead">
          <span className="signIcon">
            <BsArrowLeft />
          </span>{" "}
          Sign In
        </p>
      </div>
    </section>
  );
};

const Form = ({ account }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className="input">
      <div className="emailInput ">
        {/* <label className="mb-2" style={{color: "var(--black20"}}>Email</label> */}
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={onChangeEmail}
          className="mb-3 inputField"
          required
        />
      </div>
      <div className="passwordInput">
        {/* <label className="mb-2">Password</label> */}
        <div className="passwordPosition">
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="Password"
            className="inputField"
            minLength="8"
            required
          />
        </div>
      </div>
      <div>
        <a href="/" className="forgotPassword">
          Forgot Password
        </a>
      </div>
    </form>
  );
};
function handleSubmit() {
  window.location.reload(false);
}

const SubmitButton = () => {
  return (
    <div className="submitBtn">
      <input
        type="submit"
        onClick={handleSubmit}
        className="submitBtn1"
        value="Sign in"
      />
    </div>
  );
};

const GuestButton = () => {
  return (
    <div className="guestBtn">
      <input type="submit" className="guestBtn1" value="Continue as guest" />
    </div>
  );
};

export const SigninLeft = () => {
  return (
    <div className="">
      <Logo />

      <section className="leftSection">
        <Heading />
        <Form />
        <SubmitButton />
        <SocialMedia />
        <GuestButton />
      </section>
    </div>
  );
};
export default SignIn;
