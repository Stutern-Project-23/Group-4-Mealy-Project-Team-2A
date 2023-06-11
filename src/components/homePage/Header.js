import React from "react";
import Logo from "../Logo";
import HeaderItems from "./HeaderItems";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex justify-between mt-10 mx-4 lg:mx-12 mb-8 lg:mb-14 ">
        <Logo />
        <HeaderItems />
      </div>
    </>
  );
};

export default Header;
