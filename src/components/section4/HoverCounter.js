import React, { Component } from 'react'
import WithCounter from './withCounter' 

/*
    Here we are duplicating the code for the counter.
    But we need our code to be DRY (don't repeat yourself), for this we have 2 solutions

    Solution 1 - Lift the counter logic to Parent and pass props
    i.e. counter logic will be written in the parent i.e. App.js and we will pass count variable as a prop
    this will work in our scenario, where both ClickCounter.js and HoverCounter.js are part of the same parent (App.js)

    Solution 2 - But if the counter components are scattered in the React component tree, lifting the state will not be a great solution. So there is need for sharing common functionality between components without repeating code.
    So we will be using Higher order components

    Why Higher order components ? -> To share common functionality between components.

    Higher Order Components (HOC) -
    A pattern where a function takes a component as an argument and returns a new component.
    An HOC adds additional data or functionality to components without code repetition.

    const NewComponent = higherOrderComponent(originalComponent)
    const EnhancedComponent = higherOrderComponent(originalComponent)

    e.g. const IronMan = withSuit(TonyStark)
*/

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>{this.props.name} Hovered {this.props.count} times</h1>
            </div>
        )
    }
}

export default WithCounter(HoverCounter, 10)
