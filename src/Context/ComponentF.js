import React, { useContext } from "react";
import { myContext, channelContext } from "../AppComponent";

// my is passed from the AppComponent
// git the createContext branch to see the first method

function ComponentF() {
  const me = useContext(myContext);
  const channel = useContext(channelContext);
    return (
      <div>
        {me} is learning from {channel} 
      </div>
    );
}

export default ComponentF;
