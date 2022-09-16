/*
Firstly we need to import React and Component class from "react"
Define a class which extends the Component class from react
The class must implememt a render method which returns null or some HTML (JSX)
Now we need to export our component and import in App.js
*/

import React, {Component} from "react";

class Welcome extends Component {
    render() {
        return <h1>This is a Class Component</h1>
    }
}

export default Welcome;