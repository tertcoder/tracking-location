// import Accounts from "./components/Accounts";
import { useState } from "react";
import Map from "./components/Map";
// import Accounts from "./components/Accounts";
import Profile from "./components/Profile";
import Users from "./components/Users";
import AddAccount from "./components/AddAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
          {/* <Route path="/" element={<Users />} /> */}
        </Routes>
      </BrowserRouter>
      <Users />
      {isLogged ? <Profile /> : <AddAccount />}
      {/* <BrowserRouter>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" />
          {isLogged ? (
            <Route path="profile" element={<Profile />} />
          ) : (
            <Route path="addAccount" element={<AddAccount />} />
          )}
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
