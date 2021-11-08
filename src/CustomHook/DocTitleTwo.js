import React, {useEffect, useState} from 'react'

function DocTitleTwo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count => count+1)}>Count - {count}</button>        
        </div>
    )
}

export default DocTitleTwo;
