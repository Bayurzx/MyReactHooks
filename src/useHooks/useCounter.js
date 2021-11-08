import {useState} from 'react'


function useCounter(initialState=0, value=1) {
    const [count, setCount] = useState(initialState);

    const increment = () =>  setCount(val => val + value);

    const decrement = () =>  setCount(val => val - value);

    const reset = () =>  setCount(initialState);

    return [count, increment, decrement, reset]

}

export default useCounter;
