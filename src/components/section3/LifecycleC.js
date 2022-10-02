import React, { Component } from 'react'
import LifecycleD from './LifecycleD';

/*
    Order of execution of methods during Mounting phase

    When child components are present
        -> constructor() of parent -> getDerivedStateFromProps() of parent -> render() of parent -> constructor() of child -> getDerivedStateFromProps() of child -> render() of child  -> componentDidMount() of child -> componentDidMount() of parent
*/

class LifecycleC extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Saurabh"
        }
        console.log("LifecycleC -> constructor()");
    }

    changeState = () => {
        this.setState ({
            name: "Suman"
        })
    }

    // This method gets access to props and states and has to return new state or null
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleC -> getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleC -> componentDidMount()");
    }

    shouldComponentUpdate() {
        console.log("LifecycleC -> shouldComponentUpdate()");
        return true;
    }

    getSnapshotBeforeUpdate() {
        console.log("LifecycleC -> getSnapshotBeforeUpdate()");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleC -> componentDidUpdate()");
    }

    render() {
        console.log("LifecycleC -> render()");
        return (
            <>
                <h1>Lifecycle C</h1>
                <LifecycleD />
                <button onClick={this.changeState}>Change State</button>
            </>
        )
    }
}

export default LifecycleC
