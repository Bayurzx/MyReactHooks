import React from "react";
import "./App.css";
import ComponentC from "./Context/ComponentC";

export const myContext = React.createContext();
export const channelContext = React.createContext();

// using it with useContext now, we notice that...
// this doesn't change only the consumption of the value in component does

function AppComponent() {
    return (
        <div className="App">
            <myContext.Provider value={"Bayurzx"} >
                <channelContext.Provider value={"Learning from Codevolution"}>
                    <ComponentC />
                </channelContext.Provider>
            </myContext.Provider>
        </div>
    );
}

export default AppComponent;
