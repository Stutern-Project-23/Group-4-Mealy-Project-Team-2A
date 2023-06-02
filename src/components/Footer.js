import React from "react";
import LinkedIn from "../assets/LinkedIn.svg";
import InstagramIcon from "../assets/Instagram.svg";
import Twitter from "../assets/TwitterSquared.svg";
import Facebook from "../assets/Facebook.svg";

const Footer = () => {
  return (
    <div className="h-40 bg-[#FA5A00] flex  gap-32 text-xs text-white pt-4 pl-10 ">
      <div>
        <h2  className="text-xl font-semibold pb-3"> Mealy</h2>
        <p>Your fatest and reliable food and drinks delivery partner</p>
      </div>

      <div>
        <h2 className="text-sm font-semibold pb-3">Company</h2>
        <div className="flex flex-col">
          <a href="/">About Us</a>
          <a href="/">Partnerships</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Customer</a>
        </div>
      </div>

      <div>
        <h2  className="text-sm font-semibold pb-3">Services</h2>
        <div className="flex flex-col">
          <a href="/">Menu</a>
          <a href="/">Recipe</a>
          <a href="/">Delivery</a>
          <a href="/">Customer</a>
        </div>
      </div>

      <div>
        <h2  className="text-sm font-semibold pb-3">Support</h2>
        <div className="flex flex-col">
          <a href="/">Help Center</a>
          <a href="/">Status</a>
          <a href="/">Terms of Services</a>
        </div>
      </div>

      <div class>
        <h2  className="text-sm font-semibold pb-2">Contact us</h2>
        <div className="flex w-5 gap-2">
          <img src={LinkedIn} alt="" />
          <img src={Twitter} alt="" />
          <img src={InstagramIcon} alt="" />
          <img src={Facebook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
