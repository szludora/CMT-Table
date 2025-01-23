import { useState, useEffect } from "react";

export default function Field(props) {
  const [letter, setLetter] = useState(" ");
  const isHighlighted = [1, 2, 3].some((value) =>
    props.countMatchingLines(props.fields, value).includes(props.index)
  );

  const getLetterColor = (value) => {
    if (isHighlighted) {
      switch (value) {
        case 1:
          return "#0dd60d";
        case 2:
          return "#66b9ff";
        case 3:
          return "#ff7474";
        default:
          return "black";
      }
    }
    return "black";
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
      switch (props.counter) {
        case 1:
          props.setStatus(props.index, 1);
          props.fields[props.index] = 1;
          break;
        case 2:
          props.setStatus(props.index, 2);
          props.fields[props.index] = 2;
          break;
        case 3:
          props.setStatus(props.index, 3);
          props.fields[props.index] = 3;
          break;
      }
    }
  };

  return (
    <>
      <span
        className={isHighlighted ? " field highlighted" : "field"}
        style={{ color: getLetterColor(props.value) }}
        onClick={click}
      >
        {letter}
      </span>
    </>
  );
}
