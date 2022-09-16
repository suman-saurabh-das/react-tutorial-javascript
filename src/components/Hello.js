import React from "react";

/* Creating a react component using JSX */

// const Hello = () => {
//     return (
//         <div id="dummyId" className="dummyClass">
//             <h1>Hello Saurabh</h1>
//         </div>
//     )
// }
// export default Hello;

/* Creating a react component without using JSX */
/* We will use the React.createElement("param1", "param2", "param3"); method which accepts minimum 3 parametres -
    1. tag name
    2. attributes & properties (optional properties to be passed as an object)
    3. children for the tag name -> element node / text node / comment node
*/

const Hello = () => {
    return React.createElement(
        "div",
        {
            id: "dummyId",
            className: "dummyClass"
        },
        React.createElement("h1", null, "Hello Saurabh")
    )
}
export default Hello;

/*
Why do we import React from "react"
Even though it seems that we are not using it anywhere, it used for transpilation of the JSX code into JS code which uses React.createElement() internally which uses the React library.
*/
