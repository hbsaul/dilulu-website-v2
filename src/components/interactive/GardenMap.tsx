"use client";

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 0.4162, // Libreville, Gabon latitude
  lng: 9.4673  // Libreville, Gabon longitude
};

interface GardenLocation {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'school' | 'community' | 'family';
  description: string;
}

interface GardenMapProps {
  apiKey: string;
  locations?: GardenLocation[];
}

const defaultLocations: GardenLocation[] = [
  {
    id: '1',
    name: 'Ecole Ruban Vert Garden',
    position: { lat: 0.4162, lng: 9.4673 },
    type: 'school',
    description: 'School garden with hydroponic technology and indigenous plants.'
  },
  {
    id: '2',
    name: 'Libreville Community Garden',
    position: { lat: 0.4262, lng: 9.4573 },
    type: 'community',
    description: 'Community garden growing vegetables and medicinal herbs.'
  },
  {
    id: '3',
    name: 'Family Garden Project',
    position: { lat: 0.4062, lng: 9.4773 },
    type: 'family',
    description: 'Family garden demonstrating sustainable home gardening techniques.'
  }
];

const GardenMap: React.FC<GardenMapProps> = ({ 
  apiKey = 'YOUR_GOOGLE_MAPS_API_KEY',
  locations = defaultLocations 
}) => {
  const [selectedLocation, setSelectedLocation] = useState<GardenLocation | null>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Use type assertion to fix TypeScript error with Google Maps marker icons
  const markerIcons = {
    school: {
      url: '/images/school-garden-marker.png',
      scaledSize: { width: 40, height: 40 }
    },
    community: {
      url: '/images/community-garden-marker.png',
      scaledSize: { width: 40, height: 40 }
    },
    family: {
      url: '/images/family-garden-marker.png',
      scaledSize: { width: 40, height: 40 }
    }
  } as any;

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <div className="garden-map-container">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {locations.map(location => (
            <Marker
              key={location.id}
              position={location.position}
              onClick={() => setSelectedLocation(location)}
              icon={markerIcons[location.type]}
            />
          ))}

          {selectedLocation && (
            <InfoWindow
              position={selectedLocation.position}
              onCloseClick={() => setSelectedLocation(null)}
            >
              <div className="p-3">
                <h3 className="text-lg font-bold">{selectedLocation.name}</h3>
                <p className="text-sm">{selectedLocation.description}</p>
                <div className="mt-2">
                  <span className="inline-block px-2 py-1 text-xs rounded-full bg-earth-green text-white">
                    {selectedLocation.type.charAt(0).toUpperCase() + selectedLocation.type.slice(1)} Garden
                  </span>
                </div>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default GardenMap;
