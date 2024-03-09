import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Page404 from '../pages/404';

import history from '../services/history';

export default function PageRoutes() {
  return (
    <Routes history={history}>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
