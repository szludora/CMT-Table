import Container from "react-bootstrap/Container";
import CMTModel from "./models/CMTModel";
import React, { useEffect, useState } from "react";
import useThemeContext from "./contexts/ThemeContext";
import GameApp from "./components/GameApp";

import Background from "./components/Background";
import "./stars.css";
import "./App.css";

function App() {
  const CMT = new CMTModel();
  const setStatus = (id, counter) => CMT.setStatus(id, counter);
  const [isCompleted, setIsCompleted] = useState(false);
  const [matches, setMatches] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fields, setFields] = useState(CMT.getFields());
  const [counter, setCounter] = useState(1);
  const { darkTheme, toggleTheme, isDarkTheme } = useThemeContext();

  useEffect(() => {
    setIsCompleted(CMT.isCompleted());
    setMatches(CMT.getMatches(fields));
  }, [isCompleted, counter]);

  const reset = () => {
    setCounter(1);
    console.log("Resetting fields:", fields);
    CMT.resetFields();
    const newFields = CMT.getFields();
    setFields(newFields);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log("asd");

    event.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <Background></Background>
      <Container
        fluid
        className={`full-width d-flex justify-content-center align-items-center ${darkTheme.bg}`}
        style={{ height: "100vh", flexDirection: "column" }}
      >
        <GameApp
          isCompleted={isCompleted}
          matches={matches}
          isDarkTheme={isDarkTheme}
          name={name}
          submitted={submitted}
          darkThemeGame={darkTheme.game}
          handleSubmit={handleSubmit}
          handleNameChange={handleNameChange}
          toggleTheme={toggleTheme}
          setStatus={setStatus}
          setCounter={setCounter}
          getHighlightedIndices={CMT.getHighlightedIndices}
          fields={fields}
          counter={counter}
          reset={reset}
        ></GameApp>
      </Container>
    </>
  );
}

export default App;
