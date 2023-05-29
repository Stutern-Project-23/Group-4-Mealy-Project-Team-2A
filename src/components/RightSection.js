import React from "react";
import image from "../assets/verification-image.png";
import "../styles/ReuseableComponents.css";
import "../accountVerification/AccountVerification.css";

const RightSection = () => {
  return (
    <>
      <div className="rightSection">
        <img src={image} />
      </div>
    </>
  );
};

export default RightSection;
