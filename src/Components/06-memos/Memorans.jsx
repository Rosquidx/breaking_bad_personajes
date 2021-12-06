import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import '../02-useEffect/effect.css'
import Small from './Small';
const Memorans = () => {
    
    const {counter, increment} = useCounter(1);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorice</h1>
            <hr/>

            <h2>Counter: <Small value={counter}/></h2>

            <button className="btn btn-primary" onClick={increment}>+1</button>

            <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}

export default Memorans
