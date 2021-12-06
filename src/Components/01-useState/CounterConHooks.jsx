import React from 'react'
import useCounter from '../../hooks/useCounter'
import './counters.css'

const CounterConHooks = () => {

    const { state: counter,
        increment,
        decrement,
        resetear } = useCounter(8599);

    return (
        <>
            <h1>Counter con Hooks: {counter}</h1>
            <hr />

            <button className="btn btn-success" onClick={increment}>+1</button>
            <button className="btn btn-dark" onClick={resetear}> Resetar</button>
            <button className="btn btn-warning" onClick={decrement}>+1</button>
        </>
    )
}

export default CounterConHooks
