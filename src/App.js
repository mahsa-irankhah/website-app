import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Hamburger from "./Hamburger";
import Landing from './Landing';
import Products from './Products';
import DetailedProduct from './DetailedProduct';
import Register from './Register';
import Login from './Login';
import Notfound from './Notfound';




function App() {
  return (
    <div className="App">
      <Hamburger />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products/:id" element={<DetailedProduct />} />
        <Route path="/" element={<Landing />} />
        <Route path="/notfound" element={<Notfound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;
