import React from 'react';
import { Select } from 'antd';
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

  const { Option } = Select;

  return (
    <div>
      <Select defaultValue={1} style={{ width: 120, marginBottom: 24 }}>
        <Option value={1}>One</Option>
        <Option value={2}>Two</Option>
      </Select>
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
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer);
