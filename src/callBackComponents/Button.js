import React from 'react'

function Button({handleClick, children}) {
    console.log(`Rendering button - ${children}`);

    return (
        <button onClick={handleClick}>{children}</button>
    )
}

// This prevent this component from rerendering unless called

export default React.memo(Button);