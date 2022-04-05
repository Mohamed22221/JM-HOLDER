import React from 'react'
import { useGoogleMaps } from "react-hook-google-maps";

const Mab = () => {
  const { ref, map, google } = useGoogleMaps(
    // Use your own API key, you can get one from Google (https://console.cloud.google.com/google/maps-apis/overview)
    "AIzaSyBJUO-6elU5K4gslpNITLk2LK9Q01sh-VE",
    // NOTE: even if you change options later
    {
      center: { lat: 0, lng: 0 },
      zoom: 3
    }
  );
  console.log(map); // instance of created Map object (https://developers.google.com/maps/documentation/javascript/reference/map)
  console.log(google); // google API object (easily get google.maps.LatLng or google.maps.Marker or any other Google Maps class)
  return <div ref={ref} style={{ width: 400, height: 300 }} />;
}

export default Mab