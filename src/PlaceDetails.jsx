// PlaceDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';


const PlaceDetails = () => {
  const { name } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#4f46e5' }}>{decodeURIComponent(name)}</h1>
      <p>This is the detail page for <strong>{decodeURIComponent(name)}</strong>.</p>
    </div>
  );
};

export default PlaceDetails;
