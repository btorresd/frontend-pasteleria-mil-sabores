import React from 'react';
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';


import Home from './pages/Home'; 
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import RegistroUsuario from './pages/RegistroUsuario';
import IniciarSesion from './pages/IniciarSesion';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Checkout from './pages/Checkout'; 


const NotFound = () => (
    <div className="container mt-5">
        <h1 className="text-danger">404 - Página no encontrada</h1>
        <p>Lo sentimos, la ruta a la que intentas acceder no existe.</p>
    </div>
);


function App() {
  return (
    <>
      {/* 1. Barra de Navegación (visible en todas las rutas) */}
      <NavBar />

      {/* 2. Definición de Rutas */}
      <div className="main-content">
        <Routes>
          {/* Rutas Principales */}
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<Carrito />} />
          
          {/* Rutas de Proceso (Registro/Login/Checkout) */}
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/checkout" element={<Checkout />} />
          
          {/* Rutas Informativas */}
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />

          {/* Manejo de Ruta no encontrada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;