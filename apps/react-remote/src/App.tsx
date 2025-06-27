import React from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";

const RemoteHome = () => <div><h2>Remote Home</h2><p>This is the remote home page.</p></div>;
const RemoteAbout = () => <div><h2>Remote About</h2><p>This is the remote about page.</p></div>;
const RemoteContacts = () => <div><h2>Remote Contacts</h2><p>This is the remote contacts page.</p></div>;

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: "pink", padding: "10px" }}>
      <h1>Remote App Notification: You are on route {location.pathname}</h1>
      <button onClick={() => navigate(-1)} style={{ marginBottom: '1rem' }}>Back</button>
      <nav style={{ backgroundColor: "lightgray", padding: "10px", opacity: 0.8 }}>
        <ul>
          <li><Link to="">Home</Link></li>
          <li><Link to="remoteAbout">About</Link></li>
          <li><Link to="remoteContacts">Contacts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<RemoteHome />} />
        <Route path="/remoteAbout" element={<RemoteAbout />} />
        <Route path="/remoteContacts" element={<RemoteContacts />} />
      </Routes>
    </div>
  );
};

export default App;
