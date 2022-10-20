import React, {useState, useEffect} from 'react'

/*
    In useEffect() hook, when we want to achieve the effect (function) to run only once and not to depend on anything,
    we can achieve that by specifying an empty array as the 2nd parameter to the useEffect

    We are basically telling react that this effect doesn't depend on any particular props or state.
*/

function HookMouse() {
    const [x, setXPos] = useState(0)
    const [y, setYPos] = useState(0)

    const logMousePosition = (event) => {
        console.log("Mouse event");
        setXPos(event.clientX)
        setYPos(event.clientY)
    }

    useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Component unmounting code");
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])


  return (
    <div>
      X position is {x} & Y position is {y}
    </div>
  )
}

export default HookMouse
