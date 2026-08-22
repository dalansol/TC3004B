import React from 'react';
// Importamos la lista de bancos. Asegúrate de tener "export const bancos" en bancos.js
import { bancos } from '../assets/bancos.js';

// Definimos la interfaz que coincida con la nueva estructura de tus datos
interface Banco {
    id: number;
    name: string;
    country: string;
}

const Tercero: React.FC = () => {
    return (
        <div>
            <h2>Lista de Bancos Internacionales</h2>
            <ul>
                {bancos.map((banco: Banco) => (
                    <li key={banco.id}>
                        <strong>{banco.name}</strong> - Sede: {banco.country}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tercero