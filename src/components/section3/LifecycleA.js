import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

/*
    Order of execution of methods during Mounting phase
    When no child components are present
        -> constructor() -> getDerivedStateFromProps() -> render() -> componentDidMount()
    When child components are present
        -> constructor() of parent -> getDerivedStateFromProps() of parent -> render() of parent -> constructor() of child -> getDerivedStateFromProps() of child -> render() of child  -> componentDidMount() of child -> componentDidMount() of parent
*/

class LifecycleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Saurabh"
        }
        console.log("LifecycleA -> constructor()");
    }

    // This method gets access to props and states and has to return new state or null
    static getDerivedStateFromProps (props, state) {
        console.log("LifecycleA -> getDerivedStateFromProps()");
        return null;
    }

    componentDidMount() {
        console.log("LifecycleA -> componentDidMount()");
    }

    render() {
        console.log("LifecycleA -> render()");
        return (
            <>
            <h1>Lifecycle A</h1>
            <LifecycleB />
            </>
        )
    }
}

export default LifecycleA
