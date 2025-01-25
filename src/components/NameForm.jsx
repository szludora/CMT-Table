import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NameForm() {
  const { name, handleNameChange, handleSubmit } = useDataContext();
  const { toggleTheme, isDarkTheme} = useThemeContext();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className="mb-3">Enter your name:</Form.Label>
        <Form.Control
          type="text"
          className={isDarkTheme ?  "dark-input" : ""}
          placeholder=""
          value={name}
          onChange={handleNameChange}
          autoComplete="new-name"
          required
        />
      </Form.Group>
      <Row>
        <Button className="submitButton" type="submit">
          Start
        </Button>
        <Button className="themeButton" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Row>
    </Form>
  );
}
