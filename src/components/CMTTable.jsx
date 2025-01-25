import React, { useRef } from "react";
import useDataContext from "../contexts/DataContext";
import Field from "./Field";
import placing from "../sounds/placing.wav";

const LETTERS = [' ', 'C', 'M', 'T'];

export default function CMTTable() {
  const { counter, setCounter, fields, setField } = useDataContext();
  const audioRef = useRef(null);

  const click = (index) => {
    if (fields[index] === ' ') {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
      setField(index, LETTERS[counter])
      setCounter((counter % 3) + 1);
    }
  };

  return (
    <div id="cmtTable">
      {fields.map((field, index) => (
        <Field key={index} index={index} letter={field} onClick={() => click(index)} />
      ))}
      <audio ref={audioRef}>
        <source src={placing} type="audio/wav" />
      </audio>
    </div>
  );
}
