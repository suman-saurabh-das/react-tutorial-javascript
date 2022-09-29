import React from 'react'

/*
    The Person component is only responsible for rendering the data which it gets from the parent
*/

function Person({persons}) {
    return (
        <>
            <h2>
                I am {persons.name}. I am {persons.age} years old. I know {persons.skill}
            </h2>
        </>
    )
}

export default Person
