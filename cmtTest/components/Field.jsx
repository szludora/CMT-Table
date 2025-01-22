import { useState, useEffect } from "react";

export default function Field(props) {
  const [letter, setLetter] = useState(" ");

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
  };

  return (
    <>
      <span className="field" onClick={click}>
        {letter}
      </span>
    </>
  );
}
