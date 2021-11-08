import React from 'react'
import Counter from './CustomHook/Counter';
import CounterTwo from './CustomHook/CounterTwo';

// You should remember this moment, you solved this
// even though you had doubts with two errors
// You were able to solve this by your self
function AppCustomHook() {
    return (
        <div className="App">
            <Counter />
            <CounterTwo />
        </div>
    )
}

export default AppCustomHook;
