import React, { Component } from 'react'

/*
    Creating a click handler event in class component is similar to the functional component,
    but we will have to access the event handler function using the this keyword
    NOTE - When we define a function inside the class, we do not use the function keyword
*/

export class ClassClick extends Component {
    clickHandler () {
        console.log("Clicked the button");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me Again !</button>
            </div>
        )
    }
}

export default ClassClick
