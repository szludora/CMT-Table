import React from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const darkTheme = {
    backgroundColor: isDarkTheme ? "white" : "black",
    game: isDarkTheme ? "lighter" : "darker",
    letterG: isDarkTheme ? "rgb(28, 123, 28)" : "rgb(13, 214, 13)",
    letterB: isDarkTheme ? "rgb(8, 108, 192)" : "rgb(102, 185, 255)",
    letterR: isDarkTheme ? "rgb(218, 0, 0)" : "rgb(255, 116, 116)",
    color: isDarkTheme ? "black" : "white",
    bc: isDarkTheme ? "black" : "grey",
    bg: isDarkTheme ? "bg-light" : "bg-gray",
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
