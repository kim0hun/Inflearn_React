export default function Button({ message, children }: { message: string, children: React.ReactNode }) {
  const handleClick = () => alert(message);

  return (
    <>
      <button onClick={handleClick}>{children}</button > {/*매개변수 O*/}
    </>
  );
}