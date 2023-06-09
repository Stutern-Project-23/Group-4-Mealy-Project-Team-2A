import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => (props.$primary ? "white" : "#FA5A00")};
  color: ${(props) => (props.$primary ? "black" : "white")};
  &:hover {
    background-color: ${(props) => (props.$primary ? "#FA5A00" : "white")};
    color: ${(props) => (props.$primary ? "white" : "black")};
  }
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  font-size: 14px;
  margin: 0.5em;
  padding: 0.5em 1.2em;
  border: 1px solid #fa5a00;
  border-radius: 20px;
`;
const HeaderButtons = () => {
  return (
    <div>
      <Button $primary>
        <NavLink to="/signup"> Sign Up</NavLink>
      </Button>
      <Button>
        <NavLink to="/signin"> Sign In</NavLink>
      </Button>
    </div>
  );
};

export default HeaderButtons;
