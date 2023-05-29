import React from "react";
import "../styles/ReuseableComponents.css";

const MainCaption = (props) => {
  return (
    <>
      <p className="maincaption">{props.caption}</p>
    </>
  );
};

export default MainCaption;
