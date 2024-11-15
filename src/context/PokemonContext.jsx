import React, { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selectedPokemons, setSelectedPokemons] = React.useState([]);

  const addPokemon = (event, pokemon) => {
    event.preventDefault();
    if (selectedPokemons.find((e) => e.id === pokemon.id)) {
      return alert("이미 선택된 포켓몬이야!!");
    }
    if (selectedPokemons.length >= 6) {
      return alert("6마리가 최대야");
    }
    setSelectedPokemons([...selectedPokemons, pokemon]);
  };

  const removePokemon = (pokemon) => {
    const updatedPokemons = selectedPokemons.filter((e) => e.id !== pokemon.id);
    setSelectedPokemons(updatedPokemons);
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemons, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
