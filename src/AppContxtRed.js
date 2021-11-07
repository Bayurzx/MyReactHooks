import React, {useReducer} from "react";
import "./App.css";
import ComponentA from "./ContextReducer/ComponentA";
import ComponentB from "./ContextReducer/ComponentB";
import ComponentC from "./ContextReducer/ComponentC";

export const countContext = React.createContext();

function AppContxtRed() {
    
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
   

    const [state, dispatch] = useReducer(reducer, initialCount)

    

    return (
        <div className="App">
            <h3>Count - {state}</h3>
            <countContext.Provider value= {{countState: state, countDispatch: dispatch}}>
                <ComponentA />
                <ComponentB />
                <ComponentC />
            </countContext.Provider>
        </div>
    );
}

export default AppContxtRed;
