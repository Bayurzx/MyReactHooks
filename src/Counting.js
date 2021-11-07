import React, {useState} from 'react'

function Counting() {
    const [counter, setCounter] = useState(0)

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(iigi => iigi + 1); // This works by receiving the prev state and changing it into something else
        }
    }

    return (
        <div>
            <h1>{counter} </h1>
            <br />
            <br />
            {/* <button onClick={() => setCounter(counter + 1)}><h2>++</h2></button> */}
            <button onClick={() => setCounter(iigi => iigi + 1)}><h2>++</h2></button>
            <br />
            <br />
            {/* <button onClick={() => setCounter(counter - 1)}><h2>--</h2></button> */}
            <button onClick={() => setCounter(mdsmos => mdsmos - 1)}><h2>--</h2></button>
            <br />
            <br />
            <button onClick={incrementBy5}><h2>+5</h2></button>
            {/* <button onClick={() => setCounter(counter + 5)}><h2>+5</h2></button> */}
            <br />
            <br />
            <button onClick={() => setCounter(0)}><h2>Reset</h2></button>
        </div>
    )
}

export default Counting;
