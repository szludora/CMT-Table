import Container from "react-bootstrap/Container";
import React, { useEffect } from "react";
import useThemeContext from "./contexts/ThemeContext";
import GameApp from "./components/GameApp";
import useDataContext from "./contexts/DataContext";
import Background from "./components/Background";
import "./stars.css";
import "./App.css";

function App() {
  const { fields, CMT, setMatches, setIsCompleted, isCompleted, counter } =
    useDataContext();
  const { theme } = useThemeContext();

  useEffect(() => {
    setIsCompleted(CMT.isCompleted());
    setMatches(CMT.getMatches(fields));
  }, [isCompleted, counter]);

  return (
    <>
      <Background />
      <Container fluid className={theme}>
        <GameApp />
      </Container>
    </>
  );
}

export default App;
