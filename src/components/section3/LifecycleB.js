import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Das"
        }
        console.log("LifecycleB -> constructor()");
    }

    // This method gets access to props and states and has to return new state or null
    static getDerivedStateFromProps (props, state) {
        console.log("LifecycleB -> getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleB -> componentDidMount()");
    }

    render() {
        console.log("LifecycleB -> render()");
        return (
            <h1>Lifecycle B</h1>
        )
    }
}

export default LifecycleB
