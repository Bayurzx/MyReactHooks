import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

export default function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000)

    // wrap your function around callback to 
    // prevent rerender, it acts like useeffect
    // ensures the function runs when its dependency 
    //changes else only run once 
    // we also use React.memo to prevent rerender, this is not a hook
    const incrementAge = useCallback(() => {
            setAge(age + 1);
        },
        [age],
    )

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
        },
        [salary],
    )

    
    return (
        <div>
            <Title />
            <Count text="Age" count={age}/>
            <Button handleClick={incrementAge}> Increment Age by 1 </Button>
            <Count text="Salary" count={salary}/>
            <Button handleClick={incrementSalary}> Increment Salary </Button>

        </div>
    )
    
}