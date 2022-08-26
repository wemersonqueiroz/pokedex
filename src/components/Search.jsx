import React, { useState, useEffect } from "react"
import { searchPokemon } from "../api"
import pokedex from "../assets/pokedex.png"
import pokemonLogo from "../assets/pokemon.png"
const Search = () => {
  const [search, setSearch] = useState("ditto")
  const [pokemon, setPokemon] = useState()

  const onChangeHandler = event => {
    setSearch(event.target.value)
  }

  const pressEnter = event => {
    if (event.key === "Enter") {
      searchPokemon(search).then(data => {
        setPokemon(data)
      })
    }
  }

  useEffect(() => {
    document.addEventListener("keypress", pressEnter)
    return () => {
      document.removeEventListener("keypress", pressEnter)
    }
  }, [search])

  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async pokemon => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <div className="search ">
      <img className="pokemonLogo" src={pokemonLogo} alt="pokemonLogo" />

      <div className="containerPokedex">
        <img className="pokedexImage" src={pokedex} alt="pokedex" />
        <input
          className="searchBar"
          type="text"
          placeholder="Search"
          onKeyDown={pressEnter}
          onChange={onChangeHandler}
        />
        <button className="searchButton" onClick={onButtonClickHandler}>
          <i className="fas fa-search " />
        </button>
        {pokemon ? (
          <>
            <div className="pokemonName">{pokemon.name}</div>
            <div className="pokemonId">#{pokemon.id}</div>
            <div className="pokemonHeight">Height: {pokemon.height} M</div>
            <div className="pokemonWeight">Weight: {pokemon.weight} Kgs</div>
            <div className="pokemonTypes">
              Type: {pokemon.types.map(type => type.type.name).join(", ")}
            </div>
            <div className="pokemonImage">
              <img src={pokemon.sprites.front_default} alt="pokemon" />
            </div>
          </>
        ) : (
          <div className="pokemonNotFound"> Pokemon Not Found!</div>
        )}
      </div>
    </div>
  )
}

export default Search
