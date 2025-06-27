import React from "react";
import { Link, useLocation } from "react-router-dom";

export const HostRoutePage: React.FC = () => {
  const location = useLocation();
  return (
    <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
      <h1>Host current route:  {location.pathname}</h1>
      <h2>remote current route:</h2>
      <nav style={{ backgroundColor: "lightgray", padding: "10px", opacity: 0.8 }}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/hostAbout">About</Link></li>
          <li><Link to="/hostContacts">Contacts</Link></li>
          <li><Link to="/remote/">Remote App</Link></li>
        </ul>
      </nav>
    </div>
  );
};
