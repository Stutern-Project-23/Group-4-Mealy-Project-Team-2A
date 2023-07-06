import React, { useState } from "react";
import IncrementButton from "../../assets/mealcustomization/increment.svg";
import DecrementButton from "../../assets/mealcustomization/decrement.svg";

const MealAmount = () => {
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
    <>
      <div className="flex items-center">
        <img
          src={DecrementButton}
          onClick={handleDecrement}
          className="w-5 cursor-pointer mr-0.5"
        />
        <div className="w-7 h-6 text-center text-sm">{quantity}</div>
        <img
          src={IncrementButton}
          onClick={handleIncrement}
          className="w-5 cursor-pointer ml-0.5"
        />
      </div>
    </>
  );
};

export default MealAmount;
