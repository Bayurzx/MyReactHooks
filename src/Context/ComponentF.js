import React from "react";
import { myContext } from "../AppComponent";

function ComponentF() {
  return (
    <div>
      <myContext.Consumer>
        {
          my => <div> User context value is {my} </div>
        }        
      </myContext.Consumer>
    </div>
  );
}

export default ComponentF;
