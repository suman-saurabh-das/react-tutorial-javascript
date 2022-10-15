import React, { Component } from 'react'
import ComponentE from './ComponentE'

/*
    Our goal is to get data from the App.js component to the ComponentF using context
    
    Steps to implement context
    1. Create the context
    2. Provide a context value
    3. Consume the context value
*/

class ComponentC extends Component {
    render() {
        return (
            <ComponentE />
        )
    }
}

export default ComponentC
