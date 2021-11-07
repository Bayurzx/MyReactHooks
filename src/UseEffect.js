import React, { useState, useEffect } from 'react'


function UsingEffect() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Updating document title");
        document.title = `Click me ${count}`;
    }, [count])

    // notice that when the array is empty, it doesn't rerender
    // because there is nothing to update
    // You can add the state value that requires changes though eg count 

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => {
                setCount(count+1)
            }}>
                Click me {count}
            </button>
        </div>
    )
}

export default UsingEffect;
