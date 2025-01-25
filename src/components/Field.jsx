import React from "react";
import useDataContext from "../contexts/DataContext";
import { useState, useEffect } from "react";
import useThemeContext from "../contexts/ThemeContext";

export default function Field(props) {
  const [letter, setLetter] = useState(" ");
  const { counter, setStatus, fields, getHighlightedIndices } =
    useDataContext();

  const isHighlighted = [1, 2, 3].some((value) =>
    getHighlightedIndices(fields, value).includes(props.index)
  );

  const { darkTheme } = useThemeContext();

  const getLetterColor = (value) => {
    if (isHighlighted) {
      switch (value) {
        case 1:
          return darkTheme.letterG;
        case 2:
          return darkTheme.letterB;
        case 3:
          return darkTheme.letterR;
        default:
          return darkTheme.color;
      }
    }
    return darkTheme.color;
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

  const click = (event) => {
    if (event.target.innerHTML == " ") {
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
    <>
      <span
        style={{
          color: getLetterColor(props.value),
          borderColor: darkTheme.bc,
        }}
        onClick={click}
      >
        {letter}
      </span>
    </>
  );
}
