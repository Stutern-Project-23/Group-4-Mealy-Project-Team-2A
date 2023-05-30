import React from "react";
import "../styles/ReusableComponents.css";

const MainCaption = (props) => {
  return (
    <>
      <p className="maincaption">{props.caption}</p>
    </>
  );
};

export default MainCaption;
