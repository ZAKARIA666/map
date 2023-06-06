import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, Box } from '@mui/material';
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
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to My Map
        </Typography>
        <Box sx={{ width: '800px', height: '600px', border: '1px solid gray', borderRadius: '4px', mt: 2 }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg' }} // Replace with your Google Maps API key
            defaultCenter={mapOptions.center}
            defaultZoom={mapOptions.zoom}
          >
            <AnyReactComponent lat={mapOptions.center.lat} lng={mapOptions.center.lng} />
          </GoogleMapReact>
        </Box>
      </Box>
    </div>
  );
};

export default App;
