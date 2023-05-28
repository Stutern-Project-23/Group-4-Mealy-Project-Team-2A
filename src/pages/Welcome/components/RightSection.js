import React from "react";
import image from "../images/verification-image.png";
import "../styles/AccountVerification.css";
import "./ReuseableComponents.css";
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