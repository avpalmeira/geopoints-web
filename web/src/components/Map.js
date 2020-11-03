import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = (props) => {
  const mapStyles = {
    width: '800px',
    height: '400px',
  };
  const center = {
    lat: -1.2884,
    lng: 36.8233,
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={center}
    >
      <Marker
        title="Kenyatta"
      />
      <Marker
        title="Hilton Nairobi"
        position={{
          lat: -1.2851297,
          lng: 36.8225361
        }}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBrX59vxvPa_Zhm01kSuJr4ZCnxMJkMpnU'
})(MapContainer);
