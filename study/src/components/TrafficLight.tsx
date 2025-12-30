export default function TrafficLight({
  light,
  handleChangeLight,
}: {
  light: "red" | "green" | "yellow";
  handleChangeLight: () => void;
}) {
  return (
    <>
      <h1>TrafficLight: {light.toLocaleUpperCase()}</h1>
      <button onClick={handleChangeLight}>Change Light</button>
    </>
  );
}
