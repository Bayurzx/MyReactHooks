import React from "react";
import "./App.css";
import ComponentC from "./Context/ComponentC";

export const myContext = React.createContext();
export const channelContext = React.createContext();

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
