import React, { PureComponent } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

/*
    If the parent component does not re-render, its child components will also not re-render.
*/

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Saurabh"
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Saurabh"
            })
        }, 2000)
    }
    
  render() {
    console.log("Parent component rendered");
    return (
      <div>
        Parent Component
        <PureComp name={this.state.name}/>
        <RegularComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
