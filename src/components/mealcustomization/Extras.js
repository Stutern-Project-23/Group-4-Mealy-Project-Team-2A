import React, { useState } from "react";
import CloseButton from "../../assets/material-symbols_close.svg";
import DecrementButton from "../../assets/mealcustomization/decrement1.svg";
import IncrementButton from "../../assets/mealcustomization/increment1.svg";
import { data } from "../../pages/mealCustomization/ExtrasData";

const Extras = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity >= 1) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      {data.map((item) => {
        return (
          <>
            <div className="bg-white px-1 py-1.5 flex justify-between mb-3">
              <div className="flex gap-x-2 items-center">
                <img src={item.itemImg} className="w-12" />
                <div>
                  <p className="text-sm font-semibold">{item.itemName}</p>
                  <p className="font-normal text-xs">{item.itemPrice}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between">
                <img
                  src={CloseButton}
                  className="w-4 cursor-pointer block ml-auto"
                />
                <div className="flex items-center">
                  <img
                    src={DecrementButton}
                    onClick={handleDecrement}
                    className="w-4 cursor-pointer "
                  />
                  <div className=" w-8 text-center text-xs">{quantity}</div>
                  <img
                    src={IncrementButton}
                    onClick={handleIncrement}
                    className="w-4 cursor-pointer "
                  />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Extras;
