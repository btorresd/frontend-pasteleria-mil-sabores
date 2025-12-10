import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // Reemplazamos las clases de Tailwind/simple por las de Bootstrap
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-pink-800 shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand fs-4">
            🍰 Pastelería App
          </Link>
          <div className="collapse navbar-collapse show" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/productos" className="nav-link">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/carrito" className="nav-link">
                  <i className="bi bi-cart"></i> 🛒 Carrito
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/checkout" className="nav-link">
                  Finalizar Compra
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;