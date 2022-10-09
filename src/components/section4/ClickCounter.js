import React, { Component } from 'react'
import WithCounter from './withCounter'

/*
    Steps to use an HOC to enhance a component
    
    Step 1 - import UpdatedComponent from HOC component inside the component to be enhanced
    Step 2 - while exporting the component to be enhanced (ClickCounter.js), pass the original component (ClickCounter.js) as a paramter to the UpdatedComponent
    Step 3 - Now we will be able to use the data or function which is added from the HOC
*/

class ClickCounter extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <button onClick={incrementCount}>
            {this.props.name} Clicked {count} times
        </button>
      </div>
    )
  }
}

export default WithCounter(ClickCounter, 5)
