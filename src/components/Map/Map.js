import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";

const center = {
  lat: 39.89165436197563,
  lng: 32.785634185480845,
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
//const libraries = ["places"];
const mapContainerStyle = {
  height: "90%",
  width: "90%",
  borderRadius: "5px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.26)",
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR KEY!",
  });

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <GoogleMap
      id="d49aa273fe75c48e"
      mapContainerStyle={mapContainerStyle}
      zoom={18}
      center={center}
      options={options}
      mapId="d49aa273fe75c48e"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
