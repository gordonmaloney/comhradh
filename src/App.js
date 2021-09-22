import { Login } from "./components/Login";
import { useState } from "react";
import { SideMenu } from "./components/SideMenu";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <div>
      <SideMenu />

      <Login />
      {user && <p>Welcome {user.result.givenName}</p>}
    </div>
  );
}

export default App;
