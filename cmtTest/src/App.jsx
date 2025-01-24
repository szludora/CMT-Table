import "./App.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import CMTTable from "../components/CMTTable";
import CMTModel from "../models/CMTModel";
import { useEffect } from "react";
import { useState } from "react";
import useThemeContext from "../contexts/ThemeContext";

function App() {
  const CMT = new CMTModel();
  const setStatus = (id, counter) => CMT.setStatus(id, counter);
  const [isCompleted, setIsCompleted] = useState(false);
  const [matches, setMatches] = useState(0);

  const [fields, setFields] = useState(CMT.getFields());
  const [counter, setCounter] = useState(1);

  const { darkTheme, toggleTheme } = useThemeContext();

  useEffect(() => {
    setIsCompleted(CMT.isCompleted());
    setMatches(CMT.getMatches(fields));
  }, [isCompleted, counter]);

  const reset = () => {
    setCounter(1);
    console.log("Resetting fields:", fields);
    CMT.resetFields();
    const newFields = CMT.getFields(); // Ne másold, hanem használd a CMT-t
    setFields(newFields);
  };

  return (
    <>
      <Container fluid className={`full-width ${darkTheme.bg}`}>
        <h3 style={{ paddingTop: "3em", paddingBottom: "3em" }}>
          CMT Table Game
        </h3>
        <Row>
          <p
            style={{
              opacity: isCompleted ? (matches !== 0 ? 1 : 0) : 0,
              visibility: "visible",
              transition: "opacity 1s ease-in-out",
              height: matches !== 0 ? "auto" : "0",
            }}
          >
            {isCompleted
              ? matches !== 0
                ? `Congratulations, you have ${matches} lines!`
                : "You have no lines, try again!"
              : ""}{" "}
            {}
          </p>
        </Row>
        <CMTTable
          fields={fields}
          setStatus={setStatus}
          setCounter={setCounter}
          counter={counter}
          getHighlightedIndices={CMT.getHighlightedIndices}
        ></CMTTable>
        <Button
          onClick={reset}
          variant="primary"
          style={{ margin: "auto 2em 5em auto", width: "8em" }}
        >
          Reset
        </Button>
        <Button
          onClick={toggleTheme}
          variant="primary"
          style={{ margin: "auto auto 5em auto", width: "8em" }}
        >
          Toggle Theme
        </Button>
        <p>Made by: Dóra Szlucska</p>
      </Container>
    </>
  );
}

export default App;
