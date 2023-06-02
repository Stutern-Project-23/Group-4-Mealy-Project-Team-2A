import React from "react";
import Image from "../../assets/location-icon.svg";
import Arrow from "../../assets/arrow.svg";
import HeroImg from "../../assets/HeroImg.png";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${HeroImg})`,
        height: "523px",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-5xl font-bold text-white w-5/12 text-center mb-5">
        Order your favorite meal at the comfort of your home
      </h2>
      <p className="text-[#FEDECC] font-light text-xl tracking-wide mb-14">
        Guaranteed Swift responsiveness to your orders
      </p>
      <div className="flex justify-between h-10 bg-white p-2 rounded-xl border-solid border border-[#32324D] w-2/5">
        <div className="flex gap-x-5 pb-3">
          <img src={Image} className="h-8 pb-2" />
          <p className="font-normal text-[#32324D]">Select your location</p>
        </div>
        <div>
          <img src={Arrow} className="mt-2 w-3" />
        </div>

      <div className="flex justify-between w-80 h-8 bg-white p-2 rounded-lg border-solid border border-black">
        <img src={Image}  alt="" />
        <p>Select your location</p>
        <img src={Arrow} alt="" />
      </div>
    </div>
  );
};

export default Hero;
