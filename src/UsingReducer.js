import React, {useReducer} from 'react';

function UsingReducer() {
    const initialCount = 0;
    const payload = 20;

    const init = (payload) => {
        return payload;
    }

    const reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
        
            case 'decrement':
                return state - 1;
        
            case 'reset':
                return init(payload);
        
            default:
                return new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div>
            The state is {state}
            <div className="mt-5"><button onClick={() => dispatch('increment')}>INCREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch('decrement')}>DECREMENT</button></div>
            <div className="mt-5"><button onClick={() => dispatch('reset', payload)}>RESET</button></div>
        </div>
    )
}

export default UsingReducer;
