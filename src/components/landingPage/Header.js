import React, { useState } from "react";
import Logo from "../Logo";
import HeaderButtons from "./HeaderButtons";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center h-20 max-w-full mx-6 lg:mx-12">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul className="lg:space-x-7 items-center hidden lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#FA5A00] font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>How to Order</li>
          <li>Our Menu</li>
          <li>Contact Us</li>
          <li>
            <HeaderButtons />
          </li>
        </ul>

        <div onClick={handleNav} className="cursor-pointer block lg:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={
            !nav
              ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-grey-900 z-20 pl-6 bg-[#f5f5f5] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="h-20 flex justify-between items-center ">
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <ul className="mt-4 ">
            <li className="py-3 border-b border-grey-600">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#FA5A00] font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="py-3 border-b border-grey-600">How to Order</li>
            <li className="py-3 border-b border-grey-600">Our Menu</li>
            <li className="py-3 border-b border-grey-600">Contact Us</li>
            <li className="py-3">
              <HeaderButtons />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
