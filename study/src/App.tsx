import Button from "./components/ui/Button";

export default function App() {
  const handleClick = (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(message);
    console.log(event);
    (event.target as HTMLButtonElement).innerText = message;
  };

  return (
    <>
      <Button handleClick={handleClick} />
    </>
  );
}
