
import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey, setApiKey] = useState(localStorage.getItem('googleMapsApiKey') || '');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!apiKey);
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

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      localStorage.setItem('googleMapsApiKey', apiKey);
      setShowApiKeyInput(false);
      initializeMap(apiKey);
    }
  };

  useEffect(() => {
    if (apiKey && !showApiKeyInput) {
      initializeMap(apiKey);
    }
  }, []);

  if (showApiKeyInput) {
    return (
      <div className="space-y-4 p-6 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Google Maps Integration</h3>
          <p className="text-sm text-gray-600 mb-4">
            To display the interactive map, please enter your Google Maps API key
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="apiKey">Google Maps API Key</Label>
          <Input
            id="apiKey"
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your Google Maps API key"
          />
        </div>
        
        <Button onClick={handleApiKeySubmit} className="w-full">
          Load Map
        </Button>
        
        <div className="text-xs text-gray-500 mt-4">
          <p>Get your API key at: <a href="https://console.cloud.google.com/google/maps-apis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Cloud Console</a></p>
          <p className="mt-1">Make sure to enable the Maps JavaScript API and Places API</p>
        </div>
      </div>
    );
  }

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
      
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2 bg-white"
        onClick={() => setShowApiKeyInput(true)}
      >
        Change API Key
      </Button>
    </div>
  );
};

export default GoogleMap;
