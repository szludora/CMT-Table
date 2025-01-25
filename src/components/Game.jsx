import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Button from "react-bootstrap/Button";
import CMTTable from "./CMTTable";
import Col from "react-bootstrap/esm/Col";

export default function Game() {
  const { reset } = useDataContext();
  const { toggleTheme } = useThemeContext();

  return (
    <Col xs={12} sm={12} md={12} lg={12}>
      <div className="fade-in">
        <CMTTable/>
      </div>
      <div className="fade-in">
        <Button
          className="resetButton"
          onClick={reset}
          style={{ margin: "auto 1em 2em auto", width: "4em" }}
        >
          Reset
        </Button>
        <Button
          className="themeButton"
          onClick={toggleTheme}
          style={{ margin: "auto auto 2em auto", width: "8em" }}
        >
          Toggle Theme
        </Button>
      </div>
    </Col>
  );
}
