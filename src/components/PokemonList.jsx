import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";

const PokemonListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function PokemonList() {
  return (
    <div>
      <h2>Pokemons List!</h2>
      <PokemonListWrapper>
        {MOCK_DATA.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.id} />)}
      </PokemonListWrapper>
    </div>
  );
}
