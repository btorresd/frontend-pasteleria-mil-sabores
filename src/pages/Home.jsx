import React from 'react';

import logoMilSabores from '../assets/logo.png'; 

const Home = () => {
    return (
        <div className="container mt-5">
            
            {/* 1. SECCIÓN PRINCIPAL DE BIENVENIDA */}
            <div className="text-center mb-5">
                <h1 className="display-4" style={{ color: '#5D3E24', fontFamily: 'Pacifico, cursive' }}>
                    Pastelería MIL SABORES
                </h1>
                <p className="lead" style={{ color: '#794D2C' }}>
                    El sabor tradicional que endulza tus momentos especiales.
                </p>
            </div>
            
            {/* 2. LOGO GRANDE O IMAGEN CENTRAL */}
            <div className="text-center mb-5">
                <img 
                    src={logoMilSabores} 
                    alt="Logo Principal Pastelería MIL SABORES" 
                    className="img-fluid" 
                    style={{ maxWidth: '300px' }}
                />
            </div>

            {/* 3. SECCIÓN DE DESTACADOS (Promoción) */}
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm border-0" style={{ backgroundColor: '#FFFBEA' }}>
                        <div className="card-body text-center">
                            <h3 className="card-title" style={{ color: '#A0522D', fontFamily: 'Pacifico, cursive' }}>
                                🎉 ¡Nuestra Torta Especial de la Semana!
                            </h3>
                            <p className="card-text">
                                Prueba la exquisita Torta Cuadrada de chocolate con con capas de ganache y un toque de avellanas. Un clásico suave y delicioso, perfecto para compartir.
                            </p>
                            <a href="/productos" className="btn btn-warning" style={{ backgroundColor: '#FFD700', borderColor: '#FFD700', color: '#5D3E24' }}>
                                Ver Productos
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;