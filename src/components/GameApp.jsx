import React from "react";
import useDataContext from "../contexts/DataContext";
import Col from "react-bootstrap/esm/Col";
import Result from "./Result";
import NameForm from "./NameForm";
import Game from "./Game";

export default function GameApp() {
  const { submitted } = useDataContext();

  return (
    <div className="gameAndResult">
      <Result />
      <div className="game">
        <h3>CMT Table Game</h3>
        {!submitted ? (
          <Col xs={12}>
            <NameForm />
          </Col>
        ) : (
          <Game />
        )}
        <p>
          Made by: <a href="https://github.com/szludora/CMT-Table"> Dóra Szlucska</a>
        </p>
      </div>
    </div>
  );
}
