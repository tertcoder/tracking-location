// import Accounts from "./components/Accounts";
import { useState } from "react";
import Map from "./components/Map";
// import Accounts from "./components/Accounts";
import Profile from "./components/Profile";
import Users from "./components/Users";
import AddAccount from "./components/AddAccount";
import { BrowserRouter, Router, Routes } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter>
        <Routes>
          <Router path="map" element={<Map />} />
          <Router path="users" element={<Users />} />
          <Router path="users/:id" />
          {isLogged ? (
            <Router path="profile" element={<Profile />} />
          ) : (
            <Router path="addAccount" element={<AddAccount />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
