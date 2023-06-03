import React from "react";

const Input = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} className="bg-white rounded-xl border border-solid border-[#bbbbc4] w-80 h-10 p-3 outline-0 placeholder:text-sm" />
    </div>
  );
};

export default Input;