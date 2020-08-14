import React from 'react';

const HolaMundo = () => {

    const hello = 'Hola mundo';
    const isTrue = true;
    return (
        <div className="HolaMundo">
            <h1>{hello}</h1>
            <h2>Curso básico de react</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png"/>
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    )
}

export default HolaMundo;