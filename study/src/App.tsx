import sample from "./assets/images/sample.jpg";

export default function App() {
  return (
    <>
      <div
        className={`w-100 h-100`}
        style={{ backgroundImage: `url(${sample})` }}
      ></div>
    </>
  );
}
