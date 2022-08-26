import React, { useState, useEffect } from "react"
import { searchPokemon } from "../api"

const Search = () => {
  const [search, setSearch] = useState("charizard")
  const [pokemon, setPokemon] = useState()

  const onChangeHandler = event => {
    setSearch(event.target.value)
  }



  const onButtonClickHandler = () => {
    onSearchHandler(search)
  }

  const onSearchHandler = async pokemon => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)

  }



  return (
    <div className="search">
      <input
        className="searchBar"
        type="text"
        placeholder="Search"
        onChange={onChangeHandler}
      />
      <button className="searchButton" onClick={onButtonClickHandler}>
        <i className="fas fa-search " />
      </button>
      {pokemon ? (
        <div>
          <p className="pokemonName">{pokemon.name}</p>
          <p className="pokemonId">#{pokemon.id}</p>
          <p className="pokemonHeight">Height: {pokemon.height} M</p>
          <p className="pokemonWeight">Weight: {pokemon.weight} Kgs</p>
          <p className="pokemonTypes">
            Type: {pokemon.types.map(type => type.type.name).join(", ")}
          </p>
          <img
            className="pokemonImage"
            src={pokemon.sprites.front_default}
            alt="pokemon"
          />
        </div>
      ) : (
        <p>Pokemon Not Found!</p>
      )}
    </div>
  )
}




export default Search;