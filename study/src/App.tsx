import Button from "./components/Button";

export default function App() {
  const handleClick = (message: string) => alert(message);

  return (
    <>
      <Button handleClick={handleClick} message="로그인이 되었습니다.">
        Login
      </Button>
      <Button handleClick={handleClick} message="로그아웃이 되었습니다.">
        Logout
      </Button>
    </>
  );
}
