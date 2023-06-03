import React from "react";
import Meal1 from "../../assets/meal1.svg";
import Meal2 from "../../assets/meal2.svg";
import Meal3 from "../../assets/meal3.svg";
import HamBurger from "../../assets/hamburger.svg";
import Button from "../Button";
import { NavLink } from "react-router-dom";

const MealContainer = () => {
  return (
    <div className=" flex justify-between border bg-[#BDBDBD]  h-60 m-12 p-6">
      <div className="text-center mt-4">
        <h2 className="text-5xl font-normal tracking-wide w-[580px] mb-8 text-[#1E1E1E]">
          Register and get discount up to 50%
        </h2>
        <NavLink to="/signup">
          <Button text="Create account" />
        </NavLink>
      </div>

      <div className="flex justify-between">
        <div className="mt-6">
          <h3 className="bg-white px-6 py-0.5 rounded-2xl text-lg mb-4 font-light">
            Want a meal plan?
          </h3>
          <h3 className="bg-white px-6 py-0.5 rounded-2xl text-lg mb-4 font-light">
            Track meal calorie
          </h3>
          <h3 className="bg-white px-6 py-0.5 rounded-2xl text-lg mb-4 font-light">
            Customized meal
          </h3>
        </div>

        <div className=" flex">
          <div className="relative ">
            <img
              src={Meal1}
              alt=""
              className="absolute ml-14 top-[-22px] z-10"
            />
            <img src={Meal2} alt="" className="absolute ml-6 top-[42px] z-10" />
            <img
              src={Meal3}
              alt=""
              className="relative w-[90px] mt-28 left-[42px]"
            />
          </div>
          <div>
            <img src={HamBurger} alt="" className="w-48 mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealContainer;
