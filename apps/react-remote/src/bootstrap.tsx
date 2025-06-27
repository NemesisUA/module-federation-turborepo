import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

// Only wrap in BrowserRouter if running standalone
const isStandalone = window.location.pathname !== "/"; // or use a better check if needed

root.render(
  <React.StrictMode>
    {isStandalone ? (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ) : (
      <App />
    )}
  </React.StrictMode>
);