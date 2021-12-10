import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Don't forget to import the css
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function MyMap() {
  const ironhackLogo = new L.Icon({
    iconUrl: "https://i.imgur.com/vkKElHO.jpg",
    iconSize: [35, 40],
  });
  //Some random co-ordinate
  const position = [51.505, -0.09];

  //Do not forget to set a width and height style to your map. Else it won't show up
  return (
    <div>
      <MapContainer
        style={{
          width: "500px",
          height: "400px",
          marginTop: "10px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          icon={ironhackLogo}
          style={{ borderRadius: "20px" }}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MyMap;
