import React from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Col from "react-bootstrap/esm/Col";
import Result from "./Result";
import NameForm from "./NameForm";
import Game from "./Game";

export default function GameApp() {
  const { isSubmitted } = useDataContext();
  const { darkTheme } = useThemeContext();

  return (
    <>
      <Result />

      <div className={`${darkTheme.game} game`}>
        <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          CMT Table Game
        </h3>
        {!isSubmitted ? (
          <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
            <NameForm />
          </Col>
        ) : (
          <Game/>
        )}
        <p>Made by: Dóra Szlucska</p>
      </div>
    </>
  );
}
