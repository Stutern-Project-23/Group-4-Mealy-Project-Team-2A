import React from "react";
import { NavLink } from "react-router-dom";

const HeaderItems = (props) => {
  return (
    <div className="text-sm">
      <NavLink to={props.title}> {props.text}</NavLink>
    </div>
  );
};

export default HeaderItems;
