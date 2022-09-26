import React from "react";

/*
    Destructuring - Is an ES6 feature that makes it possible to unpack values from arrays or properties from objects, into distinct variables.
    In react destructuring props and state improves code readability.

    2 ways to destructure props in functional component-
	    Destructuring in the function parameter itself
        Destructuring in the function body
*/

/* Destructuring in the function parameter itself */
// const GreetPropsDestructuring = ({name, heroName}) => {
//     return (
//         <h1>Hello {name} a.k.a {heroName}</h1>
//     )
// }

/* Destructuring in the function body */
const GreetPropsDestructuring = (props) => {
    const {name, heroName} = props;
    return (
        <h1>Hello {name} a.k.a {heroName}</h1>
    )
}

export default GreetPropsDestructuring
