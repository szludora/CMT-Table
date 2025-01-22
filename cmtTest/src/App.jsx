import "./App.css";
import Button from "react-bootstrap/Button";
import CMTTable from "../components/CMTTable";
import CMTModel from "../models/CMTModel";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const CMT = new CMTModel();
  const setStatus = (id, counter) => CMT.setStatus(id, counter);

  const [fields, setFields] = useState([...CMT.getFields()]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {}, [fields]);

  const reset = () => {
    setCounter(1);
    console.log(fields);
    CMT.resetFields();
    const newFields = [...CMT.getFields()];
    setFields(newFields);
  };

  return (
    <>
      <h3 style={{ marginBottom: "2em" }}>CMT Table Game</h3>
      <CMTTable
        fields={fields}
        setStatus={setStatus}
        setCounter={setCounter}
        counter={counter}
      ></CMTTable>
      <Button onClick={reset} variant="primary" style={{ marginBottom: "4em" }}>
        Reset
      </Button>
      <p>Készítette: Szlucska Dóra</p>
    </>
  );
}

export default App;
