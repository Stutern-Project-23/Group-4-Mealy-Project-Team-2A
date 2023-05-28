import React from "react";
import image from "../images/verification-image.png";
import "../components/ReusableComponents.css";
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
