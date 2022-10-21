import React, { Component } from 'react'

/*
    Steps to create an interval counter using class component

    1. We create a state variable count with initial value 0
    2. Create an interval timer that will update the count value by 1 every 1 second
        We create the timer in componentDidMount() which runs every second and updated the tick method
    3. The tick method is used to update the count value by 1 every second
*/

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
        this.tick = this.tick.bind(this)
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    // tick () {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }

    tick () {
        this.setState((prevValue) => ({count: prevValue.count + 1}))
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
