import { useRef, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LeafletMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([43.848466, -79.330987], 3);
      mapRef.current.invalidateSize(); // Ensures the map size is properly calculated
    }
  }, []);

  return (
    <MapContainer
      center={[43.848466, -79.330987]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "400px", backgroundColor: "red", marginTop: "80px", marginBottom: '90px' }}
      whenReady={() => {
        if (mapRef.current) {
          // The mapRef will be assigned when the map is ready
          mapRef.current.invalidateSize();
        }
      }}
      ref={(mapInstance) => {
        if (mapInstance) {
          mapRef.current = mapInstance;
        }
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default LeafletMap;
