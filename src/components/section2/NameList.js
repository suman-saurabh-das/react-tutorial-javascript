import React from 'react'
import Person from './Person'
/*
    Rendering a simple array of items
    Rendering an array of object with mutiple properties
        For this the best practice is to create a component which is only responsible for displaying the data and sending the data as props from the parent component (separation of concerns)
*/

function NameList() {
    /*
    const names = ["Bruce", "Clark", "Diana"]
    const nameListRender = names.map(name => <h2>{name}</h2>);
    return (
        <>
            {
                // Syntax : arrayName.map(Function)
                // Note map method returns a new array with each element modified based on the function.
                // Here we will be using arrow function : (parameter) => return {functionBody}

                // For returning single components with single parameter
                // names.map(name => <h2>{name}</h2>)

                // For returning multiple components with multiple parameters
                // names.map((name) => {return (<h2>{name}</h2>)})

                // We can simplify the return statement by moving out the list rendering logic
                nameListRender
            }
        </>
    )
    */

    const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Clark",
            age: 25,
            skill: "Angular"
        },
        {
            id: 3,
            name: "Diana",
            age: 28,
            skill: "Vue"
        }
    ]
    const personList = persons.map(persons => <Person persons={persons}/>)
    return(
        <>
            {personList}
        </>
    )
}

export default NameList
