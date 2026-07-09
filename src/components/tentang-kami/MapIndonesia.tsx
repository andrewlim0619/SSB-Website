"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CITIES = [
  { name: "Medan",      lat: 3.5952,  lng: 98.6722  },
  { name: "Pekanbaru",  lat: 0.5071,  lng: 101.4478 },
  { name: "Palembang",  lat: -2.9761, lng: 104.7754 },
  { name: "Jakarta",    lat: -6.2088, lng: 106.8456  },
  { name: "Bandung",    lat: -6.9147, lng: 107.6098  },
  { name: "Semarang",   lat: -6.9932, lng: 110.4203  },
  { name: "Yogyakarta", lat: -7.7956, lng: 110.3695  },
  { name: "Surabaya",   lat: -7.2575, lng: 112.7521  },
  { name: "Bali",       lat: -8.4095, lng: 115.1889  },
  { name: "Makassar",   lat: -5.1477, lng: 119.4327  },
];

export default function MapIndonesia() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md" style={{ height: "400px" }}>
      <MapContainer
        center={[-2.5, 118]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
        scrollWheelZoom={false}
        zoomControl={false}
        dragging={false}
        doubleClickZoom={false}
        touchZoom={false}
        keyboard={false}
        attributionControl={true}
      >
        {/* Esri satellite imagery — free, no API key */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution="Tiles &copy; Esri"
          maxZoom={19}
        />

        {CITIES.map((city) => (
          <CircleMarker
            key={city.name}
            center={[city.lat, city.lng]}
            radius={8}
            pathOptions={{
              fillColor: "#00A896",
              fillOpacity: 1,
              color: "white",
              weight: 2.5,
            }}
          >
            <Tooltip
              permanent
              direction="top"
              offset={[0, -12]}
              className="ssb-map-tooltip"
            >
              {city.name}
            </Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>
    </div>
  );
}
