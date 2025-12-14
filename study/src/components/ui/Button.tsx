export default function Button() {
  const handleClick = (value: string) => alert(value);

  return (
    <>
      <button onClick={() => handleClick("Hello")}>클릭</button >
      <button onClick={() => alert("World!")}>클릭</button >
    </>
  );
}