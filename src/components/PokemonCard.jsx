import React from "react";
import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

export default function PokemonCard({ pokemon }) {
  const {addPokemon} = usePokemon();
  return (
    <Link key={pokemon.id} to={`/detail/${pokemon.id}`} >
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h3>{pokemon.korean_name}</h3>
      <button onClick={(event) => addPokemon(event, pokemon)}>추가</button>
    </Link>
  );
}
