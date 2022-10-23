import React, { useContext } from 'react'
import FunctionalComponentF from './FunctionalComponentF'
import { UserContext, WorkContext } from '../../App'

/*
    While using useContext() hook, the process of creating the context and passing the data from the parent component to the child component remains same. The useContext() hook only makes the consumption of data simpler.

    Steps to implement useContext() hook
    
    1. import useContext() from React
    2. import the necessary context
    3. Call the useContext() function passing in the context as its argument
    4. useContext() returns the context value which can be stored and accessed via a variable
*/
function FunctionalComponentE() {
    const user = useContext(UserContext);
    const work = useContext(WorkContext);

    return (
        <div>
            <FunctionalComponentF />
            User - {user} & Work - {work}
        </div>
    )
}

export default FunctionalComponentE
