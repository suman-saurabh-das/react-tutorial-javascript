import React, { Component } from 'react'

/*
    Any task (piece of code) that we want to perform/execute only once, we do it inside the componentDidMount() method
    Here we are adding the mouse move event listener only once
*/

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }
    
    logMousePosition = (e) => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    componentDidMount() {
        // We are setting up the event listener only once, in the componentDidMount() method
        window.addEventListener('mousemove', this.logMousePosition)
    }

    componentWillUnmount() {
        // We are removing the listener once the component is unmounted
        window.removeEventListener('mousemove', this.logMousePosition)
    }

  render() {
    return (
      <div>
        X position - {this.state.x} & Y position - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
