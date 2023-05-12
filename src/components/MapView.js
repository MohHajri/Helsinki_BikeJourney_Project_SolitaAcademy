import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import bikeStationsAPI from '../api/bikeStationsAPI';

const MapView = ({ address }) => {
  const [position, setPosition] = useState(null);
  const zoom = 13;

  useEffect(() => {
    async function fetchCoordinates() {
      const coords = await bikeStationsAPI.getCoordinatesForAddress(address);
      setPosition(coords);
    }

    if (address) {
      fetchCoordinates();
    }
  }, [address]);

  if (!address || !position) {
    return null;
  }

  return (
    <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} />
    </MapContainer>
  );
};

export default MapView;
