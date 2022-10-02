import React, { Component } from 'react'

class LifecycleD extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Das"
        }
        console.log("LifecycleD -> constructor()");
    }

    // This method gets access to props and states and has to return new state or null
    static getDerivedStateFromProps (props, state) {
        console.log("LifecycleD -> getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleD -> componentDidMount()");
    }

    shouldComponentUpdate() {
        console.log("LifecycleD -> shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleD -> getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleD -> componentDidUpdate()");
    }

    render() {
        console.log("LifecycleD -> render()");
        return (
            <h1>Lifecycle D</h1>
        )
    }
}

export default LifecycleD
