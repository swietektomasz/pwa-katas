import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const libraries = ["places"];

function Map() {
  const geolocationOptions = useMemo(
    () => ({
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }),
    []
  );

  const [service, setService] = useState(null);
  const [nearby, setNearby] = useState([]);
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
    libraries,
  });

  function geolocationSuccess(pos) {
    if (pos) setPosition(new window.google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
  }

  function geolocationError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => {
    if (isLoaded) navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationError, geolocationOptions);
  }, [isLoaded, geolocationOptions]);

  useEffect(() => {
    if (service)
      service.nearbySearch({ location: position, radius: "500" }, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setNearby(results);
        }
      });
  }, [position, service]);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setService(new window.google.maps.places.PlacesService(map));
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={position} zoom={15} onLoad={onLoad}>
      {nearby.map(({ geometry, icon, name }) => (
        <Marker key={name} position={geometry.location} icon={icon} label={name} />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export const Geolocation = React.memo(Map);
