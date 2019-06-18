import React from "react";
import { button } from "./Button.module.css";

const Button = ({ toggleTheme, children }) => (
  <button className={button} onClick={toggleTheme}>
    {children}
  </button>
);

export default Button;
