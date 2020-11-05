import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import api from '../services/api';

const MapContainer = (props) => {
  const mapStyles = {
    width: '800px',
    height: '400px',
  };
  const center = {
    lat: -8.0368227,
    lng: -34.953473,
  };

  const { Option } = Select;

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

  // useEffect:
  //  get /geobatches/currentBatch.id
  //  center = coordinates[0]
  // onCurrentBatchChange = (id) => { get /geobatches/id }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24  }}>
        <Select
          defaultValue={currentBatch ? currentBatch.id : 0}
          style={{ width: 120 }}>

          <Option value={0}>Default</Option>
          {(batches !== []) ? batches.map((batch) => (
            <Option value={batch.id}>{batch.name}</Option>
          )) : null}
        </Select>
        <span style={{ marginLeft: '20px' }}>
          Caminho do arquivo: {currentBatch ? currentBatch.filePath : 'inexistente'}
        </span>
      </div>
      <Map
        google={props.google}
        zoom={13}
        style={mapStyles}
        initialCenter={center}
      >
        <Marker
          title="Hospital Barão de Lucena"
        />
        <Marker
          title="UFPE"
          position={{
            lat: -8.0538987,
            lng: -34.9596218,
          }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer);
