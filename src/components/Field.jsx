import React from "react";
import { useState, useEffect } from "react";
import useThemeContext from "../contexts/ThemeContext";
import useDataContext from "../contexts/DataContext";

export default function Field(props) {
  const { setStatus, fields, counter, getHighlightedIndices } =
    useDataContext();
  const { darkTheme } = useThemeContext();

  const [letter, setLetter] = useState(" ");

  const isHighlighted = [1, 2, 3].some((value) =>
    getHighlightedIndices(fields, value).includes(props.index)
  );

  const getLetterColor = (value) => {
    if (isHighlighted) {
      const colorMap = {
        1: darkTheme.letterG,
        2: darkTheme.letterB,
        3: darkTheme.letterR,
      };
      return colorMap[value] || darkTheme.color;
    }
    return darkTheme.color;
  };

  useEffect(() => {
    const letterMap = {
      1: "C",
      2: "M",
      3: "T",
    };
    setLetter(letterMap[props.value] || " ");
  }, [props.value]);

  const click = (event) => {
    if (event.target.innerHTML === " ") {
      if (counter >= 1 && counter <= 3) {
        setStatus(props.index, counter);
        fields[props.index] = counter;
      }
    }
  };

  return (
    <>
      <span
        className={isHighlighted ? "field highlighted" : "field"}
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
