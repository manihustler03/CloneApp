// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'; 
import Login from './pages/Login';
import HomePage from './pages/Home-page/Index'
import ProfilePage from './pages/Profile-page/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />          {/* Home route */}
        <Route path="/register" element={<Register />} /> {/* Register route */}
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>} ></Route>       {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
