import { useState } from "react";

import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          iconType="wildfire"
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    } else if (ev.categories[0].id === 10) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          iconType="storm"
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    } else if (ev.categories[0].id === 15 || ev.categories[0].id === 12) {
      <LocationMarker
        lat={ev.geometries[0].coordinates[1]}
        lng={ev.geometries[0].coordinates[0]}
        iconType="iceStorm"
        onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
      />;
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyB4sfdeUU83_API6ZxzVgykgsV-Ol9EQY0" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

export default Map;

Map.defaultProps = {
  center: {
    lat: 28.7041,
    lng: 77.1025,
  },
  zoom: 3,
};
