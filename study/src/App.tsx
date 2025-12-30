import { useState } from "react";
import LoginStatus from "./components/LoginStatus";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const handleLogout = () => setIsLoggedIn(false);
  const handleLogin = () => setIsLoggedIn(true);

  return (
    <LoginStatus
      isLoggedIn={isLoggedIn}
      handleLogin={handleLogin}
      handleLogout={handleLogout}
    />
  );
}
