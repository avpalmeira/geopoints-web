import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../services/api';

const MapContainer = (props) => {
  const mapStyles = {
    width: '800px',
    height: '400px',
  };

  const { Option } = Select;

  const [ locations, setLocations ] = useState([]);
  const [ center, setCenter ] = useState({ lat: -8.0368227, lng: -34.953473 });
  const [ batches, setBatches ] = useState([]);
  const [ currentBatch, setCurrentBatch ] = useState(null);

  useEffect(() => {
    const fetchBatches = async () => {
      const allBatches = await api.get('/geobatches');
      setBatches(allBatches.data);
      setCurrentBatch(allBatches.data[0]);
    }
    fetchBatches();
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      if (currentBatch) {
        const locations = await api.get(`/geobatches/${currentBatch.id}`);
        setLocations(locations.data);
        setCenter({
          lat: locations.data[0].coordinates[0],
          lng: locations.data[0].coordinates[1],
        });
      }
    }
    fetchLocations();
  }, [currentBatch]);

  const handleCurrentBatchChange = (value) => {
    let current = null;
    batches.forEach((batch) => {
      if (batch.id === value) {
        current = batch;
        return;
      }
    });
    if (current !== null) {
      setCurrentBatch(current);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24 }}>
        <Select
          defaultValue={currentBatch ? currentBatch.id : 'Default'}
          onChange={handleCurrentBatchChange}
          style={{ width: 120 }}>
          {(batches !== []) ? batches.map((batch, index) => (
            <Option key={index} value={batch.id}>{batch.name}</Option>
          )) : null}
        </Select>
        <span style={{ marginLeft: '20px' }}>
          URL do arquivo: {currentBatch ? currentBatch.filePath : 'inexistente'}
        </span>
      </div>
      <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        center={center}
      >
        {locations ? locations.map((geoLocation, index) => (
          <Marker
            key={index}
            position={{
              lat: geoLocation.coordinates[0],
              lng: geoLocation.coordinates[1],
            }}
          />
        )) : <Marker position={center}/> }
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer);
