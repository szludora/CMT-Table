import React, { useRef, useState } from "react";
import useDataContext from "../contexts/DataContext";
import useThemeContext from "../contexts/ThemeContext";
import Col from "react-bootstrap/esm/Col";
import Result from "./Result";
import NameForm from "./NameForm";
import Game from "./Game";
import VolumeIcon from "./VolumeIcon";

export default function GameApp() {
  const { submitted, isMuted, setIsMuted } = useDataContext();
  const { theme } = useThemeContext();

  const snapshotRef = useRef(null);
  const [isUpdated, setIsUpdated] = useState(false);

  const handleUpdate = () => {
    setIsUpdated((prev) => !prev);
  };

  const changeVolume = (event) => {
    setIsMuted((prev) => !prev);

    document.querySelectorAll("audio").forEach((audio) => {
      audio.muted = !isMuted;
    });

    event.target.src = !isMuted ? mute : volume;
  };

  return (
    <div
      ref={snapshotRef}
      className={`${theme} gameAndResult snapshotContainer`}
    >
      <Result />
      <div className="game">
        <h3>CMT Table Game</h3>
        {submitted ? (
          <div  onClick={changeVolume}>
         <VolumeIcon/>
          </div>
        ) : (
          ""
        )}
        {!submitted ? (
          <Col xs={12}>
            <NameForm />
          </Col>
        ) : (
          <Game
            snapshotRef={snapshotRef}
            isUpdated={isUpdated}
            handleUpdate={handleUpdate}
          />
        )}
        <p>
          Made by:{" "}
          <a href="https://github.com/szludora/CMT-Table"> Dóra Szlucska</a>
        </p>
      </div>
    </div>
  );
}
