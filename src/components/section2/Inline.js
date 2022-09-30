import React from 'react'

/*
    In react, inline styles are not specified as a string, instead they are specified within an object
    whose key & value are the camelCase version of the style name and the value is usually a string in camelCase.
*/

const heading = {
    fontSize: '72px',
    color: 'dodgerBlue'
}

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
