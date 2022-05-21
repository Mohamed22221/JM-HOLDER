import React from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import styled from "styled-components";

class Map extends React.Component {
  render = () => {
    return (
      <StyleMap>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={{ lat: 29.082970, lng: 48.061740 }}
      >
        <Marker
          position={{
            lat: 29.082970,
            lng: 48.061740
          }}
        />
      </GoogleMap>
      </StyleMap>
    );
  };
}

const MapComponent = withScriptjs(withGoogleMap(Map));
const StyleMap = styled.div`
width: 620px;
@media (max-width:1150px ) {
  width: 600px;
}


`

export default () => (
  <MapComponent
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJUO-6elU5K4gslpNITLk2LK9Q01sh-VE"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `400px`}} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);