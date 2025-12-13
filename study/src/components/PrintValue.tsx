export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  const {
    numberValue,
    stringValue,
    booleanValue,
    arrayValue,
    objectValue,
    handleClick
  } = props;

  return (
    <>
      <p>number: {numberValue}</p>
      <p>string: {stringValue}</p>
      <p>boolean: {booleanValue.toString()}</p>
      <p>array: {arrayValue}</p>
      <p>object: {JSON.stringify(objectValue)}</p>
      <p>function: {handleClick.toString()}</p>
    </>
  );
}