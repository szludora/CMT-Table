import React from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const darkTheme = {
    backgroundColor: isDarkTheme ? "black" : "white",
    game: isDarkTheme ? "darker" : "lighter",
    letterG: isDarkTheme ? "rgb(13, 214, 13)" : "rgb(28, 123, 28)",
    letterB: isDarkTheme ? "rgb(102, 185, 255)" : "rgb(8, 108, 192)",
    letterR: isDarkTheme ? "rgb(255, 116, 116)" : "rgb(218, 0, 0)",
    color: isDarkTheme ? "white" : "black",
    bc: isDarkTheme ? "grey" : "black",
    bg: isDarkTheme ? "bg-gray" : "bg-light",
  };

  function toggleTheme() {
    setDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, darkTheme, isDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useThemeContext() {
  return useContext(ThemeContext);
}
