
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey] = useState('AIzaSyDIqjmnHWswdGmn49osAxeYUHUvx_1loNE');
  const [isLoading, setIsLoading] = useState(false);

  const initializeMap = async (key: string) => {
    if (!mapRef.current) return;

    setIsLoading(true);
    try {
      const loader = new Loader({
        apiKey: key,
        version: 'weekly',
        libraries: ['places']
      });

      const { Map } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = await loader.importLibrary('marker');

      // Coordinates for 35 Queen Street, Waimate, Canterbury, New Zealand
      const waimateLocation = { lat: -44.7331, lng: 171.0462 };

      const map = new Map(mapRef.current, {
        zoom: 15,
        center: waimateLocation,
        mapTypeId: 'terrain',
        mapId: 'DEMO_MAP_ID'
      });

      // Add marker for Reconnected IT location
      new AdvancedMarkerElement({
        map,
        position: waimateLocation,
        title: 'Reconnected IT - 35 Queen Street, Waimate'
      });

    } catch (error) {
      console.error('Error loading Google Maps:', error);
      alert('Error loading Google Maps. Please check your API key.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey) {
      initializeMap(apiKey);
    }
  }, []);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={mapRef} 
        className="w-full h-64 rounded-lg shadow-lg"
        style={{ minHeight: '300px' }}
      />
    </div>
  );
};

export default GoogleMap;
