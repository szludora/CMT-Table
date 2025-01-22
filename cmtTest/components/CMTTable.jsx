import { useState } from "react";
import { useEffect } from "react";
import Field from "./Field";

export default function CMTTable() {
  const fields = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  const [counter, setCounter] = useState(1);

  useEffect(() => {}, [counter]);

  const click = () => {
    if (counter === 3) {
      setCounter(1);
    } else {
      setCounter(counter + 1);
    }
  };

  return (
    <>
      <div id="cmtTable" onClick={click}>
        {fields.map((field, index) => (
          <Field key={index} index={index} counter={counter}></Field>
        ))}
      </div>
    </>
  );
}
