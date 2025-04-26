import React from "react";
import PortalCard from "./components/PortalCard";
import jobPortals from "./data/jobPortals";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>🧑‍💻 Job Portals</h1>
      <div className="portals-container">
        {jobPortals.map((portal, index) => (
          <PortalCard 
            key={index}
            name={portal.name}
            url={portal.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
