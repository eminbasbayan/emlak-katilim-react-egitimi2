import { useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeContext";

const ThemeProvider = (props) => {
  const [themeMode, setThemeMode] = useState("light");

  function themeModeHandler() {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider
      value={{
        themeModeHandler,
        themeMode,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
