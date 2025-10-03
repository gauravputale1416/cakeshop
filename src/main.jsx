import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router';
import Home from './Views/Home';
import Contact from './Views/Contact';
import CakeMenu from './Views/Cake-Menu';
import CakeView from './Views/Cake-view';

const root = createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
  <Routes >
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/Cake-Menu" element={<CakeMenu />} />
    <Route path="/Cake-view" element={<CakeView />} />
  </Routes>
</BrowserRouter>

)
 
