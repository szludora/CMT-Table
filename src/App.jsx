import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import useThemeContext from "./contexts/ThemeContext";
import GameApp from "./components/GameApp";
import useDataContext from "./contexts/DataContext";
import Background from "./components/Background";
import "./stars.css";
import "./App.css";

function App() {
  const { fields, CMT, setMatches, setIsCompleted, isCompleted, counter } =
    useDataContext();
  const { darkTheme } = useThemeContext();

  useEffect(() => {
    setIsCompleted(CMT.isCompleted());
    setMatches(CMT.getMatches(fields));
  }, [isCompleted, counter]);

  return (
    <>
      <Background />
      <Container
        fluid
        className={`full-width d-flex justify-content-center align-items-center ${darkTheme.bg}`}
      >
        <GameApp />
      </Container>
    </>
  );
}

export default App;
