import React from 'react'

const Title = () => {
    console.log("Rendering Title");

    return (
        <h2>useCallBack</h2>
    )
}

export default React.memo(Title);