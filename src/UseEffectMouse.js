import React, {useEffect, useState} from 'react'


// check UseEffectClean.js, we unmounted the V-DOM display which triggered this useeffect
const UseEffectMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log("Mouse event logged")
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("Useeffect called");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("unmounting component");
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, [])

    return (
        <div>
           <p>
               {`X -> ${x}`}
           </p>
           <p>
               {`Y -> ${y}`}
           </p>
        </div>
    )
}

export default UseEffectMouse;
