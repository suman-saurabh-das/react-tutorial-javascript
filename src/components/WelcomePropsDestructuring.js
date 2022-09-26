import React, { Component } from "react";

/*
    In case of class components, we tend to destructure props in the render method
    NOTE - We can also destructure only the required components from the props (all components are not required)
*/

class WelcomePropsDestructuring extends Component {
    render() {
        const {name, heroName} = this.props;
        // const {state1, state2, state3} = this.state;
        return (
            <>
                <h1>Welcome {name} a.k.a {heroName}</h1>
            </>
        )
    }
}

export default WelcomePropsDestructuring;
