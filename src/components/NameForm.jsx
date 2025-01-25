import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NameForm() {
  const { handleSubmit, name, handleNameChange } = useDataContext();
  const { toggleTheme } = useThemeContext();
  return (
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
          style={{ margin: "auto auto 2em auto", width: "4em" }}
        >
          Start
        </Button>
        <Button
          className="themeButton"
          onClick={toggleTheme}
          style={{ margin: "auto auto 2em auto", width: "8em" }}
        >
          Toggle Theme
        </Button>
      </Row>
    </Form>
  );
}
