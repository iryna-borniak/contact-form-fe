import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useRef } from 'react';

const containerStyle = {
  width: '976px',
  height: '976px',
  borderRadius: '50%',
  top: '-52px',
};

const center = {
  lat: 40.6598,
  lng: -73.8825,
};

const defaultOptions = {
  clickableIcons: false,
  mapTypeControl: false,
  keyboardShortcuts: false,
  streetViewControl: false,
  fullscreenControl: false,
  zoomControl: false,
};

export const Map = () => {
  const mapRef = useRef(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = null;
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap          
          center={center}
          zoom={14}
          options={defaultOptions}
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
          onUnmount={onUnmount}
        />
      )}
    </>
  );
};
