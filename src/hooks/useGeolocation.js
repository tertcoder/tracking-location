import { useState } from "react";

export function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    navigator.geolocation.getCurrentPosition(
      pos =>
        setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      error => {
        setError(error.message);
      }
    );
  }
  return { position, error, getPosition };
}
