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
      <div className="flex justify-between items-center h-9 bg-white p-2 rounded-xl border-solid border border-[#32324D] w-[400px]">
        <div className="flex ">
          <img src={Image} className="h-6" />
          <p className="font-normal text-[#32324D] ml-3">Current location</p>
        </div>
        <div>
          <img src={Arrow} className="h-2" />
        </div>
      </div>
      <img src={Profile} className="w-[36px] h-[36px]" />
      <img src={ShoppingBag} className="w-[28px] h-[28px]" />
      <img src={NotificationBell} className="w-[28px] h-[28px]" />
    </div>
  );
};

export default HeaderItems;
