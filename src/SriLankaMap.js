import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight, MapPin } from 'lucide-react';
import NavBar from './NavBar';
import './NavBar.css';


// Fix leaflet marker icons (using CDN links for simplicity)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Tourist destinations data
const place = [
  {
    name: 'Colombo',
    lat: 6.9271,
    lng: 79.8612,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_Card_500x520.jpg',
    description: 'Vibrant capital blending colonial heritage, seaside promenades, markets and temples.',
    temperature: '28°C',
  },
      {
    name: 'Kandy',
    lat: 7.2906,
    lng: 80.6337,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_500x520.jpg',
    description: 'Cultural capital, home of the Temple of the Tooth and surrounded by hills.',
    temperature: '22°C',
  },
  {
    name: 'Bentota',
    lat: 6.4189,
    lng: 80.0059,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_Mobile_800x1000-1.jpg',
    description: 'Popular beach town with water‑sports, riverside resorts and turtle hatchery.',
    temperature: '30°C',
  },
  {
    name: 'Galle',
    lat: 6.0326,
    lng: 80.2170,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_500x520-2.jpg',
    description: 'Historic Dutch‑fortified city, charming streets and seaside ramparts.',
    temperature: '30°C',
  },
  {
    name: 'Negombo',
    lat: 7.2083,
    lng: 79.8389,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/NegomboLSL_Cropped_500x520.jpg',
    description: 'Lively beach town near Colombo airport, known for lagoon fishing and seafood.',
    temperature: '30°C',
  },
  {
    name: 'YalaNationalPark',
    lat: 6.3667,
    lng: 81.5167,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/Yala-LSL_Cropped_500x520.jpg',
    description: 'Wildlife haven with high leopard density and elephant sightings.',
    temperature: '30°C',
  },
  {
    name: 'Pasikudah',
    lat: 8.5850,
    lng: 81.2570,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/pasikudah-LSL_Cropped_500x520.jpg',
    description: 'Calm east‑coast lagoon beach, ideal for swimming and snorkeling.',
    temperature: '29°C',
  },
  {
    name: 'Jaffna',
    lat: 9.6615,
    lng: 80.0255,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/jaffnaLSL_Cropped_500x520.jpg',
    description: 'Historic Tamil city with fort, temples and unique cultural cuisine.',
    temperature: '32°C',
  },
  {
    name: 'Sigiriya',
    lat: 7.9570,
    lng: 80.7603,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/sigiriya-LSL_Cropped_500x520.jpg',
    description: 'Impressive rock fortress with frescoes and panoramic views.',
    temperature: '31°C',
  },
  {
    name: 'NuwaraEliya',
    lat: 6.9497,
    lng: 80.7891,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/nuwara-eliya-LSL_Cropped_500x520.jpg',
    description: 'Cool hill town with British‑era charm, gardens and tea estates.',
    temperature: '18°C',
  },
  {
    name: 'Ella',
    lat: 6.8667,
    lng: 81.0464,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Ella_Main_C2_500x520.jpg',
    description: 'Scenic mountain village with trails, waterfalls and panoramic viewpoints.',
    temperature: '21°C',
  },
  {
    name: 'ArugamBay',
    lat: 6.8417,
    lng: 81.7056,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_ArugamBay_Main_C2_500x520.jpg',
    description: 'East‑coast surf mecca with relaxed vibe and lagoon wildlife.',
    temperature: '30°C',
  },
  {
    name: 'Polonnaruwa',
    lat: 7.9350,
    lng: 81.0000,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_Main-Destination-Page_C2_500x520.jpg',
    description: 'UNESCO‑listed ancient capital with temples and royal gardens.',
    temperature: '32°C',
  },
  {
    name: 'Anuradhapura',
    lat: 8.3114,
    lng: 80.4037,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2019/09/LSL_Cropped_500x520.jpg', // Changed to a generic image to avoid missing file errors
    description: 'Sacred city featuring ancient stupas, monasteries and the Bodhi Tree.',
    temperature: '33°C',
  },
  {
    name: 'Batticaloa',
    lat: 7.7161,
    lng: 81.7168,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_C2_500x5201.jpg',
    description: 'East‑coast lagoon city, known for fishing and Dutch-era bridge.',
    temperature: '31°C',
  },
  {
    name: 'Dambulla',
    lat: 7.8564,
    lng: 80.6498,
    image: 'https://www.lovesrilanka.org/wp-content/uploads/2020/04/LS_C2_500x520.jpg',
    description: 'Hilltop cave-temple complex with Buddha statues and murals.',
    temperature: '31°C',
  }
  // ... add other places here
];

// Reference coordinates (Kandy) for distance calc
const kandyLat = 7.2906;
const kandyLng = 80.6337;

// Haversine formula to calculate distance (km)
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of Earth in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
}

function SriLankaMap() {
  const navigate = useNavigate();

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <NavBar />
      <MapContainer
        center={[7.8731, 80.7718]}
        zoom={7.2}
        style={{ height: '100%', width: '100%', paddingTop: '60px' }}
        className="rounded-lg shadow-xl"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {place.map((p, index) => {
          // Create a circular icon with background image
          const circularIcon = L.divIcon({
            html: `<div style="
              background-image: url(${p.image});
              background-size: cover;
              background-position: center;
              width: 50px;
              height: 50px;
              border-radius: 50%;
              border: 3px solid #007bff;
              box-shadow: 0 0 8px rgba(0,0,0,0.4);
            "></div>`,
            className: '',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50],
          });

          const distanceFromKandy = calculateDistance(kandyLat, kandyLng, p.lat, p.lng);

          return (
            <Marker
              key={index}
              position={[p.lat, p.lng]}
              icon={circularIcon}
              eventHandlers={{
                click: (e) => {
                  e.target._map.flyTo([p.lat, p.lng], 10, {
                    animate: true,
                    duration: 1.5,
                  });
                },
              }}
            >
              <Popup>
                <div
                  style={{
                    maxWidth: '300px',
                    fontFamily: "'Prompt', sans-serif",
                    color: '#2c3e50',
                    borderRadius: '12px',
                    boxShadow: '0 8px 20px rgba(44, 62, 80, 0.15)',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
                    userSelect: 'none',
                    cursor: 'default',
                    transition: 'transform 0.25s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <div
                    style={{
                      overflow: 'hidden',
                      borderRadius: '14px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
                      marginBottom: '12px',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{ width: '100%', height: '140px', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '8px',
                    }}
                  >
                    <h5
                      style={{
                        margin: 0,
                        fontWeight: '700',
                        fontSize: '1.2rem',
                        color: '#34495e',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <MapPin size={20} style={{ marginRight: '6px', color: '#e74c3c' }} />
                      {p.name.replace(/_/g, ' ')}
                    </h5>
                  </div>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: '#566573',
                      lineHeight: 1.3,
                      minHeight: '48px',
                      marginBottom: '12px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    title={p.description}
                  >
                    {p.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: '#7f8c8d',
                      marginBottom: '16px',
                      userSelect: 'none',
                    }}
                  >
                    <div>🌡️ <strong>{p.temperature}</strong></div>
                    <div>🧭 <strong>{distanceFromKandy} km from Kandy</strong></div>
                  </div>
                  <button
                    onClick={() => navigate(`/details/${encodeURIComponent(p.name)}`)}
                    style={{
                      width: '100%',
                      padding: '10px 0',
                      backgroundColor: '#007bff',
                      border: 'none',
                      borderRadius: '8px',
                      color: 'white',
                      fontWeight: '700',
                      fontSize: '1rem',
                      letterSpacing: '0.03em',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 123, 255, 0.5)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#0056b3';
                      e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 86, 179, 0.7)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = '#007bff';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 123, 255, 0.5)';
                    }}
                  >
                    Explore More <ArrowRight size={18} />
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default SriLankaMap;
