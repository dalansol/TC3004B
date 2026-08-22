import React, { useState } from "react";
import PropTypes from 'prop-types'

//Componente hijo
function CounterApp({ value }) {
    return (
        <div>
            <h1>CounterApp</h1>
            <h2> {value} </h2>
        </div>
    )
}

CounterApp.propTypes = {
        value: PropTypes.number
};

// Componente padre
function Counter() {
    const [value, setValue] = useState(0);

    const subirCounter = () => {
        setValue((prev) => prev + 1);
    };

    const bajarCounter = () => {
        setValue((prev) => prev - 1);
    };

    return (
        <div>
            <CounterApp value={value} />

            <button onClick={subirCounter}>
                Agregar
            </button>

            <button onClick={bajarCounter}>
                Disminuir
            </button>
        </div>
    )
}


export default Counter

