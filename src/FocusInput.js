import React, {useEffect, useRef} from 'react'

// useRef can hold reference to a DOM node
function FocusInput() {
    const inputRef = useRef(null);
    
    useEffect(() => {
        // Focus input element
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}

export default FocusInput;
