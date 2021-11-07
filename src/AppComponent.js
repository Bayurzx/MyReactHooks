import React from "react";
import "./App.css";
import ComponentC from "./Context/ComponentC";

export const myContext = React.createContext();

function AppComponent() {
    return (
        <div className="App">
            <myContext.Provider value={"Bayurzx"} >
                <ComponentC />
            </myContext.Provider>
        </div>
    );
}

export default AppComponent;
