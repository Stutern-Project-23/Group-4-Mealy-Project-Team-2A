import React from "react";
import { Logo } from "../signIn/SignIn";
import Image from '../../assets/signin.png'

const AccountVerification = () => {
  return (
    // cointainer
     <div className="flex">
      {/* left section */}
    <div className="w-1/2">
      <Logo />
    <h2>AccountVerification</h2>
    </div>

    {/* image section */}
<div className="w-1/2">
  <img src={Image} alt="" />
</div>
   </div>
  
  );
};

export default AccountVerification;
