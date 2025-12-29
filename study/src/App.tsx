import { useState } from "react";

export default function App() {
  const [name, setName] = useState("jack");
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male");
  const [userInfo, setUserInfo] = useState({
    name: "jack",
    age: 20,
    gender: "male",
  });

  const handleUpdateUserInfo = () => {
    setUserInfo({
      name: "mike",
      age: 30,
      gender: "female",
    });
  };

  return (
    <>
      <p>name: {userInfo.name}</p>
      <p>age: {userInfo.age}</p>
      <p>gender: {userInfo.gender}</p>
      <button onClick={handleUpdateUserInfo}>UpdateUserInfo</button>
    </>
  );
}
