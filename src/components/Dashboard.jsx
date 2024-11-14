import React from "react";
import styled from "styled-components";

const PokemonListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Dashboard({ selectedPokemons, removePokemon }) {
  return (
    <div>
      <h2>Selected Pokemons!</h2>
      <PokemonListWrapper>
        {selectedPokemons.map((pokemon) => {
          return (
            <div key={pokemon.id}>
              <img src={pokemon.img_url} alt={pokemon.korean_name} />
              <h3>{pokemon.korean_name}</h3>
              <button onClick={() => removePokemon(pokemon)}>삭제</button>
            </div>
          );
        })}
      </PokemonListWrapper>
    </div>
  );
}
