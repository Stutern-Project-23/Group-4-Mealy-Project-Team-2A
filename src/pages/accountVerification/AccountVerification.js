import React from "react";
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";
import "../../styles/ReuseableComponents";
import "./AccountVerification.css";

const AccountVerification = () => {
  return (
    <>
      <div className="container">
        <LeftSection />
        <RightSection />
      </div>
    </>
  );
};

export default AccountVerification;
