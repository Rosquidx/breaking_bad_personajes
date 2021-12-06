import React, { useRef } from 'react';
import "../02-useEffect/effect.css";
const Focusiado = () => {

    const ref = useRef();

    const handleClick = () => {
        ref.current.select();
        console.log(ref)
    }
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            <input type="text"  ref={ref} name="" id="" className="form-control" placeholder="Angelica Roman" />

            <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
        </div>
    );
};

export default Focusiado;
