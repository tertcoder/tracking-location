// import Accounts from "./components/Accounts";
import { useState } from "react";
import Map from "./components/Map";
// import Accounts from "./components/Accounts";
import Profile from "./components/Profile";
import Users from "./components/Users";
import AddAccount from "./components/AddAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { FormProvider } from "./contexts/FormContext";

function App() {
  const [mapPosition, setMapPosition] = useState([-3.3456, 29.4008]);
  const [isLogged, setIsLogged] = useState(false);

  // const [searchParams] = useSearchParams();
  function showUserLocation(userLat, userLng) {
    // const userLat = searchParams.get("lat");
    // const userLng = searchParams.get("lng");
    setMapPosition([userLat, userLng]);
  }

  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map mapPosition={mapPosition} />} />
        </Routes>
      </BrowserRouter>
      {/* <Map /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path=""
            element={<Users showUserLocation={showUserLocation} />}
          >
            <Route path="/:id" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Users /> */}
      {isLogged ? <Profile /> : <AddAccount />}
    </div>
  );
}

export default App;
