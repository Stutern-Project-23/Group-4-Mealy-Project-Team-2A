import React from "react";
import HeaderItems from "./HeaderItems";
import Button from "./HeaderButtons";
import Logo from "../Logo";

const Header = () => {
  return (
    <>
      <div className="flex justify-between m-12">
        <Logo />
        <div className="flex space-x-8  items-center ">
          <HeaderItems text="Home" />
          <HeaderItems text="How to Order" />
          <HeaderItems text="Our Menu" />
          <HeaderItems text="Contact Us" />
          <Button text="Sign Up" />
          <Button text="Sign In" />
        </div>
      </div>
    </>
  );
};

export default Header;
