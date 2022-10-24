import React, { useReducer } from 'react'

/*
    Steps to manage state using useReducer()

    1. import useReducer() from react
    2. useReducer() is also a function like other hooks and we need to call it inside our functional component
        useReducer takes 2 arguments - reducer function & initial state.
    3. Define the initial state and reducer function
        reducer function accepts 2 arguments - currentState & action and it returns a newState
        action parameter - acts as an instruction to the reducer function based on what the action specifies, the reducer function performs the necessary state transition. In our case we have 3 actions - increment, decrement & reset.
        The convention to execute code based on action is to use switch statements
    4. We need to get hold of a value to display in the JSX and we will also need a way to call reducer function with appropriate action. These values are returned from useReducer() hook and can be obtained using array destructuring.
        count - is the currentState
        dispatch method - allows us to execute code corresponding to a particular action
        argument to dispatch method is the action i.e. specified in the reducer function
*/

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case "increment": return state + 1
        case "decrement": return state - 1
        case "reset": return initialState
        default: return state
    }
}

function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState)
        // count - is the currentState
        // dispatch method - allows us to execute code corresponding to a particular action
        // argument to dispatch method is the action i.e. specified in the reducer function

    return (
        <div>
            <h1>Count : {count}</h1>

            <button onClick={() => {dispatch("reset")}}>Reset Count</button>
            <button onClick={() => {dispatch("increment")}}>Increment Count</button>
            <button onClick={() => {dispatch("decrement")}}>Decrement Count</button>
        </div>
    )
}

export default Counter1
