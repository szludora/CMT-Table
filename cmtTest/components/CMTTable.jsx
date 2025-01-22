import { useState } from "react";
import Field from "./Field";

export default function CMTTable(props) {
  const [counter, setCounter] = useState(1);

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
        {props.fields.map((field, index) => (
          <Field
            key={index}
            index={index}
            value={field}
            counter={counter}
            fields={props.fields}
            setStatus={props.setStatus}
          ></Field>
        ))}
      </div>
    </>
  );
}
