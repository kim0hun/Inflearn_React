export function SecondCount({
  count,
  handleIncrement,
}: {
  count: number;
  handleIncrement: () => void;
}) {
  console.log("SecondCount Component");

  return (
    <>
      <h1>FirstCount Component: {count}</h1>
      <button onClick={handleIncrement}>increment</button>
    </>
  );
}
