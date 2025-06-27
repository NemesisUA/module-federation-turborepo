import React, { lazy } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { HostRoutePage } from './HostRoutePage';

const ReactRemoteApp = lazy(() => import("reactRemote/App"));

const Layout: React.FC = () => (
  <>
    <header style={{ background: '#222', color: '#fff', padding: '1rem', marginBottom: '1rem' }}>
      <h1>Host App Header</h1>
    </header>
    <Outlet />
  </>
);

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HostRoutePage />} />
        <Route path="hostAbout" element={<HostRoutePage />} />
        <Route path="hostContacts" element={<HostRoutePage />} />
        <Route path="remote/*" element={
          <React.Suspense fallback={<div>Loading remote...</div>}>
            <ReactRemoteApp />
          </React.Suspense>
        } />
      </Route>
    </Routes>
  )
};

export default App; 