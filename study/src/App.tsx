import GuestView from "./components/GuestView";
import UserInfo from "./components/UserInfo";
import UserView from "./components/UserView";

export default function App() {
  const isLoggedIn = true;

  return (
    <>
      {isLoggedIn ? (
        <>
          <UserView />
          <UserInfo />
        </>
      ) : (
        <GuestView />
      )}
    </>
  );
}
