import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const ReactRemoteApp = React.lazy(() => import("reactRemote/App"));

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/react-remote">React Remote</Link>
          </li>
        </ul>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<div>Host Application Home</div>} />
          <Route path="/react-remote" element={<ReactRemoteApp />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App; 