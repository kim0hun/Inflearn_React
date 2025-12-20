import { useState } from "react";

export default function App() {
  const [numberToString, setNumberToString] = useState<number | string>(0);
  const [isShow, setIsShow] = useState<boolean>(true);

  const handleSetToTen = () => {
    setNumberToString("10");
    setIsShow(false);
  };

  return (
    <>
      <h1>state: {numberToString}</h1>
      <h1>isShow: {isShow.toString()}</h1>
      <button onClick={handleSetToTen}>Set To 10</button>
    </>
  );
}
