import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import { User } from '../../models/types';
import 'leaflet/dist/leaflet.css';

let myIcon = L.icon({
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
  const map = useMap();

  useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

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
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '75%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Markers users={users} />
    </MapContainer>
  );
};

export default Map;