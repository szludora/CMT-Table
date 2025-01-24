import "./App.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import CMTTable from "../components/CMTTable";
import CMTModel from "../models/CMTModel";
import { useEffect } from "react";
import { useState } from "react";
import useThemeContext from "../contexts/ThemeContext";

function App() {
  const CMT = new CMTModel();
  const setStatus = (id, counter) => CMT.setStatus(id, counter);

  const [fields, setFields] = useState(CMT.getFields());
  const [counter, setCounter] = useState(1);

  const { darkTheme } = useThemeContext();

  useEffect(() => {
    console.log(CMT.getMatches(fields));    
  }, [counter]);

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
        <h3 style={{ marginBottom: "2em" }}>CMT Table Game</h3>
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
          style={{ marginBottom: "4em" }}
        >
          Reset
        </Button>
        <p>Made by: Dóra Szlucska</p>
      </Container>
    </>
  );
}

export default App;
