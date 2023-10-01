import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import styles from "./Map.module.css";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEffect, useState } from "react";
import { useURL } from "../hooks/useURL";
// import { useURL } from "../hooks/useURL";
// import { useEffect, useState } from "react";
const accounts = [
  {
    name: "Bon Tertius T.",
    email: "tuyishimirebt12@gmail.com",
    phone: "+25765849761",
    position: { lat: -3.342249, lng: 29.401736 },
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
    position: { lat: -3.345509, lng: 29.393489 },
  },
];

function Map() {
  const [mapPosition, setMapPosition] = useState([-3.3456, 29.4008]);
  const { position: geoPosition, error, getPosition } = useGeolocation();
  // const [userLat, userLng] = useURL();
  // useEffect(
  //   function () {
  //     if (userLat && userLng) setMapPosition([userLat, userLng]);
  //   },
  //   [userLat, userLng]
  // );

  useEffect(
    function () {
      if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
    },
    [geoPosition]
  );

  return (
    <div className={styles.map}>
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
  map.setView(pos);
  return null;
}

export default Map;
