import React, {useState, useEffect} from 'react'

function UseEffectInterval() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        let interval
        if (count < 17) {
            console.log('foo');
            
            interval =  setInterval( tick , 1000);
            console.log('yoo');
        }
        
        return () => {
            clearInterval(interval)
            console.log('bar');
        }
    }, [count]) // NOTE: If you remove the `count` dependency, it will work but it's risky... 
                // ... Because, it ignores the `if statement`, `return statement` and log

    return (
        <div>
            <h2>{count}</h2>
        </div>
    )
}

export default UseEffectInterval;
