import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((pokemon) => pokemon.id === Number(id));

  if (!pokemon) {
    return (
      <div>
        <p>그런 포켓몬은 없다옹</p>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{pokemon.korean_name}</h1>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>Type: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;
