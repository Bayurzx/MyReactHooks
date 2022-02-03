import React, {useState} from 'react'

function Counter() {
    const [counter, setCounter] = useState(42)

    const increment = () => {
        setCounter(val => val + 1); 
    }

    return (
        <>
            <div>
                <h2>{counter}</h2>

                <button onClick={increment} className="counter-button">
                    Click
                </button>
            </div>
            <style>
                {`
                    .counter-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                `}
            </style>
        </>
    )
}

export default Counter;
