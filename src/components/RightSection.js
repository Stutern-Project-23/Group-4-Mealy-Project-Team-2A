import React from "react";
import image from "../assets/verification-image.png";
import "../styles/ReusableComponents.css";


const RightSection = () => {
  return (
    <>
      <div className="rightSection">
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default RightSection;
