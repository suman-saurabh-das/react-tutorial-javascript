import React from 'react'
import Person from './Person'
/*
    Rendering a simple array of items
    Rendering an array of object with multiple properties
        For this the best practice is to create a component which is only responsible for displaying the data and sending the data as props from the parent component (separation of concerns)

    In console we get a warning saying that "Each child in a list should have a unique "key" prop"
    In simpler words, each item in the list rendered using map should have a prop called key and the value to that prop should be unique in the list
    NOTE - Key prop need not be an id always, it can be anything as long as it is unique
    NOTE - Key props are not accessible in the child components. We will get this warning - "Person: `key` is not a prop. Trying to access it will result in `undefined` being returned."

    Importance of key -
    Keys help react identify which items in the list have changed, added or removed and plays a crucial role in handling UI updates efficiently.
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
    const personList = persons.map(persons => <Person key={persons.id} persons={persons}/>)
    return(
        <>
            {personList}
        </>
    )
}

export default NameList
