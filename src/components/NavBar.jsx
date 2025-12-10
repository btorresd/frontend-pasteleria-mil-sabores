import React from 'react';
import { Link } from 'react-router-dom';
// CRÍTICO: Importar el logo desde assets usando la ruta relativa
import logoMilSabores from '../assets/logo.png'; 

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-marron">
            <div className="container-fluid">
                
                {/* LOGO y Nombre de la Pastelería */}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img 
                        // Usamos la variable importada
                        src={logoMilSabores} 
                        alt="Pastelería MIL SABORES Logo" 
                        style={{ height: '40px', marginRight: '10px' }} 
                    />
                    {/* Texto del título */}
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MIL SABORES</span>
                </Link>
                
                {/* Botón Toggler para móviles */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span> 
                </button>
                
                {/* Ítems del Menú */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/productos">Productos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">🛒 Carrito</Link>
                        </li>
                        
                        {/* Páginas de Seguridad */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/registro">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/iniciar-sesion">Iniciar Sesión</Link>
                        </li>
                        
                        {/* Páginas Informativas */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contacto">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/nosotros">Nosotros</Link>
                        </li>
                        
                        {/* Botón de Pagar / Checkout */}
                        <li className="nav-item">
                            <Link className="nav-link btn btn-sm btn-danger ms-2" to="/checkout">Pagar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;