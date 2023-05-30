import React from "react";
import MainCaption from "./MainCaption";
import Input from "./Input";
import Button from "./Button";
import "../styles/ReusableComponents.css";
import MainHeading from "./MainHeading";
import Logo from "./Logo";

const LeftSection = () => {
  return (
    <>
      <div className="leftSection">
        <Logo />
        <div className="mainSection">
          <MainHeading heading="Verify Email" />
          <MainCaption caption="Enter verification code sent to your Email" />
          <Input text="Enter code" />
        </div>
        <Button text="Verify" />
      </div>
    </>
  );
};

export default LeftSection;
