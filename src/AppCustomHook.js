import React from 'react'
// import './App.css'
import DocTitle from './CustomHook/DocTitle';
import DocTitleTwo from './CustomHook/DocTitleTwo';

function AppCustomHook() {
    return (
        <div className="App">
            <DocTitle />
            <DocTitleTwo />
        </div>
    )
}

export default AppCustomHook;
