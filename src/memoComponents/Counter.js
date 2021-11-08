import React, {useState, useMemo} from 'react'

function Counter() {
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }
    
    const isEven = useMemo(() => {
            let i = 0;
            while (i < 2e9) i++ // 2e9 = 2,000,000,000
            return counterOne % 2 === 0;
        }, [counterOne])

    return (
        <div>
            <button className="mr-5" onClick={incrementOne}>Counter One - {counterOne} </button>
            <span>{isEven ? "Even" : "Odd"} </span>
            <br />
            <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
            <br />
        </div>
    )
}

// There is no rerender when the incrementTwo is called because
// react uses the cached "value" of counterone since it is not part of the dependencies
// not that while callback caches the provided function itself, useMemo invokes the function but caches the value
export default Counter;