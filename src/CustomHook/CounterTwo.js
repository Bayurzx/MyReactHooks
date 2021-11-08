import React from 'react'
import useCounter from '../useHooks/useCounter';

function CounterTwo() {
    // we imported the custom hook useCounter, 
    // which is basically useEffect + my logic

    const [count, increment, decrement, reset] = useCounter(0, 15)
    return (
        <div>
            <h2>Count - {count}</h2>
            <button className="mr-5" onClick={increment}>Increment </button>
            <button className="mr-5" onClick={decrement}>Decrement </button>
            <button className="mr-5" onClick={reset}>Reset </button>
        </div>
    )
}

export default CounterTwo;
