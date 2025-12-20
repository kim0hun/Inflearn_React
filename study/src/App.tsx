import { useState } from "react";

export default function App() {
  const [name, setName] = useState<string>("jack");
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<"male" | "female">("male");

  const handleUpdateProfile = () => {
    setName("react");
    setAge(21);
    setGender("female");
  };

  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </>
  );
}
