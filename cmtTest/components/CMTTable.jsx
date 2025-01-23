import Field from "./Field";

export default function CMTTable(props) {
  const click = (event) => {
    if (event.target.innerHTML === " ") {
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
          countMatchingLines={props.countMatchingLines}
        />
      ))}
    </div>
  );
}
