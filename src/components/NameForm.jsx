import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NameForm() {
  const { name, handleNameChange, handleSubmit } = useDataContext();
  const { toggleTheme } = useThemeContext();

  const handleFocus = (event) => {
    event.target.select();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className="mb-3">Enter your name:</Form.Label>
        <Form.Control
          type="text"
          className={"input"}
          value={name}
          onChange={handleNameChange}
          onFocus={handleFocus}
          autoComplete="new-name"
          required
        />
      </Form.Group>
      <Row className="submitAndThemeButtonContainer">
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
