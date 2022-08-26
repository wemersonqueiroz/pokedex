import pokedex from "../assets/pokedex.png"
import React from "react"

const Pokedex = () => {
  return (
    <div>
      <img className="pokedexImage" src={pokedex} alt="pokedex" />
    </div>
  )
}

export default Pokedex
