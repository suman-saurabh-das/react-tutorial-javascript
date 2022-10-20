import React, { Component } from 'react'

/*
    Conditionally rendering component using componentDidUpdate

    In the componentDidUpdate() method, we compare the previous props/state and current props/state
    for a specific state variable and then using if condition, we can render the component only if the particular state variable changes
*/

class classCounter3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    incrementCount = () => {
        this.setState((prevValue) => ({count: prevValue.count+1}))
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        // Conditionally updating the title only when the appropriate state variable changes
        if(prevState.count !== this.state.count) {
            console.log("Title updated");
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} />
                <button onClick={this.incrementCount}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default classCounter3
