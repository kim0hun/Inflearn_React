import StatusMessage from "./components/StatusMessage";

export default function App() {
  const status = "un";

  return (
    <>
      <StatusMessage status={status} />
    </>
  );
}
