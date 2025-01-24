import React from "react";
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
    event.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };
  return (
    <>
      <Container>
        <section class="wrapper">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </section>
      </Container>
      <Container
        fluid
        className={`full-width d-flex justify-content-center align-items-center ${darkTheme.bg}`}
        style={{ height: "100vh", flexDirection: "column" }}
      >
        <div className="resultBoxWrapper">
          <div
            className={`resultBox ${
              isCompleted
                ? matches !== 0
                  ? isDarkTheme
                    ? "success-dark"
                    : "success-light"
                  : !isDarkTheme
                  ? "no-success-dark"
                  : "no-success-light"
                : ""
            }`}
            style={{ display: isCompleted ? "block" : "none" }}
          >
            <div className="result">
              {isCompleted ? (
                matches !== 0 ? (
                  <p>
                    &nbsp;&nbsp;&nbsp;Congratulations, {name}! You have{" "}
                    {matches} lines!
                  </p>
                ) : (
                  <p>&nbsp;&nbsp;&nbsp;You have no lines, try again!</p>
                )
              ) : (
                <p style={{ visibility: "hidden" }}></p>
              )}
            </div>
          </div>
        </div>

        <div className={`${darkTheme.game} game`}>
          <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
            CMT Table Game
          </h3>
          {!submitted ? (
            <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
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
                <Row>
                  <Button
                    className="submitButton"
                    type="submit"
                    style={{ margin: "1em 1em 2em auto", width: "4em" }}
                  >
                    Start
                  </Button>
                  <Button
                    className="themeButton"
                    onClick={toggleTheme}
                    style={{ margin: "1em auto 2em auto", width: "8em" }}
                  >
                    Toggle Theme
                  </Button>
                </Row>
              </Form>
            </Col>
          ) : (
            <Col xs={12} sm={12} md={12} lg={12}>
              <div className="fade-in">
                <CMTTable
                  fields={fields}
                  setStatus={setStatus}
                  setCounter={setCounter}
                  counter={counter}
                  getHighlightedIndices={CMT.getHighlightedIndices}
                ></CMTTable>
              </div>
              <div className="fade-in">
                <Button
                  className="resetButton"
                  onClick={reset}
                  style={{ margin: "auto 1em 3em auto", width: "4em" }}
                >
                  Reset
                </Button>
                <Button
                  className="themeButton"
                  onClick={toggleTheme}
                  style={{ margin: "auto auto 3em 1em", width: "8em" }}
                >
                  Toggle Theme
                </Button>
              </div>
            </Col>
          )}
          <p>Made by: Dóra Szlucska</p>
        </div>
      </Container>
    </>
  );
}

export default App;
