import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HostRoutePage } from './HostRoutePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HostRoutePage />} />
        <Route path="/hostAbout" element={<HostRoutePage />} />
        <Route path="/hostContacts" element={<HostRoutePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App; 