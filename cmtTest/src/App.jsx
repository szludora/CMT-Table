import "./App.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import CMTTable from "../components/CMTTable";
import CMTModel from "../models/CMTModel";
import { useEffect } from "react";
import { useState } from "react";
import useThemeContext from "../contexts/ThemeContext";
import Col from "react-bootstrap/esm/Col";

function App() {
  const CMT = new CMTModel();
  const setStatus = (id, counter) => CMT.setStatus(id, counter);
  const [isCompleted, setIsCompleted] = useState(false);
  const [matches, setMatches] = useState(0);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
    const newFields = CMT.getFields();
    setFields(newFields);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };
  return (
    <>
      <Container
        fluid
        className={`full-width d-flex justify-content-center align-items-center ${darkTheme.bg}`}
        style={{ height: "100vh" }}
      >
        <div>
          <h3 style={{ paddingTop: "3em", paddingBottom: "3em" }}>
            CMT Table Game
          </h3>
          {!submitted ? (
            <Col xs={12} sm={12} md={10} lg={8} className="mx-auto">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-3">Enter your name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-5 mt-2">
                  Start Game
                </Button>
              </Form>
            </Col>
          ) : (
            <Row>
              <div className="fade-in">
                <CMTTable
                  fields={fields}
                  setStatus={setStatus}
                  setCounter={setCounter}
                  counter={counter}
                  getHighlightedIndices={CMT.getHighlightedIndices}
                ></CMTTable>
              </div>
              {isCompleted ? (
                matches !== 0 ? (
                  <p style={{ display: "block" }}>
                    Congratulations, {name}! You have {matches} lines!
                  </p>
                ) : (
                  <p style={{ display: "block" }}>
                    You have no lines, try again!
                  </p>
                )
              ) : (
                <p style={{ visibility: "hidden" }}></p>
              )}
              <div className="fade-in">
                <Button
                  onClick={reset}
                  variant="primary"
                  style={{ margin: "auto 1em 2em auto", width: "8em" }}
                >
                  Reset
                </Button>
                <Button
                  onClick={toggleTheme}
                  variant="primary"
                  style={{ margin: "auto auto 2em 1em", width: "8em" }}
                >
                  Toggle Theme
                </Button>
              </div>
            </Row>
          )}
          <p>Made by: Dóra Szlucska</p>
        </div>
      </Container>
    </>
  );
}

export default App;
