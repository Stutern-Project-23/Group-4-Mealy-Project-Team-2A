import React from "react";
import "./ReuseableComponents.css";

const MainCaption = (props) => {
  return (
    <>
      <p className="maincaption">{props.caption}</p>
    </>
  );
};

export default MainCaption;