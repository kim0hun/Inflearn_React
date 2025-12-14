export default function Button({
  handleClick,
}: {
  handleClick: (
    message: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}) {
  return (
    <>
      <button onClick={(event) => handleClick("하이", event)}>클릭</button>
    </>
  );
}
