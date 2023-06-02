import React from "react";
import FavoriteOrderCarousel from "./FavoriteOrderCarousel";

const FavoriteOrder = () => {
  return (
    <div className="ml-12 mt-6 mb-20">
      <p className="text-[#3E2D2D] font-bold mb-6 ">
        Favorite <span className="text-[#FF422E]">Order</span>
      </p>
      <FavoriteOrderCarousel />
    </div>
  );
};

export default FavoriteOrder;
