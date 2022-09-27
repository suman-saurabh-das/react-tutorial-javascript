/*
We want to change the text from welcome user to thank you for subscribing
If we use props, it will not work as props are immutable

Steps to use state -
    Step 1 - Create a state object and initialize it
            Call super() method in constructor (to call reacts base class constructor)
            Create a state object (state is a reserved keyword in react)
            Initialize a property in the state
    Step 2 - Bind this state value in the render function
    Step 3 - Listen to click event in button and change the message
    Step 4 - Create an on-click event handler and change the value of message
*/

import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome User"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for subscribing !"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message