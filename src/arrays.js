import React, { useState } from 'react';

function Arrays() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 12)
        }]);
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.id} >{item.value}</li>)
                }
            </ul>
            <h2>{JSON.stringify(items)}</h2>
        </div>
    )
}

export default Arrays;
