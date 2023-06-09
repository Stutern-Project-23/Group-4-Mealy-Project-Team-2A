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
      <div className="mx-6 my-10 block lg:hidden">
        <img src={DiscountImg} />
      </div>
      {/* <div className="hidden lg:flex mb-72 mt-20 relative "> */}
      {/* float right? and margin top foe features  */}
      <div className="flex  mb-72 mt-20 relative ">
        <div
          className="absolute w-full h-full"
          style={{ backgroundImage: `url(${ChickenImg})` }}
        ></div>
        <img src={ChickenImg} className="absolute z-10 ml-52 mt-10 " />

        <div
          style={{
            backgroundImage: `url(${Shape})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          className="h-[23rem] w-[80%] absolute ml-96 flex flex-col"
        >
          <div className="absolute z-10 text-white mt-32 ml-48">
            <h2 className="font-bold text-4xl w-80 mt-3 mb-6">
              Great food and lots of discounted prices
            </h2>
            <div className="flex gap-x-5">
              <div className="flex relative w-[260px] ">
                <img src={Img1} className="absolute" />
                <img src={Img2} className="absolute z-10 ml-12" />
                <img src={Img3} className="absolute z-10 ml-24" />
                <img src={Img4} className="absolute z-10 ml-36" />
                <img src={Img5} className="absolute z-10 ml-48" />
              </div>
              <div>
                <p className="font-bold mb-2">Our Happy Customer</p>
                <div className="flex gap-x-2 items-center">
                  <img src={Star} className="h-5" />
                  <p className="font-bold">4.8</p>
                  <p className="text-[14px]">(1,9k Review)</p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Divider}
            className="absolute z-10 mt-36 ml-[660px] w-[10px]"
          />
          <h1 className="text-8xl font-bold text-white absolute z-10 mt-44 ml-[740px]">
            50%
          </h1>
        </div>
      </div>
      {/* <div
        style={{
          width: "30rem",
          height: "30rem",

          backgroundColor: "red",
        }}
      ></div> */}
    </>
  );
};

export default DiscountSection;
