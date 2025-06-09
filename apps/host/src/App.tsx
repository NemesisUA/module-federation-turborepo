import React, { Suspense, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const ReactRemoteApp = React.lazy(() => import("reactRemote/App"));

const App = () => {
  const [bgColor, setBgColor] = useState("lightblue");

  const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow"];

  return (
    <div style={{ padding: "20px" }}>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", padding: 0 }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-remote">React Remote</Link>
          </li>
        </ul>
      </nav>

      <div style={{ marginTop: "20px" }}>
        <h3>Select background color for remote component:</h3>
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setBgColor(color)}
              style={{
                backgroundColor: color,
                border: "1px solid #ccc",
                padding: "8px 16px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Host Application Home</div>} />
          <Route
            path="/react-remote"
            element={<ReactRemoteApp backgroundColor={bgColor} />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App; 