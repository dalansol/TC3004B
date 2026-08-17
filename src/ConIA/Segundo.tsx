import React from 'react';

const Segundo: React.FC = () => {
    const saludo: string = "¡Bienvenido a React!";
    const nombre: string = "Desarrollador";
    const anio: number = 2026;

    return (
        <div>
            <h2>{saludo}</h2>
            <p>Hola, {nombre}. Estamos en el año {anio}.</p>
        </div>
    );
};

export default Segundo