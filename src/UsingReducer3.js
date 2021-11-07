import React, {useReducer} from 'react';

// This highlights how you can use multiple useReducers with the same code
function UsingReducer3() {
    const initialCount = 0;

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
        
            case 'decrement':
                return state - 1;
        
            case 'reset':
                return 0;
        
            default:
                console.log(new Error("Input error at switch statement"));
                return "Error";
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCount);
    const [stateTwo, dispatchTwo] = useReducer(reducer, initialCount);
    return (
        <div>
            The state is {state}
            <div className="mt-5"><button onClick={() => dispatch('increment')}>INCREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch('decrement')}>DECREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch('reset')}>RESET</button></div>
            <br /> <br />
            The state is {stateTwo}
            <div className="mt-5"><button onClick={() => dispatchTwo('increment')}>INCREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatchTwo('decrement')}>DECREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatchTwo('reset')}>RESET</button></div>
        </div>
    )
}

export default UsingReducer3;
