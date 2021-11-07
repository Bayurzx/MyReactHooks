import React from "react";
import { myContext, channelContext } from "../AppComponent";

// my is passed from the AppComponent

function ComponentF() {
  return (
    <div>
      <myContext.Consumer>
        {
          my => {
            return (
              <channelContext.Consumer>
                {
                  chan => {
                    return (
                      <div> User context value is {my} and channelContext is {chan} </div>
                    )
                  }
                }
              </channelContext.Consumer>
            )
          }
        }
      </myContext.Consumer>
    </div>
  );
}

export default ComponentF;
