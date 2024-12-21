import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";

// Fix marker icons issue in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function Maps() {
  const [position, setPosition] = useState([51.505, -0.09]); // Default location

  const LocationPicker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]); // Update marker position
      },
    });
    return null;
  };

  return (
    <section className="text-center font-title" id="maps">
      <h1 className="text-red-600 font-bold text-3xl mb-2">
        FIND YOUR NEAREST GYM
      </h1>
      <p className="text-lg text-white">
        Easily discover gyms near your location to kickstart your fitness
        journey today!
      </p>

      <div className="h-screen w-3/4 mx-auto mt-10">
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}></Marker>
          <LocationPicker />
        </MapContainer>
      </div>
    </section>
  );
}

export default Maps;
