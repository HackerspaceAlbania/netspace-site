import React from "react";
import GoogleMapReact from 'google-map-react';
import mapStyles from './mapStyles'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

interface MapProps {
  center: {
    lat: number,
    lng: number
  },
  zoom: number
}

const CustomMap = (props: MapProps) => {
  return (
    <div style={{width: "100%"}}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBZiWQQrCkvFQrbtU5eZTb5JI6q5ihZSVM" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        options={{ styles: mapStyles }}
      >
        {/* <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}

export default CustomMap;