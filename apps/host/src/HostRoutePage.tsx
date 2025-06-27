import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

const ReactRemoteApp = React.lazy(() => import("reactRemote/App"));

export const HostRoutePage: React.FC = () => {
  const location = useLocation();
  return (
    <div style={{ backgroundColor: "lightyellow", padding: "10px" }}>
      <h1>Host current route:</h1>
      <h2>remote current route: {location.pathname}</h2>
      <nav style={{ backgroundColor: "lightgray", padding: "10px", opacity: 0.8 }}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/hostAbout">About</a></li>
          <li><a href="/hostContacts">Contacts</a></li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading remote app...</div>}>
        <ReactRemoteApp />
      </Suspense>
    </div>
  );
};
