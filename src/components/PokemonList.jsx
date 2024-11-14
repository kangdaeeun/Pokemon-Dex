import React from "react";
import PokemonCard from "./PokemonCard";

export default function PokemonList({ pokemonData, addPokemon }) {
  return (
    <div>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          pokemon={pokemon}
          addPokemon={addPokemon}
          key={pokemon.id}
        />
      ))}
    </div>
  );
}
