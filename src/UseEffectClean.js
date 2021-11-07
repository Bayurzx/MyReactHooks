import React, {useState} from 'react';
import UseEffectMouse from "./UseEffectMouse";

// check UseEffectMouse.js for the cleanup in useeffect

function UseEffectClean() {
    const [display, setDisplay] = useState(true);

    return (
      <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display </button>
        {display && <UseEffectMouse />}
      </div>
    );
}

export default UseEffectClean;
