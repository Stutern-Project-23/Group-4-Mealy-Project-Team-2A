import React from "react";
import FoodRider from "../../assets/FoodRider.svg";
import frame1 from "../../assets/Frame 17.png";
import frame2 from "../../assets/Frame 18.png";
import frame3 from "../../assets/Frame 19.png";

const OrderMeal = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 ">
      <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] bg-[#FA5A00]  rounded-[50%] p-2 relative mt-24 ">
        <div className=" w-[220px] h-[220px] lg:w-[270px] lg:h-[270px] bg-[#FCAC7F] rounded-[50%] p-2 absolute mt-8 ml-8 "></div>
        <div
          className="w-[17rem] h-[17rem] lg:w-[20rem] lg:h-[20rem] absolute bg-cover rounded-full"
          style={{ backgroundImage: `url(${FoodRider})` }}
        ></div>
      </div>

      <div className="mx-6">
        <h2 className="text-[#3E2D2D] text-3xl font-bold text-center mb-4">
          Your order is delivered
          <span className=" text-[#FA5A00]"> quickly</span>
        </h2>
        <p className="mb-7 text-xs text-center lg:text-left text-[#3E2D2D] lg:ml-16">
          Enjoy your food in a warm state will increase appetite
        </p>

        <div
          className="flex gap-4 bg-white lg:w-[490px] h-24 pb-3 px-4 mb-2 rounded"
          style={{ boxShadow: "0px 2px 16px rgba(255, 66, 46, 0.12)" }}
        >
          <img src={frame1} alt="" className="w-13 h-13 mt-3" />
          <span>
            <h3 className="font-semibold pt-2 ">Fast delivery</h3>
            <p className="w-[200px] text-xs mt-2">
              Delievered by professional courier and on time place
            </p>
          </span>
        </div>

        <div
          className="flex gap-4 bg-white lg:w-[490px] h-24 pb-3 px-4 mb-2 rounded"
          style={{ boxShadow: "0px 2px 16px rgba(255, 66, 46, 0.12)" }}
        >
          <img src={frame2} alt="" className="w-13 h-13 mt-3" />
          <span>
            <h3 className="font-semibold pt-2 ">Order from anywhere</h3>
            <p className="w-[200px] text-xs mt-2">
              Order food anywhere easily via smartphone{" "}
            </p>
          </span>
        </div>

        <div
          className="flex gap-4 bg-white lg:w-[490px] h-24 pb-3 px-4 rounded"
          style={{ boxShadow: "0px 2px 16px rgba(255, 66, 46, 0.12)" }}
        >
          <img src={frame3} alt="" className="w-13 h-13 mt-3" />
          <span>
            <h3 className="font-semibold pt-2 ">Receive on time</h3>
            <p className="w-[200px] text-xs mt-2">
              Receive your food while it is still warm
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderMeal;
