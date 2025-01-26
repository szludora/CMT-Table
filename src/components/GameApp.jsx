import React, { useRef } from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Col from "react-bootstrap/esm/Col";
import Result from "./Result";
import NameForm from "./NameForm";
import Game from "./Game";

export default function GameApp() {
  const { submitted } = useDataContext();
  const { theme } = useThemeContext();
  const snapshotRef = useRef(null);

  return (
    <div ref={snapshotRef} className={`${theme} gameAndResult snapshotContainer`}>
      <Result />
      <div className="game">
        <h3>CMT Table Game</h3>
        {!submitted ? (
          <Col xs={12}>
            <NameForm />
          </Col>
        ) : (
          <Game snapshotRef={snapshotRef}/>
        )}
        <p>
          Made by: <a href="https://github.com/szludora/CMT-Table"> Dóra Szlucska</a>
        </p>
      </div>
    </div>
  );
}
