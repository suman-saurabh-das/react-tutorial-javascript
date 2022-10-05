import React from 'react'

/*
    In this component, if we use a <div> tag to enclose the <td> element, we will get an error
    Instead we can make use of the React.fragment, which will not affect the DOM tree.

    NOTE - Fragments can accept the key attribute when rendering list of items.
    <React.Fragment></React.Fragment> shorthand notation : <></>
    NOTE - If we use the shorthand notation, we cannot use the key attribute
*/

function Column() {

    const items = [];
    return (
        <React.Fragment>
            {
                items.map((item) => (
                    <React.Fragment key={item.id}>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Saurabh</td>
        </React.Fragment>
    )
}

export default Column
