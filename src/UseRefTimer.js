import React, {useState, useEffect, useRef} from 'react'

// useRef can be used to store mutable value
// meanwhile, the value persists through rerenders...
// also does not causing rerenders as the values changes
function UseRefTimer() {
    const [timer, setTimer] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        // use intervalRef.current instead of Const interval
        intervalRef.current = setInterval(() => {
            setTimer(timer => timer+1);
            console.log("useeffect");
        }, 1000);
        return () => {
            console.log("return");
            clearInterval(intervalRef.current);
        }
    }, []) // You can ignore the dependency because you are mutating it from setTimer() 

    // did some experiment, I observed that adding a dependency allows the return statemnet
    // with clear interval to run/work, meaning, if you leave hte dependency array empty,
    // you might as well delete the clearInterval() function in the return statement

    // we need to use useRef to store the interval value, "interval" was a local variable (const interval)
    // which caused an undefined error when rendered in react dom

    return (
        <div className="mt-5">
            Hook Timer - {timer}
            {/* we need useRef to store the value to be accessible here */}
            <button className="ml-5" onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default UseRefTimer;
