import React, { useEffect, useState } from 'react'

/*
    Conditionally rendering component with useEffect hook

    For conditionally executing an effect, we pass in a second parameter.
    This parameter is an array.
    In this aray, we need to specify the props/state that we need to watch for.
    Only if those state or props specified in this array change, the effect would be executed.

    In useEffect() hook, first parameter is a function (effect) and the second parameter is an array that can be used to conditionally run the function (effect)
    The second parameter is the array of values that determine whether the function (effect) runs or not
    If the values don't change between renders, the function (effect) is not run.
*/

function HookCounter6() {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(() => {
        console.log("Updating document title");
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={(event) => {setName(event.target.value)}} />
            <button onClick={() => setCount((prevValue) => (prevValue + 1))}>Clicked {count}</button>
        </div>
    )
}

export default HookCounter6
