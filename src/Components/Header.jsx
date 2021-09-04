import { Icon } from "@iconify/react";
import logoIcon from "@iconify/icons-mdi/atlassian";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Icon icon={logoIcon} /> Disaster Tracker
      </h1>
    </header>
  );
};

export default Header;
