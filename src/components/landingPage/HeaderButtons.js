import React from "react";
import styled from "styled-components";
// const HeaderButtons = (props) => {
//   return (
//     <div>
//       <button className="text-sm border-black border-2 py-1.5 px-5 rounded-3xl">
//         {props.text}
//       </button>
//     </div>
//   );
// };

const Button = styled.button`
  background: ${(props) => (props.$primary ? "#FA5A00" : "white")};
  color: ${(props) => (props.$primary ? "white" : "black")};

  font-size: 14px;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 1px solid #fa5a00;
  border-radius: 20px;
`;
const HeaderButtons = () => {
  return (
    <div>
      <Button>Sign Up</Button>
      <Button $primary>Sign In</Button>
    </div>
  );
};

export default HeaderButtons;
