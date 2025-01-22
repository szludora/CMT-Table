import Field from "./Field";

export default function CMTTable() {
  const fields = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];

  return (
    <>
      <div id="cmtTable">
        {fields.map((field, index) => (
          <Field key={field} value={index}></Field>
        ))}
      </div>
    </>
  );
}
