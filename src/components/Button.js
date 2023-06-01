import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="w-72 bg-[#fa5a00] text-white font-medium text-sm rounded-xl p-4 ">{props.text} </button>
    </div>
  );
};

export default Button;
