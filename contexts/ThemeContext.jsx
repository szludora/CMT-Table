import React from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const darkTheme = {
    backgroundColor: isDarkTheme ? "white" : "black",
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
