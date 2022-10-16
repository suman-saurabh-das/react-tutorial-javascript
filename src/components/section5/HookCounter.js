import React, { useState } from 'react'

/*
    A hook is a special function that lets us hook into React features
    useState is a hook that allows us to add state to functional components

    The useState hook or function accepts an argument which is the initial value of the state property and returns the current value of the state property and a method that is capable of updating that state property.

    Steps to use useState hook
    
    Import useState from react (named import so we use {})
        (to use hooks, since they are functions, we directly call them)
    Call useState by passing it a default value
    Assign the return pair of values to the variables using array de-structuring
    Use them in the render function
        (the variable count will always contain the current state value and setCount() method will accept an argument and set the count value to that argument)
    
    The first time the component renders, a state variable is created and initialized with a default value of 0
    The default value is never used on re-renders.
    When we click on the button, the setCount method is called which will add 1 to the current count value
    On first click, the count is incremented to 1 from 0 and setCount() method will re-render the component.
    After the re-render, count will contain value 1 which gets displayed as part of the inner text of the browser.
*/

function HookCounter() {
    const [count, setCount] = useState(0)   // array de-structuring

    return (
        <div>
            <button onClick={() => (setCount(count+1))}>Count {count}</button>
        </div>
    )
}

export default HookCounter