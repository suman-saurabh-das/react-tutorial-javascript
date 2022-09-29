import React, { Component } from 'react'

/*
    Here we want to render either welcome saurabh or welcome guest based on state variable
    <h1>Welcome Saurabh</h1> or <h1>Welcome Guest</h1>
*/

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        /* Method 1 - if-else statement to render different components.
        NOTE - We cannot use if else condition inside the JSX. */
        // if(this.state.isLoggedIn){
        //     return <h1>Welcome Saurabh</h1>
        // } else {
        //     return <h1>Welcome Guest</h1>
        // }

        /* Method 2 - Using element variables
        In this approach we use JS variables to store elements.
        This approach also helps us in rendering the entire component or a part of the component. */
        // let message;
        // if(this.state.isLoggedIn){
        //     message = <h1>Welcome Saurabh</h1>
        // } else {
        //     message = <h1>Welcome Guest</h1>
        // }
        // return <>{message}</>

        /* Method 3 - Ternary conditional operator
        This approach is simpler and we can use it inside the JSX. */
        // return (
        //     this.state.isLoggedIn ? 
        //     <h1>Welcome Saurabh</h1> :
        //     <h1>Welcome Guest</h1>
        // )

        /* Method 4 - Short Circuit operator
        Specific case of ternary operator method, when we want to display a component or render nothing. */
        return this.state.isLoggedIn && <h1>Welcome Saurabh</h1>
    }
}

export default UserGreeting
