import React from 'react'
import { useState } from 'react';

/*
    NOTE - Whenever we want to change the value based on previous value, always pass a function in the setState method, which will have access to the previous state value and change the new value based on the previous value.
*/

function HookCounter2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount((prevCount) => (prevCount+1))
            // Here we are passing a function that has access to the old value and we are incrementing that by 1
        }
    }
    return (
        <div>
            Count : {count} <br />
            <button onClick={() => (setCount(initialCount))}>Reset</button> <br />
            <button onClick={() => (setCount((prevCount) => (prevCount + 1)))}>Increment ++</button> <br />
            <button onClick={() => (setCount((prevCount) => (prevCount - 1)))}>Decrement --</button> <br />
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounter2
