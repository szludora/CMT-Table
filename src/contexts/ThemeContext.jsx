import React from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const theme = isDarkTheme ? "dark-theme" : "light-theme";

  function toggleTheme() {
    setDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function useThemeContext() {
  return useContext(ThemeContext);
}
