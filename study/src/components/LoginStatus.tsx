export default function LoginStatus({
  isLoggedIn,
  handleLogin,
  handleLogout,
}: {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}) {
  if (isLoggedIn)
    return (
      <>
        <h1>환영합니다, 사용자!</h1>
        <button onClick={handleLogout}>로그아웃</button>
      </>
    );

  return (
    <>
      <h1>로그인이 필요합니다.</h1>
      <button onClick={handleLogin}>로그인</button>
    </>
  );
}
