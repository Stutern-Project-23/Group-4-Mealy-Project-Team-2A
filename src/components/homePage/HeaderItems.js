import React from "react";
import Image from "../../assets/location-icon.svg";
import Arrow from "../../assets/arrow.svg";
import Profile from "../../assets/homePage/profile.svg";
import ShoppingBag from "../../assets/homePage/shoppingbag.svg";
import NotificationBell from "../../assets/homePage/notification.svg";

const HeaderItems = () => {
  return (
    <div className="flex items-center gap-x-3">
      {/* dropdown */}
      <div className="hidden lg:flex justify-between items-center h-9 bg-white p-2 rounded-xl border-solid border border-[#32324D] w-[400px]">
        <div className="flex ">
          <img src={Image} className="h-6" />
          <p className=" font-normal text-[#32324D] ml-3">Current location</p>
        </div>
        <div>
          <img src={Arrow} className="h-2" />
        </div>
      </div>
      <div className="flex lg:hidden justify-between p-2 gap-x-2 items-center h-9 bg-white rounded border border-solid border-[#32324D] w-[50px] ">
        <div className="flex ">
          <img src={Image} className="h-6" />
        </div>
        <div>
          <img src={Arrow} className="h-2" />
        </div>
      </div>
      <img
        src={Profile}
        className="w-[30px] h-[30px] lg:w-[36px] lg:h-[36px]"
      />
      <img
        src={ShoppingBag}
        className="w-[22px] h-[22px] lg:w-[28px] lg:h-[28px]"
      />
      <img
        src={NotificationBell}
        className="w-[22px] h-[22px] lg:w-[28px] lg:h-[28px]"
      />
    </div>
  );
};

export default HeaderItems;
