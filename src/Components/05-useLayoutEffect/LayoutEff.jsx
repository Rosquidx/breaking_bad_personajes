import React, { useLayoutEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "../05-useLayoutEffect/layout.css";

const Layour = () => {
    const { counter, increment, decrement } = useCounter(1);
    const { data } = useFetch(
        `https://www.breakingbadapi.com/api/characters/${counter}`
    );
    const { name, nickname, birthday, img } = !!data && data[0];
    const pTag = useRef();
    useLayoutEffect(() => {
        console.log(pTag.current.getBoundingClientRect());
    }, [name]);
    console.log(!data);
    return (
        <div>
            <h1>Layouts Effect</h1>
            <hr />

            <div>
                <h1 ref={pTag}>{name}</h1>
                <h1>{nickname}</h1>
                <h1>{birthday}</h1>
                <img src={img} alt={name} />

                {counter === 1 ? (
                    <div>
                        <button className="btn btn-primary" onClick={increment}>
                            Siguiente personaje
                        </button>
                    </div>
                ) : (
                    <>
                        <div>
                            <button className="btn btn-primary" onClick={increment}>
                                Siguiente personaje
                            </button>
                        </div>

                        <div>
                            <button className="btn btn-dark" onClick={decrement}>
                                Regresar personaje
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Layour;
