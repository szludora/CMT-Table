import React, { useRef } from "react";
import useDataContext from "../contexts/DataContext";
import Field from "./Field";
import placing from "../sounds/placing.wav";

export default function CMTTable() {
  const { counter, setCounter, fields } = useDataContext();
  const audioRef = useRef(null);

  const click = (event) => {
    console.log(event.target);

    if (event.target.innerHTML == " ") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setCounter((counter % 3) + 1);
    }
  };

  return (
    <div id="cmtTable" onClick={click}>
      {fields.map((field, index) => (
        <Field key={index} index={index} value={field}  />
      ))}
      <audio ref={audioRef}>
        <source src={placing} type="audio/wav" />
      </audio>
    </div>
  );
}
