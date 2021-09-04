import React from "react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/flash-alert";
import snowflakeIcon from "@iconify/icons-mdi/snowflake-alert";

const LocationMarker = ({ onClick, iconType }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon
        className={`location-icon ${
          iconType === "wildfire"
            ? "wildfire"
            : iconType === "iceStorm"
            ? "ice-storm"
            : "storm"
        }`}
        icon={
          (iconType === "wildfire" && locationIcon) ||
          (iconType === "storm" && stormIcon) ||
          (iconType === "iceStorm" && snowflakeIcon)
        }
      />
    </div>
  );
};

export default LocationMarker;
