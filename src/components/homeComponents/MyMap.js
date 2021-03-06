import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//Don't forget to import the css
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import { API_URL } from "../../config";

function MyMap() {
  const [users, setUsers] = useState([]);
  const sasLogo = new L.Icon({
    iconUrl: "https://i.imgur.com/cDtWOwo.png",
    iconSize: [25, 30],
  });
  //Some users co-ordinate
  useEffect(() => {
    async function userData() {
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    }
    userData();
  }, []);
  const position = [41.505, -1.9];
  function findPosition(lat, lon) {
    const position = [lat, lon];
    return position;
  }
  //Do not forget to set a width and height style to your map. Else it won't show up
  return (
    <div>
      <MapContainer
        style={{
          width: "800px",
          height: "400px",
          marginTop: "10px",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
        center={position}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {users.map((elem) => {
          return (
            <div key={elem._id}>
              <Marker
                position={findPosition(elem.lat, elem.lon)}
                icon={sasLogo}
                style={{ borderRadius: "20px" }}
              >
                <Popup>
                  Click here. <br />
                  <Link to={`/${elem._id}/profile`}>{elem.firstName}</Link>
                </Popup>
              </Marker>
            </div>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default MyMap;
