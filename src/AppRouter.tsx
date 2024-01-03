// src/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ThuyNoiDia from './component/ThuyNoiDia/ThuyNoiDia';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/thuynoidia" element={<ThuyNoiDia />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
