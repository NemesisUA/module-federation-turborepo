import React from "react";
import { Routes, Route, Link, useLocation, useNavigate, BrowserRouter } from "react-router-dom";

const RemoteHome = () => <div><h2>Remote Home</h2><p>This is the remote home page.</p></div>;
const RemoteAbout = () => <div><h2>Remote About</h2><p>This is the remote about page.</p></div>;
const RemoteContacts = () => <div><h2>Remote Contacts</h2><p>This is the remote contacts page.</p></div>;

// Detect standalone mode (not perfect, but works for most setups)
const isStandalone = window.location.port === "3002";

const routePrefix = isStandalone ? "" : "/remote";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "pink", padding: "10px" }}>
      <h1>Remote App Notification: You are on route {location.pathname}</h1>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>Back (-1)</button>
      <button onClick={() => navigate("/hostContacts")} style={{ marginBottom: '1rem' }}>Back to hostContacts</button>

      <nav style={{ backgroundColor: "lightgray", padding: "10px", opacity: 0.8 }}>
        <ul>
          <li><Link to={`${routePrefix}/home`}>Home</Link></li>
          <li><Link to={`${routePrefix}/about`}>About</Link></li>
          <li><Link to={`${routePrefix}/contacts`}>Contacts</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${routePrefix}/home`} element={<RemoteHome />} />
        <Route path={`${routePrefix}/about`} element={<RemoteAbout />} />
        <Route path={`${routePrefix}/contacts`} element={<RemoteContacts />} />
      </Routes>
    </div>
  );
};

export default App;
