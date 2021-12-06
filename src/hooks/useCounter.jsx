import { useState } from 'react'

const useCounter = (initialState = 10) => {

    const [state, setstate] = useState(initialState);

    const increment = () => {
        setstate(state  + 1);
    }

    const decrement = () => {
        setstate(state - 1);
    }

    const resetear = () => {
        setstate(initialState);
    }

    return {
        counter: state,
        increment,
        decrement,
        resetear
    }
}

export default useCounter
