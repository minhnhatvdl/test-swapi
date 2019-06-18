import React from "react";
import Button from "../../Components/Button/Button";
import { withToggleTheme } from "../../HOCs/withToggleTheme";
import { header, logo } from "./Header.module.css";

const Header = () => {
  const ButtonWithToggleTheme = withToggleTheme(Button);
  return (
    <div className={header}>
      <span className={logo}>StarWars</span>
      <ButtonWithToggleTheme>Toggle theme</ButtonWithToggleTheme>
    </div>
  );
};

export default Header;
