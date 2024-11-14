import React from "react";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const PokemonListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function PokemonList({ pokemonData, addPokemon }) {
  return (
    <div>
      <h2>Pokemons List!</h2>
      <PokemonListWrapper>
        {pokemonData.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            addPokemon={addPokemon}
            key={pokemon.id}
          />
        ))}
      </PokemonListWrapper>
    </div>
  );
}
