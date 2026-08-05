"use client";

import { useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;
    let mapInstance: any = null;

    import("leaflet").then((L) => {
      if (!active || !containerRef.current) return;

      const isMobile = window.innerWidth < 768;

      mapInstance = L.map(containerRef.current, {
        center: isMobile ? [-2.5, 113] : [-2.5, 118],
        zoom: isMobile ? 4 : 5,
        scrollWheelZoom: false,
        zoomControl: false,
        dragging: false,
        doubleClickZoom: false,
        touchZoom: false,
        keyboard: false,
        attributionControl: true,
      });

      L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Tiles &copy; Esri", maxZoom: 19 }
      ).addTo(mapInstance);

      CITIES.forEach((city) => {
        L.circleMarker([city.lat, city.lng] as [number, number], {
          radius: 8,
          fillColor: "#00A896",
          fillOpacity: 1,
          color: "white",
          weight: 2.5,
        })
          .addTo(mapInstance)
          .bindTooltip(city.name, {
            permanent: true,
            direction: "top",
            offset: [0, -12],
            className: "ssb-map-tooltip",
          })
          .openTooltip();
      });
    });

    return () => {
      active = false;
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="rounded-2xl overflow-hidden shadow-md h-[260px] md:h-[400px]"
    />
  );
}
