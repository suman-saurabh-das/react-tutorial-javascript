import React, { Component } from 'react'

/*
    Steps to create a counter
    1. Create a class component
    2. Create a state variable initialised to zero (count: 0)
    3. Create a method that is capable of setting the state value (incrementCount())
*/

class ClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
