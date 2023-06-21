import React from "react";
import Logo from "../Logo";
import HeaderItems from "./HeaderItems";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="flex fixed bg-[#f8f8f8] z-20 justify-between items-center h-20 w-full px-4 lg:px-12 mb-8 lg:mb-14">
        <NavLink to="/homepage">
          <Logo />
        </NavLink>
        <HeaderItems />
      </div>
    </>
  );
};

export default Header;
