import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    // We can also replace the ComponentE.contextType = UserContext by the following
    static contextType = UserContext

    render() {
        return (
            <>
                Component E context {this.context}
                <ComponentF />
            </>
        )
    }
}

// ComponentE.contextType = UserContext

export default ComponentE
