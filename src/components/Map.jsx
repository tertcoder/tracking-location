import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import { useGeolocation } from "../hooks/useGeolocation";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

function Map() {
  const [mapPosition, setMapPosition] = useState([-3.3456, 29.4008]);
  const { position: geoPosition, error, getPosition } = useGeolocation();
  useEffect(
    function () {
      if (geoPosition) setMapPosition([geoPosition.lat, geoPosition.lng]);
    },
    [geoPosition]
  );

  return (
    <div className={styles.map}>
      <MapContainer center={mapPosition} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
