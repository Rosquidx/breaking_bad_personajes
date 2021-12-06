import React, {useState } from 'react'
import Multipleshooks from '../03-multipleHooks/Multipleshooks'

const RealScreen = () => {

    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {show && (<Multipleshooks />)}

            <button className="btn btn-dark" onClick={() => setShow(!show)}>Show/Hidden</button>
        </div>
    )
}

export default RealScreen
