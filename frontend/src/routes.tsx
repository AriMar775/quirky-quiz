import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from 'pages/Homepage';

const Navigator = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  </BrowserRouter>
);

export default Navigator;
