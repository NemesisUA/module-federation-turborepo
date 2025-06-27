import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HostRoutePage } from './HostRoutePage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HostRoutePage />} />
      <Route path="/hostAbout" element={<HostRoutePage />} />
      <Route path="/hostContacts" element={<HostRoutePage />} />
    </Routes>
  );
};

export default App; 