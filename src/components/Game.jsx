import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Button from "react-bootstrap/Button";
import CMTTable from "./CMTTable";
import Col from "react-bootstrap/esm/Col";

export default function Game() {
  const { toggleTheme } = useThemeContext();
  const { reset } = useDataContext();

  return (
    <Col xs={12}>
      <div className="fade-in">
        <CMTTable />
      </div>
      <div className="fade-in">
        <Button className="resetButton" onClick={reset}>
          Reset
        </Button>
        <Button className="themeButton" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </div>
    </Col>
  );
}
