import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function NameForm(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-3">Enter your name:</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={props.name}
          onChange={props.handleNameChange}
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
          onClick={props.toggleTheme}
          style={{ margin: "auto auto 2em auto", width: "8em" }}
        >
          Toggle Theme
        </Button>
      </Row>
    </Form>
  );
}
