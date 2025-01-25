import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import useThemeContext from "./contexts/ThemeContext";
import useDataContext from "./contexts/DataContext";
import GameApp from "./components/GameApp";

import Background from "./components/Background";
import "./stars.css";
import "./App.css";

function App() {
  const { darkTheme } = useThemeContext();

  const { CMT, setMatches, fields, counter, getMatches, setIsCompleted } =
    useDataContext();

  useEffect(() => {
    setIsCompleted(CMT.getIsCompleted());
    setMatches(getMatches);
  }, [counter, fields]);

  return (
    <>
      <Background/>
      <Container
        fluid
        className={`full-width d-flex justify-content-center align-items-center ${darkTheme.bg}`}
        style={{ height: "100vh", flexDirection: "column" }}
      >
        <GameApp/>
      </Container>
    </>
  );
}

export default App;
