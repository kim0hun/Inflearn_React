export default function Button({
  message,
  handleClick,
  children,
}: {
  children: React.ReactNode;
  message: string;
  handleClick: (message: string) => void;
}) {
  return (
    <>
      <button onClick={() => handleClick(message)}>{children}</button>
    </>
  );
}
