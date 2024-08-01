// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; 
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          {/* Home route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
