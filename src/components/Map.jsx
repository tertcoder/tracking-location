import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styles from "./Map.module.css";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useURL } from "../hooks/useURL";
// import { useEffect, useState } from "react";
const accounts = [
  {
    name: "Bon Tertius T.",
    email: "tuyishimirebt12@gmail.com",
    phone: "+25765849761",
    position: { lat: 15.4756, lng: 37.2045 },
  },
  {
    name: "Toussaint I.",
    email: "iradukunda@gmail.com",
    phone: "+25765269871",
    position: { lat: -3.3449276, lng: 29.4034562 },
  },
  {
    name: "Liberatrice B.",
    email: "bayizere@gmail.com",
    phone: "+25765826719",
    position: { lat: -3.2658, lng: 29.0569 },
  },
];

function Map({ mapPosition }) {
  // const [mapPosition, setMapPosition] = useState([-3.3456, 29.4008]);
  const { position: geoPosition, error, getPosition } = useGeolocation();
  // const [userLat, userLng] = useURL();
  // console.log(userLat, userLng);
  // const [searchParams] = useSearchParams();

  useEffect(
    function () {
      if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
    },
    [geoPosition]
  );

  // useEffect(
  //   function () {
  //     if (userLat && userLng) setMapPosition([userLat, userLng]);
  //   },
  //   [userLat, userLng]
  // );

  // function showUserLocation() {
  //   const userLat = searchParams.get("lat");
  //   const userLng = searchParams.get("lng");
  //   setMapPosition([userLat, userLng]);
  // }

  return (
    <div className={styles.map}>
      <button
        style={{
          position: "absolute",
          zIndex: "10000",
          right: "2rem",
          bottom: "2rem",
        }}
        onClick={getPosition}
      >
        Locate
      </button>
      <MapContainer
        center={mapPosition}
        zoom={14}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {accounts.map(account => (
          <Marker
            position={[account.position.lat, account.position.lng]}
            key={account.name}
          >
            <Popup>
              <h2>{account.name}</h2>
            </Popup>
          </Marker>
        ))}
        <ChangePosition pos={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangePosition({ pos }) {
  const map = useMap();
  map.setView(pos, map.getZoom(), {
    animate: true,
  });
  return null;
}

export default Map;
