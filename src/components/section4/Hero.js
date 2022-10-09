import React from 'react'

/*
    We will render heroNames from this component based on props
    If props passed has heroName as Joker, it will throw an error
*/

function Hero(props) {
    if(props.heroName === "Joker"){
        throw new Error("Not a hero")
    }
  return (
    <h3>
      {props.heroName}
    </h3>
  )
}

export default Hero
