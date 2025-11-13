import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './Component/navbar';
import Home from './Views/Home';
import Contact from './Views/Contact';
import CakeMenu from './Views/Cake-Menu';
import CakeView from './Views/Cake-view';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake-menu" element={<CakeMenu />} />
        <Route path="/cake-view" element={<CakeView />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

