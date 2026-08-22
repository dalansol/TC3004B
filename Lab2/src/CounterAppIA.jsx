import { useState } from 'react';
import PropTypes from 'prop-types';

const CounterAppIA = ({ value = 0 }) => {
    // Inicializamos el estado 'counter' tomando como base el prop 'value'
    const [ counter, setCounter ] = useState( value );

    // Función para incrementar
    const handleAdd = () => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 ); // Alternativa
    };

    // Función para disminuir
    const handleSubtract = () => {
        setCounter( counter - 1 );
    };

    return (
        <>
            <h1>CounterAppIA</h1>
            <h2> { value } </h2>
            <h3> { counter } </h3>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleSubtract }> -1 </button>
        </>
    );
};

// Validación de los Props enviados por el padre
CounterAppIA.propTypes = {
    value: PropTypes.number.isRequired
};

export default CounterAppIA