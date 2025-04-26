import React from "react";
import "./PortalCard.css";

const PortalCard = ({ name, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="portal-card">
      <div className="portal-name">{name}</div>
    </a>
  );
};

export default PortalCard;
