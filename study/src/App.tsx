import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const items = ["사과", "바나나", "오렌지"];
  const [fruits, setFruits] = useState(() =>
    items.map((item) => ({
      id: uuidv4(),
      value: item,
    }))
  );
  const handleFruitAdd = () => {
    setFruits([{ id: uuidv4(), value: "포도" }, ...fruits]);
  };

  return (
    <>
      <h1>과일목록</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <input type="text" placeholder={fruit.value} />
          </li>
        ))}
      </ul>
      <button onClick={handleFruitAdd}>과일 추가</button>
    </>
  );
}
