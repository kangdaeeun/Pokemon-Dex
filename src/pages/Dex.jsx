import { useNavigate } from "react-router-dom";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";


const Dex = () => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState([]); 

  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </button>
      <DashBoard pokemon={pokemon} setPokemon={setPokemon} />
      <PokemonList pokemon={pokemon} setPokemon={setPokemon} />
    </>
  );
};

export default Dex;
