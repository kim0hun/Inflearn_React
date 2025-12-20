import { useState } from "react";

export default function App() {
  const [state, setState] = useState<number>(0);

  const handleSetToTen = () => {
    let a = state + 1;
    setState(a);
  };

  return (
    <>
      <h1>state: {state}</h1>
      <button onClick={handleSetToTen}>Set To 10</button>
    </>
  );
}
