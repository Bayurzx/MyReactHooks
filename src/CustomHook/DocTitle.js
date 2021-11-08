import React, {useState} from 'react'
import useDocTitle from '../useHooks/useDocTitle';

function DocTitle() {
    const [count, setCount] = useState(0);

    // we imported the custom hook useDocTitle, 
    // which is basically useEffect + my logic
    useDocTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count => count+1)}>Count - {count}</button>        
            
        </div>
    )
}

export default DocTitle;
