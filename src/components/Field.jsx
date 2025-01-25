import React from "react";
import useDataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";

export default function Field(props) {
  const [letter, setLetter] = useState(" ");
  const { counter, setStatus, fields, getHighlightedIndices } =
    useDataContext();

  const isHighlighted = [1, 2, 3].some((value) =>
    getHighlightedIndices(fields, value).includes(props.index)
  );

  const getLetterColor = (value) => {
    if (isHighlighted) {
      switch (value) {
        case 1:
          return "letterG";
        case 2:
          return "letterB";
        case 3:
          return "letterR";
        default:
          return "letter";
      }
    }
  };

  useEffect(() => {
    switch (props.value) {
      case 1:
        setLetter("C");
        break;
      case 2:
        setLetter("M");
        break;
      case 3:
        setLetter("T");
        break;
      default:
        setLetter(" ");
        break;
    }
  }, [props.value]);

  const click = () => {
    if (letter == " ") {
      switch (counter) {
        case 1:
          setStatus(props.index, 1);
          fields[props.index] = 1;
          break;
        case 2:
          setStatus(props.index, 2);
          fields[props.index] = 2;
          break;
        case 3:
          setStatus(props.index, 3);
          fields[props.index] = 3;
          break;
      }
    }
  };

  return (
    <span className={`${getLetterColor(props.value)}`} onClick={click}>
      {letter}
    </span>
  );
}
