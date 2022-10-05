// import React, { PureComponent } from 'react'
// import PureComp from './PureComp'
// import RegularComp from './RegularComp'

import React, {Component} from 'react'
import MemoComp from './MemoComp'

/*
    If the parent component does not re-render, its child components will also not re-render.
*/

class ParentComp extends Component {
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
        {/* <PureComp name={this.state.name}/> */}
        {/* <RegularComp name={this.state.name}/> */}

        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
