import React from "react";
import Col from "react-bootstrap/esm/Col";
import yey from "../sounds/yey.mp3";
import fail from "../sounds/fail.wav";
import Result from "./Result";
import NameForm from "./NameForm";
import Game from "./Game";

export default function GameApp(props) {
  return (
    <>
      <Result
        isCompleted={props.isCompleted}
        matches={props.matches}
        isDarkTheme={props.isDarkTheme}
        name={props.name}
        yey={yey}
        fail={fail}
      ></Result>

      <div className={`${props.darkThemeGame} game`}>
        <h3 style={{ paddingTop: "2em", paddingBottom: "2em" }}>
          CMT Table Game
        </h3>
        {!props.submitted ? (
          <Col xs={12} sm={12} md={12} lg={12} className="mx-auto">
            <NameForm
              handleSubmit={props.handleSubmit}
              name={props.name}
              handleNameChange={props.handleNameChange}
              toggleTheme={props.toggleTheme}
            ></NameForm>
          </Col>
        ) : (
          <Game
            setStatus={props.setStatus}
            setCounter={props.setCounter}
            getHighlightedIndices={props.getHighlightedIndices}
            fields={props.fields}
            counter={props.counter}
            reset={props.reset}
            toggleTheme={props.toggleTheme}
          ></Game>
        )}
        <p>Made by: Dóra Szlucska</p>
      </div>
    </>
  );
}
