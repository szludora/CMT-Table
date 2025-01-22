import { useState } from "react";
import { useEffect } from "react";

export default function Field(props) {
  const [letter, setLetter] = useState(" ");

  useEffect(() => {
    if (!letter) {
      getLetter();
    }
  }, [letter, props.counter]);

  const click = () => {
    switch (props.counter) {
      case 1:
        setLetter("C");
        break;
      case 2:
        setLetter("M");
        break;
      case 3:
        setLetter("T");
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
