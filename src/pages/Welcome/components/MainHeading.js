import React from "react";

const MainHeading = (props) => {
  return (
    <div>
      <h2 className="mainheading">{props.heading}</h2>
    </div>
  );
};

export default MainHeading;