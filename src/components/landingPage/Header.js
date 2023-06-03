import React from "react";
import HeaderItems from "./HeaderItems";
import Button from "./HeaderButtons";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <>
      <div className="flex justify-between mx-12 mt-6 mb-14">
        <Logo />
        <div className="flex space-x-8  items-center ">
          <HeaderItems title="/" text="Home" />
          <HeaderItems text="How to Order" />
          <HeaderItems text="Our Menu" />
          <HeaderItems text="Contact Us" />
          <HeaderButtons />
        </div>
      </div>
    </>
  );
};

export default Header;
