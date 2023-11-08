import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Base from '../pages/Base/index';

const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<Base />} />
  </Routes>
);

export default RoutesApp;
