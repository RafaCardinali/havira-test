import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { User } from '../../models/types';
import 'leaflet/dist/leaflet.css';

var myIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

interface MapProps {
  users: User[];
}

const Markers: React.FC<MapProps> = ({ users }) => {
  const map = useMapEvents({});

  useEffect(() => {
    users.forEach(user => {
      L.marker([parseFloat(user.address.geo.lat), parseFloat(user.address.geo.lng)], { icon: myIcon })
        .addTo(map)
        .bindPopup(`
          <div>
            <h2>Nome: ${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Apelido: ${user.username}</p>
            <p>Telefone: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <p>Companhia: ${user.company.name}</p>
          </div>
        `);
    });
  }, [users, map]);

  return null;
};

const Map: React.FC<MapProps> = ({ users }) => {
  return (
    <MapContainer center={{ lat: 0, lng: 0 }} zoom={2} style={{ height: "100vh", width: "75%" }}>
      <TileLayer
        url="https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=qwDbex8h0YUY0kIVRYYk"
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
      />
      <Markers users={users} />
    </MapContainer>
  );
};

export default Map;