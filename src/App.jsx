import React, { useState, useEffect } from "react"
import pokemonLogo from "./assets/pokemon.png"
import Search from "./components/Search"

import { searchPokemon } from "./api"

import "./index.css"

function App() {
  return (
    <>
      <div className="App">
        <Search />
      </div>
    </>
  )
}

export default App
