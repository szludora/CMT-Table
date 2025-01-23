import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const darkTheme = {
    backgroundColor: isDarkTheme ? "black" : "white",
    color: isDarkTheme ? "white" : "black",
    height: "30vh",
    bg: isDarkTheme ? "bg-dark" : "bg-light",
  };

  function toggleTheme() {
    console.log("Toggle theme");
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