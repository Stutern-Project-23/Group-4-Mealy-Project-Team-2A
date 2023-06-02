import React from "react";
import Image from "../../assets/location-icon.svg";
import Arrow from "../../assets/arrow.svg";
import HeroImg from "../../assets/HeroImg.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${HeroImg})`, height: "627px" }}
    >
      <h2 className="text-5xl font-bold text-white w-5/12 text-center mb-5">
        Order your favorite meal at the comfort of your home
      </h2>
      <p className="text-[#FEDECC] font-light text-xl tracking-wide mb-11">
        Guaranteed Swift responsiveness to your orders
      </p>
      <div className="flex justify-between w-80 h-8 bg-white p-2 rounded-lg border-solid border border-black">
        <img src={Image}  alt="" />
        <p>Select your location</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
