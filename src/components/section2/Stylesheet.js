import React from 'react'
import './myStyles.css'

/*
    We can add a class name and modify the stylings of the HTML tags
    We can also conditionally add a class based on the props or state of the component
    To add multiple classes, best way is to used template literals
*/

function Stylesheet(props) {
  const setTextColor = props.primary ? "primaryColor" : ""
  return (
    <div>
      <h1 className={`${setTextColor} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet
