import React, { useState } from 'react'
import HookMouse from './HookMouse';

/*
    Initially, when we have not removed the mouse move event listener from the MouseHook component when it is unmounted,
    so the event listener is still listening to mouse move event even though the component has been removed from DOM (hidden)

    To prevent this, we should clean up (cancel all subscriptions and listeners) the mouse move event listener

    In case of class components, we can do it inside the componentWillUnmount() lifecycle method
        componentWillUnmount() {
            // We are removing the listener once the component is unmounted
            window.removeEventListener('mousemove', this.logMousePosition)
        }

    In case of functional components, the function that is passed into the useEffect() can return a function that will be executed when the component will unmount.
        useEffect(() => {
        console.log("useEffect called");
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log("Component unmounting code");
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
*/

function MouseContainer() {
    const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      { display && <HookMouse/> }
    </div>
  )
}

export default MouseContainer
