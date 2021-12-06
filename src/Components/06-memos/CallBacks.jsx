import React, { useCallback, useState } from 'react'
import '../02-useEffect/effect.css'
import ShowIncrement from './ShowIncrement';

const CallBacks = () => {

    const [counter, setcounter] = useState(10);

    // const increment = () => {
    //     setcounter(counter + 1);
    // }

    const increment = useCallback(
        (num) => {
            setcounter(c => c + num);
        },
        [setcounter],
    )
    return (
        <div>
            <h1>CallBacks {counter}</h1>
            <hr/>


            <ShowIncrement increment={increment}/>
        </div>
    )
}

export default CallBacks
