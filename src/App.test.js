function App() {
  return (
    <MapContainer
      center={[7.8731, 80.7718]}
      zoom={7.2}
      style={{ height: '100vh', width: '100%' }}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      zoomControl={false}
      dragging={false}
      touchZoom={false}
      keyboard={false}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {attractions.map((place, index) => (
        <Marker key={index} position={[place.lat, place.lng]}>
          <Popup>
            <div style={{ maxWidth: '200px' }}>
              <img src={place.image} alt={place.name} style={{ width: '100%', borderRadius: '8px' }} />
              <h4 style={{ margin: '0.5rem 0 0.25rem' }}>{place.name}</h4>
              <p style={{ margin: 0 }}>{place.description}</p>
              <small>🌡️ Temp: {place.temperature}</small>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
