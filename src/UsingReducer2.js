import React, {useReducer} from 'react';

function UsingReducer2() {

    const initialState = {
        firstCounter: 0,
        secondCounter: 10
    };
    const payload = 20;

    const init = (payload) => {
        return payload;
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, firstCounter: state.firstCounter + action.value};
        
            case 'decrement':
                return {...state, firstCounter: state.firstCounter - action.value};
        
            case 'secondIncrement':
                return {...state, secondCounter: state.secondCounter + action.value};
        
            case 'secondDecrement':
                return {...state, secondCounter: state.secondCounter - action.value};
        
            case 'reset':
                return initialState;
        
            default:
                console.log(new Error("Switch had input error"));
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            The state is {state && state.firstCounter}
            <br />
            The state is {state && state.secondCounter}
            <br />
            <div className="mt-5"><button onClick={() => dispatch({type: 'increment', value: 1})}>INCREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch({type: 'decrement', value: 1})}>DECREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch({type: 'increment', value: 5})}>INCREMENT 5</button></div>
            <div className="mt-5"><button onClick={() => dispatch({type: 'decrement', value: 5})}>DECREMENT 5</button></div>
            <br />
            <div className="mt-5"><button onClick={() => dispatch({type: 'secondIncrement', value: 5})}>INCREMENT 5</button></div>
            <div className="mt-5"><button onClick={() => dispatch({type: 'secondDecrement', value: 5})}>DECREMENT 5</button></div>
            <div className="mt-5"><button onClick={() => dispatch({type: 'reset'})}>RESET</button></div>
        </div>
    )
}

export default UsingReducer2;
