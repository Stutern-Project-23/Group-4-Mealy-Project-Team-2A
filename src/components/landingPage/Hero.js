import React from "react";
import Image from "../../assets/location-icon.svg";
import Arrow from "../../assets/arrow.svg";
import HeroImg from "../../assets/HeroImg.png";

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center pt-16"
      style={{
        backgroundImage: `url(${HeroImg})`,
        height: "500px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ margin: "50px" }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white p-0 lg:px-60 md:px-36  mb-5">
          Order your favorite meal at the comfort of your home
        </h2>
        <p className="text-[#FEDECC] font-light text-xl tracking-wide mb-14">
          Guaranteed Swift responsiveness to your orders
        </p>
        <div className="flex justify-between h-10 bg-white p-2 rounded-xl border-solid border border-[#32324D] w-full md:w-2/5">
          <div className="flex gap-x-2 pb-3">
            <img src={Image} className="h-8 pb-2" />
            <p className="font-normal text-[#32324D]">Select your location</p>
          </div>
          <div>
            <img src={Arrow} className="mt-2 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
