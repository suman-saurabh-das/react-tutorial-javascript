import React, { Component } from 'react'

/*
  In props, we can pass a function and in the child component, we can call the function to get the value from the function.
  We can also pass a parameter to the function and conditionally render different value in the UI.

  e.g. In User component, we have a function passed as a prop to User.js
  Now based on the value of parameter passed when calling the function, we can render guest or Saurabh

  In react it is possible to pass a function as a prop which can be used to control what is rendered in the UI
  Render props - The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function
*/

class User extends Component {
  render() {
    return (
      <div>
        {this.props.name(false)}
      </div>
    )
  }
}

export default User
