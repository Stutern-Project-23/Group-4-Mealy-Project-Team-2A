import React from "react";
import Image from "../../assets/signin.png";
import { Logo } from "../signIn/SignIn";

const ForgotPassword = () => {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    // container
    <div className="flex">
      {/* right section */}
      <div className="w-1/2">
        <Logo />
        <h2>ForgotPassword</h2>
      </div>

      {/* image section */}
      <div className="w-1/2">
        <img src={Image} alt="" />
      </div>
    </div>
  );
};

export default ForgotPassword;
