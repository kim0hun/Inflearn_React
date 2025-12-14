export default function Button() {
  const handleClick = () => alert("click");

  return (
    <>
      {/* <button onClick={() => alert("click")}>클릭</button > */}
      <button onClick={handleClick}>클릭</button > {/*매개변수 X*/}
      <button onClick={() => handleClick()}>클릭</button > {/*매개변수 O*/}
    </>
  );
}