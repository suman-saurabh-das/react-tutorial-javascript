import React, { Component } from "react";

/*
In case of class components, we do not need to pass the props as an argument to the class
It is readily available using the this keyword and we can access them as this.props
*/

class WelcomeProps extends Component {
    render() {
        return (
            <>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
                {this.props.children}
            </>
        )
    }
}

export default WelcomeProps;
