import React from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';

const AnyReactComponent = () => <div className="marker">Your Location</div>;

const App = () => {
  const mapOptions = {
    center: {
      lat: 37.7749, // Latitude
      lng: -122.4194, // Longitude
    },
    zoom: 10, // Zoom level
  };

  return (
    <div className="app">
      <h1>Welcome to My Map</h1>
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'YOUR_API_KEY' }} // Replace with your Google Maps API key
          defaultCenter={mapOptions.center}
          defaultZoom={mapOptions.zoom}
        >
          <AnyReactComponent lat={mapOptions.center.lat} lng={mapOptions.center.lng} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default App;
