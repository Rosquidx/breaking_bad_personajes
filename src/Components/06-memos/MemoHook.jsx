import React, { useMemo, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effect.css'

const procesoPesado = (iteraciones) =>{
    for (let index = 0; index < iteraciones; index++) {
        console.log('Ahi vamos...');
    }
    return `${iteraciones} iteraciones realizadas.`;
}


const MemoHooks = () => {
    
    const {counter, increment} = useCounter(2000);
    const [show, setShow] = useState(true);

    const memoProceso = useMemo(() => procesoPesado(counter), [counter]);
    return (
        <div>
            <h1>Memo Hook</h1>
            <hr/>

            <h2>Counter: <small>{counter}</small></h2>
            <p>{memoProceso}</p>
            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default MemoHooks
