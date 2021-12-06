import React, { useState } from 'react'
import './counters.css'

function CounterApp() {

    const [contador, setContador] = useState({
        counter1 : 10,
        counter2 : 10
    });

    const {counter1, counter2} = contador;

    console.log(counter1);
    return (
        <>
            <h1>CounterApp</h1>
            <h3>{counter1}</h3>
            <h3>{counter2}</h3>
            <hr/>

            <button className="btn btn-primary" onClick={() => setContador({
                ...contador,counter1: counter1 + 1,
            })}>+1</button>
        </>
    )
}

export default CounterApp
