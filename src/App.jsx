import React, { useState, useEffect } from "react"

import pokemonLogo from "./assets/pokemon.png"
import Pokedex from "./components/Pokedex"

import { ButtonPrevious, ButtonNext } from "./components/Button"
import Search from "./components/Search"

import { searchPokemon } from "./api"

import "./index.css"

function App() {

  return (
    <>
      <div className="App">
        <img className="pokemonLogo" src={pokemonLogo} alt="pokemonLogo" />
        <div className="pokedexContainer">
          <Pokedex />

          <Search/>
          <div className="pokemonList"></div>
        </div>
      </div>
    </>
  )
}

export default App
