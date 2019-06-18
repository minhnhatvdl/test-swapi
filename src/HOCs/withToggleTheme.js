import React, { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
// add a toggleTheme for component
export const withToggleTheme = WrappedConponent => ({ ...props }) => {
  const { setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };
  return <WrappedConponent {...props} toggleTheme={toggleTheme} />;
};
