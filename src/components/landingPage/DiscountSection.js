import React from "react";
import Shape from "../../assets/discount-section-shape.svg";
import ChickenImg from "../../assets/discount-section-chicken.svg";
import Divider from "../../assets/discount-section-divider.svg";
import Star from "../../assets/Star.svg";
import Img1 from "../../assets/discount-section-img1.svg";
import Img2 from "../../assets/discount-section-img2.svg";
import Img3 from "../../assets/discount-section-img3.svg";
import Img4 from "../../assets/discount-section-img4.svg";
import Img5 from "../../assets/discount-section-img5.svg";
import DiscountImg from "../../assets/discount-section.png";

const DiscountSection = () => {
  return (
    <>
      <div className="flex mb-40 sm:mb-52 md:mb-96 mb-72 md:mt-10 lg:mt-20 relative ">
        <div
          className="absolute w-full h-full"
          style={{ backgroundImage: `url(${ChickenImg})` }}
        ></div>
        <img
          src={ChickenImg}
          className="absolute z-10 ml-[5%] md:ml-[2%] lg:ml-[15%] mt-[5%] lg:mt-[1%] xl:mt-16 w-[25%] md:w-[27%] lg:w-[29%] xl:w-[25%] "
        />

        <div
          style={{
            backgroundImage: `url(${Shape})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="h-[23rem] mt-2 w-[70%] md:w-[80%] lg:w-[65%] xl:w-[80%] absolute ml-[24%] md:ml-[16%] lg:ml-[34%] xl:ml-[27%] flex flex-col"
        >
          <div className="absolute z-10 text-white mt-[10%] md:mt-[12%] xl:mt-32 ml-[8%] md:ml-[15%] lg:ml-[14%] xl:ml-48  ">
            <h2 className="font-bold text-xs sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[80%] mt-3 mb-2 md:mb-6 leading-3 sm:leading-6">
              Great food and lots of discounted prices
            </h2>
            <div className="flex gap-x-1 sm:gap-x-2 xl:gap-x-5 ">
              <div className="flex relative w-[20%] sm:w-[25%] md:w-[28%] lg:w-[32%] xl:w-[260px] md:mr-12 lg:mr-0 ">
                <img
                  src={Img1}
                  className="absolute w-6 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <img
                  src={Img2}
                  className="absolute z-10 ml-3 sm:ml-6 md:ml-10 xl:ml-12 w-6 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <img
                  src={Img3}
                  className="absolute z-10 ml-6 sm:ml-12 md:ml-16 xl:ml-24 w-6 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <img
                  src={Img4}
                  className="absolute z-10 hidden md:block md:ml-24 xl:ml-36 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                />
                <img
                  src={Img5}
                  className="absolute z-10 hidden md:block md:ml-32 xl:ml-48 sm:w-10 md:w-12 lg:w-14 xl:w-16"
                />
              </div>
              <div>
                <p className="font-bold mb-0 sm:mb-2 text-[8px] sm:text-[12px] md:text-[13px] w-[100%]">
                  Our Happy Customer
                </p>
                <div className="flex gap-x-2 items-center">
                  <img src={Star} className="h-3 md:h-4 lg:h-5" />
                  <p className="font-bold text-[8px] sm:text-[12px] md:text-[13px]">
                    4.8
                  </p>
                  <p className=" text-[8px] sm:text-[12px] md:text-[13px] lg:text-[14px]">
                    (1,9k Review)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Divider}
            className=" absolute z-10 mt-[10%] sm:mt-[12%] xl:mt-36  ml-[65%] sm:ml-[64%] md:ml-[66%] xl:ml-[660px] w-[6px] sm:w-[10px]"
          />
          <h1 className="text-3xl sm:text-6xl md:text-7xl xl:text-8xl font-bold text-white absolute z-10 mt-[15%] sm:mt-[17%] xl:mt-44 ml-[70%] sm:ml-[72%] lg:ml-[75%] xl:ml-[740px]">
            50%
          </h1>
        </div>
      </div>
    </>
  );
};

export default DiscountSection;
