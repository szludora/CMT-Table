import React, { useRef } from "react";
import Field from "./Field";
import placing from "../sounds/placing.wav";

export default function CMTTable(props) {
  const audioRef = useRef(null);

  const click = (event) => {
    if (event.target.innerHTML === " ") {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      if (props.counter === 3) {
        props.setCounter(1);
      } else {
        props.setCounter(props.counter + 1);
      }
    }
  };

  return (
    <div id="cmtTable" onClick={click}>
      {props.fields.map((field, index) => (
        <Field
          key={index}
          index={index}
          value={field}
          counter={props.counter}
          fields={props.fields}
          setStatus={props.setStatus}
          getHighlightedIndices={props.getHighlightedIndices}
        />
      ))}
      <audio ref={audioRef}>
        <source src={placing} type="audio/wav" />
      </audio>
    </div>
  );
}
